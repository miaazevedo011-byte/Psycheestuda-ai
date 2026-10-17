// ==============================================
// PSICOESTUDA-AI — script.js COMPLETO
// ==============================================

// Armazena o texto extraído
let textoExtraido = '';

// Chave da API do Gemini
const GEMINI_API_KEY = 'AQ.Ab8RN6LiP8Ys2oG2ZoVI6PAshQni63mtsg7BTE9MuEN5s24u1A';

// ==============================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ==============================================

function mostrarPagina(paginaId) {
  document.querySelectorAll('main > div').forEach(p => p.style.display = 'none');
  const alvo = document.getElementById(paginaId);
  if (alvo) alvo.style.display = 'block';
}

function voltarInicio() {
  document.querySelectorAll('main > div').forEach(p => p.style.display = 'none');
  document.getElementById('pagina-inicio').style.display = 'block';
}

function mostrarMeuEspaco() {
  document.querySelectorAll('main > div').forEach(p => p.style.display = 'none');
  document.getElementById('pagina-meuespaco').style.display = 'block';
}

function showSection(section) {
  document.querySelectorAll('main > div').forEach(p => p.style.display = 'none');
  if (section === 'materiais') {
    document.getElementById('pagina-materiais').style.display = 'block';
  }
}

// ==============================================
// LEITURA DE ARQUIVOS E GERAÇÃO DE RESUMOS
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
  const inputArquivo = document.getElementById('arquivo-input');
  
  if (inputArquivo) {
    inputArquivo.addEventListener('change', function(e) {
      const arquivo = e.target.files[0];
      if (!arquivo) return;

      document.getElementById('nome-arquivo').textContent = arquivo.name;
      document.getElementById('arquivo-info').style.display = 'block';
      document.getElementById('resultado-resumo').style.display = 'none';
      
      lerArquivo(arquivo);
    });
  }
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
      const pdf = await pdfjsLib.getDocument({ data: e.target.result }).promise;
      let texto = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const pagina = await pdf.getPage(i);
        const conteudo = await pagina.getTextContent();
        texto += conteudo.items.map(item => item.str).join(' ') + ' ';
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
      const resultado = await mammoth.extractRawText({ arrayBuffer: e.target.result });
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

function copiarResumo() {
  if (!textoExtraido) {
    alert('Gere um resumo primeiro!');
    return;
  }
  navigator.clipboard.writeText(textoExtraido)
    .then(() => alert('Texto copiado! ✅'))
    .catch(() => alert('Não foi possível copiar'));
}

function gerarResumo() {
  if (!textoExtraido) {
    alert('Selecione um arquivo primeiro!');
    return;
  }

  const resumo = criarResumoBasico(textoExtraido);
  
  document.getElementById('texto-resumo').innerHTML = 
    '<strong>📝 Resumo:</strong><br>' + resumo;
  document.getElementById('resultado-resumo').style.display = 'block';
  document.getElementById('botoes-acao').style.display = 'flex';
}

function criarResumoBasico(texto) {
  const frases = texto.split(/[.!?]/).filter(f => f.trim().length > 20);
  return frases.slice(0, 5).join('. ');
}
