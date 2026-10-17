// Mostrar uma página e esconder as outras
function mostrarPagina(idPagina) {
  // Esconde todas as páginas
  const paginas = document.querySelectorAll('main > div');
  paginas.forEach(p => p.style.display = 'none');
  
  // Mostra a página selecionada
  const pagina = document.getElementById(idPagina);
  if (pagina) pagina.style.display = 'block';
}

// Voltar para a página inicial
function voltarInicio() {
  mostrarPagina('pagina-inicial');
}

// Mostrar abas dentro da Biblioteca
function mostrarAba(nomeAba) {
  document.getElementById('conteudo-meus-arquivos').style.display = 'none';
  document.getElementById('conteudo-livros').style.display = 'none';
  document.getElementById('conteudo-favoritos').style.display = 'none';
  
  document.getElementById('aba-meus-arquivos').style.background = '#ccc';
  document.getElementById('aba-livros').style.background = '#ccc';
  document.getElementById('aba-favoritos').style.background = '#ccc';
  
  document.getElementById('conteudo-' + nomeAba).style.display = 'block';
  document.getElementById('aba-' + nomeAba).style.background = '#4A6FA5';
}

// Dados de exemplo para os itens
const dadosItens = {
  'enc-psicologia-geral': { titulo: 'Psicologia Geral', texto: 'É o ramo que estuda os processos psicológicos fundamentais: sensação, percepção, atenção, memória, pensamento, linguagem, inteligência, motivação e emoção. Busca compreender como o ser humano percebe o mundo e interage com ele.' },
  'enc-desenvolvimento': { titulo: 'Psicologia do Desenvolvimento', texto: 'Estuda as mudanças que ocorrem ao longo da vida, desde a concepção até a morte. Abrange desenvolvimento físico, cognitivo, emocional e social em cada fase da vida.' },
  'enc-social': { titulo: 'Psicologia Social', texto: 'Analisa como o indivíduo influencia e é influenciado pelo meio social. Estuda temas como atitudes, preconceito, comunicação, liderança e comportamento em grupos.' },
  'enc-clinica': { titulo: 'Psicologia Clínica', texto: 'Dedica-se à prevenção, avaliação, diagnóstico e tratamento de questões relacionadas à saúde mental e bem-estar emocional.' },
  'enc-aprendizagem': { titulo: 'Psicologia da Aprendizagem', texto: 'Investiga como aprendemos: os processos mentais e comportamentais que possibilitam a aquisição de novos conhecimentos, habilidades e condutas.' },
  'enc-personalidade': { titulo: 'Psicologia da Personalidade', texto: 'Estuda as características psicológicas que tornam cada pessoa única e consistente ao longo do tempo. Inclui teorias sobre traços, temperamento e formação da personalidade.' },
  
  'aut-freud': { titulo: 'Sigmund Freud – Psicanálise', texto: 'Fundador da Psicanálise. Sua teoria destaca o inconsciente como força motriz do comportamento humano. Conceitos fundamentais: id, ego e superego; mecanismos de defesa; fases do desenvolvimento psicossexual.' },
  'aut-piaget': { titulo: 'Jean Piaget – Desenvolvimento Cognitivo', texto: 'Propus a teoria dos estágios do desenvolvimento cognitivo: sensório-motor, pré-operatório, operatório concreto e operatório formal. Explica como a criança constrói conhecimento e pensamento lógico.' },
  'aut-skinner': { titulo: 'B.F. Skinner – Behaviorismo Radical', texto: 'Defendia que o comportamento é moldado por reforço e punição. Desenvolveu o conceito de condicionamento operante: comportamentos seguidos de recompensas tendem a se repetir.' },
  'aut-rogers': { titulo: 'Carl Rogers – Abordagem Humanista', texto: 'Enfatizou o potencial humano e a busca pela autorrealização. Acreditava que pessoas crescem em um ambiente de empatia, aceitação e compreensão.' },
  'aut-vygotsky': { titulo: 'Lev Vygotsky – Teoria Sociocultural', texto: 'O aprendizado é um processo social. Introduziu o conceito de Zona de Desenvolvimento Proximal — o que a criança consegue fazer com ajuda de alguém mais experiente.' },
  
  'lt-1879': { titulo: '1879 – Fundação do primeiro laboratório', texto: 'Wilhelm Wundt fundou o primeiro laboratório de Psicologia em Leipzig, na Alemanha. Marco que separou a Psicologia da Filosofia, tornando-a uma ciência independente.' },
  'lt-1900': { titulo: '1900 – Nascimento da Psicanálise', texto: 'Com a publicação de "A Interpretação dos Sonhos", Sigmund Freud inaugura a Psicanálise, trazendo a importância do inconsciente para a compreensão humana.' },
  'lt-1913': { titulo: '1913 – Surgimento do Behaviorismo', texto: 'John Watson publica "Psicologia como Comportamento", defendendo que a Psicologia deve estudar apenas o comportamento observável e mensurável.' },
  'lt-1950': { titulo: '1950 – Psicologia Humanista', texto: 'Surge como "terceira força", rejeitando a visão do comportamento como apenas reação a estímulos e a ênfase psicanalítica no inconsciente. Valoriza o livre-arbítrio e o crescimento pessoal.' },
  'lt-1960': { titulo: '1960 – Revolução Cognitiva', texto: 'Retoma o estudo dos processos mentais — pensamento, memória, percepção — que o Behaviorismo havia ignorado. A mente passa a ser vista como um processador de informações.' },
  
  'con-introducao': { titulo: 'Introdução à Psicologia', texto: 'A palavra "psicologia" vem do grego: psique = alma; logos = estudo. Originalmente significava "estudo da alma". Hoje define-se como a ciência que estuda o comportamento e os processos mentais do ser humano.' },
  'con-metodologia': { titulo: 'Metodologia Científica', texto: 'Conjunto de procedimentos sistemáticos usados para investigar fenômenos. Etapas principais: observação, formulação de hipótese, experimentação, análise de dados e conclusão.' },
  'con-bases': { titulo: 'Bases Biológicas do Comportamento', texto: 'O sistema nervoso, o cérebro e os neurotransmissores influenciam diretamente como pensamos, sentimos e agimos. A conexão mente-corpo é fundamental para compreender o comportamento.' },
  'con-aprendizagem': { titulo: 'Processos de Aprendizagem', texto: 'Aprendizagem é a mudança relativamente estável de comportamento, resultado da experiência. Principais teorias: condicionamento clássico, condicionamento operante e aprendizagem social.' },
  
  'glo-consciencia': { titulo: 'Consciência', texto: 'Estado de estar ciente de si mesmo e do ambiente ao redor. Inclui pensamentos, sentimentos, percepções e memórias que podemos trazer ao foco da atenção.' },
  'glo-percepcao': { titulo: 'Percepção', texto: 'Processo pelo qual organizamos e interpretamos as informações que recebemos pelos sentidos. Não é apenas uma cópia da realidade — é uma construção mental.' },
  'glo-memoria': { titulo: 'Memória', texto: 'Capacidade de codificar, armazenar e recuperar informações. Divide-se sensorial, de curto prazo e de longo prazo. Esquecer faz parte do processo natural.' },
  'glo-emocao': { titulo: 'Emoção', texto: 'Reação subjetiva a estímulos, envolvendo mudanças fisiológicas, sentimentos e expressão comportamental. Exemplos: alegria, medo, raiva, tristeza.' },
  'glo-motivacao': { titulo: 'Motivação', texto: 'Conjunto de motivos que impulsionam e direcionam o comportamento. Pode vir de necessidades biológicas (fome, sono) ou sociais (reconhecimento, pertencimento).' },
  'glo-inteligencia': { titulo: 'Inteligência', texto: 'Capacidade de compreender, aprender, raciocinar, resolver problemas e adaptar-se ao ambiente. Não é uma capacidade única — existem diferentes tipos de inteligência.' },
  
  'disc-psigeral': { titulo: 'Psicologia Geral', texto: 'Apresenta os conceitos fundamentais da Psicologia: história, métodos de estudo, processos psicológicos básicos e principais áreas de atuação profissional.' },
  'disc-biologica': { titulo: 'Bases Biológicas', texto: 'Estuda a relação entre o funcionamento do organismo — sistema nervoso, sistema endócrino, genética — e o comportamento humano.' },
  'disc-metodologia': { titulo: 'Metodologia Científica', texto: 'Ensina a planejar, executar e analisar pesquisas. Inclui métodos quantitativos e qualitativos, coleta de dados e redação de relatórios científicos.' },
  'disc-desenvolvimento': { titulo: 'Psicologia do Desenvolvimento', texto: 'Acompanha o desenvolvimento humano do nascimento à morte: físico, cognitivo, afetivo e social em cada etapa da vida.' },
  'disc-social': { titulo: 'Psicologia Social', texto: 'Compreende como pensamentos, sentimentos e comportamentos das pessoas são influenciados pela presença dos outros e pelo ambiente social.' },
  'disc-clinica': { titulo: 'Psicologia Clínica', texto: 'Fundamentos da prática clínica: relação terapeuta-paciente, ética, avaliação psicológica, principais transtornos e abordagens terapêuticas.' }
};

