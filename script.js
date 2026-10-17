// Armazena o texto extraído
let textoExtraido = '';

// Chave da API do Gemini — COLOQUE SUA CHAVE AQUI
const GEMINI_API_KEY = 'AQ.Ab8RN6LiP8Ys2oG2ZoVI6PAshQni63mtsg7BTE9MuEN5s24u1A';

// Navegação entre seções
function showSection(section) {
    document.getElementById('pagina-inicio').style.display = 'none';
    document.getElementById('pagina-materiais').style.display = 'block';
}

// Voltar para início
function voltarInicio() {
    document.getElementById('pagina-inicio').style.display = 'block';
    document.getElementById('pagina-materiais').style.display = 'none';
}

// Leitura do arquivo
document.addEventListener('DOMContentLoaded', function() {
    const inputArquivo = document.getElementById('arquivo-input');
    
    inputArquivo.addEventListener('change', function(e) {
        const arquivo = e.target.files[0];
        if (!arquivo) return;
        
        document.getElementById('nome-arquivo').textContent = arquivo.name;
        document.getElementById('arquivo-info').style.display = 'block';
        document.getElementById('resultado-resumo').style.display = 'none';
        
        lerArquivo(arquivo);
    });
});

async function lerArquivo(arquivo) {
    const extensao = arquivo.name.split('.').pop().toLowerCase();
    
    try {
        if (extensao === 'pdf') {
            textoExtraido = await lerPDF(arquivo);
        } else if (extensao === 'docx') {
            textoExtraido = await lerWord(arquivo);
        } else if (extensao === 'txt') {
            textoExtraido = await lerTXT(arquivo);
        } else {
            alert('Formato não suportado!');
            return;
        }
        console.log('Texto extraído com sucesso!');
    } catch (erro) {
        alert('Erro ao ler o arquivo: ' + erro.message);
    }
}

async function lerPDF(arquivo) {
    const leitor = new FileReader();
    return new Promise((resolve, reject) => {
        leitor.onload = async function(e) {
            const arrayBuffer = e.target.result;
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let texto = '';
            
            for (let i = 1; i <= pdf.numPages; i++) {
                const pagina = await pdf.getPage(i);
                const conteudo = await pagina.getTextContent();
                texto += conteudo.items.map(item => item.str).join(' ') + '\n';
            }
            resolve(texto);
        };
        leitor.onerror = reject;
        leitor.readAsArrayBuffer(arquivo);
    });
}

async function lerWord(arquivo) {
    const leitor = new FileReader();
    return new Promise((resolve, reject) => {
        leitor.onload = async function(e) {
            const arrayBuffer = e.target.result;
            const resultado = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
            resolve(resultado.value);
        };
        leitor.onerror = reject;
        leitor.readAsArrayBuffer(arquivo);
    });
}

async function lerTXT(arquivo) {
    const leitor = new FileReader();
    return new Promise((resolve, reject) => {
        leitor.onload = function(e) {
            resolve(e.target.result);
        };
        leitor.onerror = reject;
        leitor.readAsText(arquivo);
    });
}

// Mostrar texto lido
function gerarResumo() {
    if (!textoExtraido) {
        alert('Selecione um arquivo primeiro!');
        return;
    }
    
    document.getElementById('texto-resumo').textContent = 
        textoExtraido.substring(0, 3000) + (textoExtraido.length > 3000 ? '...' : '');
    document.getElementById('resultado-resumo').style.display = 'block';
    document.getElementById('botoes-acao').style.display = 'flex';
}

// Copiar texto
function copiarResumo() {
    navigator.clipboard.writeText(textoExtraido)
        .then(() => alert('Texto copiado! ✅'))
        .catch(() => alert('Não foi possível copiar'));
}

// 🆕 Gerar resumo com IA
async function gerarResumoIA() {
    if (!textoExtraido) {
        alert('Selecione um arquivo primeiro!');
        return;
    }
    
    if (GEMINI_API_KEY === 'COLOQUE-SUA-CHAVE-AQUI') {
        alert('⚠️ Coloque sua chave da API do Gemini no código primeiro!\nVeja as instruções no passo a passo.');
        return;
    }
    
    const botao = document.getElementById('btn-resumo-ia');
    botao.disabled = true;
    botao.innerHTML = '⏳ Gerando resumo...';
    
    try {
        const textoParaResumir = textoExtraido.substring(0, 15000); // Limite de caracteres
        
        const resposta = await fetch(
            ``https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`
}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Você é um assistente de estudos. Faça um resumo claro, bem organizado por tópicos e fácil de estudar do texto abaixo. Use títulos e marcadores. Texto: ${textoParaResumir}`
                        }]
                    }]
                })
            }
        );
        
        const dados = await resposta.json();
        
        if (dados.candidates && dados.candidates[0].content) {
            const resumo = dados.candidates[0].content.parts[0].text;
            document.getElementById('texto-resumo').innerHTML = formatarResumo(resumo);
            document.getElementById('resultado-resumo').style.display = 'block';
        } else {
            alert('Erro ao gerar resumo. Verifique sua chave da API.');
        }
    } catch (erro) {
        alert('Erro: ' + erro.message);
    }
    
    botao.disabled = false;
    botao.innerHTML = '✨ Gerar Resumo com IA';
}

// Formatar o resumo para exibir melhor
function formatarResumo(texto) {
    return texto
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}
