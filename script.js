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

// ✨ Gerar resumo (versão simples - sem API)
function gerarResumoIA() {
  if (!textoExtraido) {
    alert('Selecione um arquivo primeiro!');
    return;
  }

  // Mostra o texto completo
  document.getElementById('texto-resumo').innerHTML = 
    '<strong>📄 Texto extraído:</strong><br><br>' + 
    textoExtraido.substring(0, 5000) + 
    (textoExtraido.length > 5000 ? '...' : '');
  
  document.getElementById('resultado-resumo').style.display = 'block';
  document.getElementById('botoes-acao').style.display = 'flex';
  
  // Gera um resumo básico
  const frases = textoExtraido.split(/[.!?]/).filter(f => f.trim().length > 20);
  const resumo = frases.slice(0, 5).join('. ');
  
  setTimeout(() => {
    document.getElementById('texto-resumo').innerHTML = 
      '<strong>📝 Resumo:</strong><br><br>' + 
      (resumo || textoExtraido.substring(0, 800) + '...') +
      '<br><br><em>✨ Versão com IA em breve!</em>';
  }, 800);
}