// Ver detalhes de um item
function verItem(idItem) {
  const paginas = ['enciclopedia', 'autores', 'linhatempo', 'conteudos', 'glossario', 'disciplinas'];
  
  for (let pagina of paginas) {
    const lista = document.getElementById('lista-' + pagina);
    const conteudo = document.getElementById('conteudo-' + pagina);
    const dados = dadosItens[idItem];
    
    if (lista && conteudo && dados) {
      lista.style.display = 'none';
      conteudo.style.display = 'block';
      document.getElementById('titulo-' + pagina).textContent = dados.titulo;
      document.getElementById('texto-' + pagina).textContent = dados.texto;
      return;
    }
  }
}

// Fechar detalhes e voltar à lista
function fecharLista(nomePagina) {
  document.getElementById('lista-' + nomePagina).style.display = 'block';
  document.getElementById('conteudo-' + nomePagina).style.display = 'none';
}

// Buscar na enciclopédia
function buscarEnciclopedia() {
  const termo = document.getElementById('busca-enciclopedia').value.toLowerCase();
  alert('Você buscou por: "' + termo + '" — em breve teremos busca completa!');
}

// Ler arquivo e gerar resumo
// Ler arquivo e gerar resumo — suporta .txt, .pdf e .docx
async function lerArquivo() {
  const input = document.getElementById('arquivo-input');
  const resultado = document.getElementById('resultado-resumo');
  
  if (!input.files || input.files.length === 0) {
    resultado.style.display = 'block';
    resultado.innerHTML = '⚠️ Por favor, selecione um arquivo primeiro!';
    return;
  }
  
  const arquivo = input.files[0];
  let texto = '';
  
  resultado.style.display = 'block';
  resultado.innerHTML = '⏳ Lendo arquivo, aguarde...';
  
  try {
    if (arquivo.name.endsWith('.txt')) {
      texto = await lerArquivoTexto(arquivo);
    }
    else if (arquivo.name.endsWith('.pdf')) {
      texto = await lerArquivoPDF(arquivo);
    }
    else if (arquivo.name.endsWith('.docx')) {
      texto = await lerArquivoDOCX(arquivo);
    }
    else {
      resultado.innerHTML = '❌ Formato não suportado. Use: .txt, .pdf ou .docx';
      return;
    }
    
    const resumo = gerarResumo(texto);
    
    resultado.innerHTML = `
      ✅ <strong>Resumo de: ${arquivo.name}</strong><br><br>
      📄 ${texto.length.toLocaleString('pt-BR')} caracteres lidos<br>
      ✂️ Resumo com ${resumo.length.toLocaleString('pt-BR')} caracteres<br><br>
      <hr><br>
      ${resumo}
    `;
    
  } catch (erro) {
    resultado.innerHTML = '❌ Erro ao ler o arquivo: ' + erro.message;
  }
}

