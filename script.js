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
// 🧭 Navegação entre as páginas
function mostrarPagina(paginaId) {
  // Esconde TODAS as páginas
  document.querySelectorAll('main > div').forEach(pagina => {
    pagina.style.display = 'none';
  });
  
  // Mostra a página escolhida
  const alvo = document.getElementById(paginaId);
  if (alvo) alvo.style.display = 'block';
}

// 🔗 Conecta os botões do menu às páginas
document.addEventListener('DOMContentLoaded', function() {
  // Enciclopédia
  const encCard = document.querySelector('.card-pessego');
  if (encCard) encCard.onclick = () => mostrarPagina('pagina-enciclopedia');
  
  // Autores e teorias
  const autCard = document.querySelector('.card-amarelo-claro');
  if (autCard) autCard.onclick = () => mostrarPagina('pagina-autores');
  
  // Linha do tempo
  const tempoCard = document.querySelector('.card-verde-claro');
  if (tempoCard) tempoCard.onclick = () => mostrarPagina('pagina-linhatempo');
  
  // Biblioteca
  const bibCard = document.querySelector('.card-azul-claro2');
  if (bibCard) bibCard.onclick = () => mostrarPagina('pagina-biblioteca');
  
  // Conteúdos
  const contCard = document.querySelector('.card-rosa');
  if (contCard) contCard.onclick = () => mostrarPagina('pagina-conteudos');
  
  // Glossário
  const glossarioCard = document.querySelector('.card-amarelo-claro2');
  if (glossarioCard) glossarioCard.onclick = () => mostrarPagina('pagina-glossario');
  
  // Disciplinas
  const discCard = document.querySelector('.card-verde-claro2');
  if (discCard) discCard.onclick = () => mostrarPagina('pagina-disciplinas');
});
// 📱 Navegação pela barra lateral esquerda
document.addEventListener('DOMContentLoaded', function() {
  // Enciclopédia
  const menuEnc = document.querySelector('a[href*="enciclopedia"], li:has-text("Enciclopédia")');
  if (!menuEnc) {
    const todosItens = document.querySelectorAll('.sidebar li, .menu-item');
    todosItens.forEach(item => {
      if (item.textContent.includes('Enciclopédia')) {
        item.onclick = () => mostrarPagina('pagina-enciclopedia');
      }
      if (item.textContent.includes('Autores e teorias')) {
        item.onclick = () => mostrarPagina('pagina-autores');
      }
      if (item.textContent.includes('Linha do tempo')) {
        item.onclick = () => mostrarPagina('pagina-linhatempo');
      }
      if (item.textContent.includes('Biblioteca')) {
        item.onclick = () => mostrarPagina('pagina-biblioteca');
      }
      if (item.textContent.includes('Conteúdos')) {
        item.onclick = () => mostrarPagina('pagina-conteudos');
      }
      if (item.textContent.includes('Glossário')) {
        item.onclick = () => mostrarPagina('pagina-glossario');
      }
      if (item.textContent.includes('Disciplinas')) {
        item.onclick = () => mostrarPagina('pagina-disciplinas');
      }
    });
  }
});
