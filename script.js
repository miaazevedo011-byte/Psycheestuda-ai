// Mostrar seção Materiais
function showSection(nome) {
    document.getElementById('pagina-inicio').style.display = 'none';
    document.getElementById('pagina-materiais').style.display = 'block';
    window.scrollTo(0, 0);
}

// Voltar para Início (clicar no logo ou Início)
document.addEventListener('DOMContentLoaded', function() {
    const menuInicio = document.querySelector('.menu-item.active');
    menuInicio.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('pagina-inicio').style.display = 'block';
        document.getElementById('pagina-materiais').style.display = 'none';
    });
});

// Upload de arquivo
const uploadArea = document.getElementById('upload-area');
const arquivoInput = document.getElementById('arquivo-input');
let arquivoCarregado = null;

uploadArea.addEventListener('click', () => arquivoInput.click());

arquivoInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        arquivoCarregado = e.target.files[0];
        document.getElementById('nome-arquivo').textContent = arquivoCarregado.name;
        document.getElementById('arquivo-info').style.display = 'block';
    }
});

// Gerar resumo (simulação — depois você conecta com uma IA real)
function gerarResumo() {
    if (!arquivoCarregado) return;

    document.getElementById('resultado-resumo').style.display = 'block';
    document.getElementById('texto-resumo').innerHTML = 
`<strong>✅ Arquivo recebido:</strong> ${arquivoCarregado.name}

📌 <em>Este é um espaço para seu resumo.</em>

No momento, esta é uma versão de demonstração. Para gerar resumos reais automaticamente, você pode:

1. Copiar o texto do seu PDF/Word e colar no <strong>Gemini</strong> ou <strong>ChatGPT</strong> pedindo um resumo de estudo organizado por tópicos.

2. Ou, mais pra frente, conectamos este app diretamente com a <strong>API do Gemini</strong> — é gratuita para uso básico! 💡

💡 Dica: Sempre salve seus materiais no <strong>Google Drive</strong> e use uma IA gratuita para os resumos. Assim você não depende de créditos que acabam! 💚`;
}

// Copiar resumo
function copiarResumo() {
    const texto = document.getElementById('texto-resumo').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('✅ Resumo copiado para a área de transferência!');
    });
}