// Ler arquivo .txt
function lerArquivoTexto(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = e => resolve(e.target.result);
    leitor.onerror = reject;
    leitor.readAsText(arquivo);
  });
}

// Ler arquivo .pdf
async function lerArquivoPDF(arquivo) {
  const arrayBuffer = await lerArquivoBinario(arquivo);
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
  let textoCompleto = '';
  const totalPaginas = pdf.numPages;
  
  for (let numPagina = 1; numPagina <= totalPaginas; numPagina++) {
    const pagina = await pdf.getPage(numPagina);
    const conteudo = await pagina.getTextContent();
    const textoPagina = conteudo.items.map(item => item.str).join(' ');
    textoCompleto += textoPagina + '\n';
  }
  
  return textoCompleto;
}

// Ler arquivo .docx
async function lerArquivoDOCX(arquivo) {
  const arrayBuffer = await lerArquivoBinario(arquivo);
  const resultado = await mammoth.extractRawText({ arrayBuffer });
  return resultado.value;
}
// Auxiliar: ler arquivo como binário
function lerArquivoBinario(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = e => resolve(e.target.result);
    leitor.onerror = reject;
    leitor.readAsArrayBuffer(arquivo);
  });
}

// Gerar um resumo simples
function gerarResumo(texto) {
  texto = texto.replace(/\s+/g, ' ').trim();
  
  if (texto.length <= 800) return texto;
  
  const frases = texto.split(/[.!?]/).filter(f => f.trim().length > 20);
  const resumoFrases = frases.slice(0, 8).join('. ') + '.';
  
  return resumoFrases + '<br><br>📌 <em>Resumo gerado automaticamente com base no início do conteúdo.</em>';
}
  } else {
    resultado.style.display = 'block';
    resultado.innerHTML = 'ℹ️ Por enquanto, só suportamos arquivos de texto (.txt).<br>Você pode copiar e colar o conteúdo em um bloco de notas e salvar como .txt!';
  }
}

// Mostrar nome do arquivo selecionado
document.addEventListener('DOMContentLoaded', function() {
  const inputArquivo = document.getElementById('arquivo-input');
  if (inputArquivo) {
    inputArquivo.addEventListener('change', function() {
      const nomeArquivo = document.getElementById('nome-arquivo');
      if (this.files && this.files[0]) {
        nomeArquivo.textContent = '✅ Selecionado: ' + this.files[0].name;
        nomeArquivo.style.display = 'block';
      } else {
        nomeArquivo.style.display = 'none';
      }
    });
  }
  
  // Inicializar na página inicial
  mostrarPagina('pagina-inicial');
});
