// ==============================================
// BANCO DE DADOS — TODO O CONTEÚDO
// ==============================================

const conteudos = {
  // ENCICLOPÉDIA
  'enc-psicologia-geral': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia Geral',
    texto: 'É o estudo dos processos psicológicos básicos: sensação, percepção, atenção, memória, pensamento, linguagem e emoção. Busca compreender como a mente humana funciona e como percebemos e interagimos com o mundo.'
  },
  'enc-desenvolvimento': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia do Desenvolvimento',
    texto: 'Estuda as mudanças que ocorrem no ser humano ao longo do tempo, desde a concepção até a velhice. Analisa o desenvolvimento físico, cognitivo, social e emocional em cada fase da vida.'
  },
  'enc-social': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia Social',
    texto: 'Estuda como as pessoas pensam, sentem e se comportam em relação aos outros. Analisa influências sociais, atitudes, estereótipos, comunicação, liderança e relações de grupo.'
  },
  'enc-clinica': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia Clínica',
    texto: 'Foca na avaliação, diagnóstico e tratamento de questões emocionais e comportamentais. Tem como objetivo promover a saúde mental, o bem-estar e a qualidade de vida das pessoas.'
  },
  'enc-aprendizagem': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia da Aprendizagem',
    texto: 'Estuda como as pessoas adquirem, retêm e recuperam conhecimentos. Investiga processos de condicionamento, aprendizagem social, memória e transferência de conhecimento.'
  },
  'enc-personalidade': {
    pagina: 'enciclopedia',
    titulo: 'Psicologia da Personalidade',
    texto: 'Busca compreender os padrões consistentes de pensamentos, sentimentos e comportamentos que diferenciam as pessoas. Estuda teorias como psicanálise, traços, humanismo e comportamentalismo.'
  },

  // AUTORES
  'aut-freud': {
    pagina: 'autores',
    titulo: 'Sigmund Freud — Psicanálise',
    texto: '(1856–1939) Médico austríaco, fundador da Psicanálise. Propôs que grande parte do nosso comportamento é influenciada por processos inconscientes. Criou conceitos como id, ego e superego, além das fases do desenvolvimento psicossexual.'
  },
  'aut-piaget': {
    pagina: 'autores',
    titulo: 'Jean Piaget — Desenvolvimento Cognitivo',
    texto: '(1896–1980) Biólogo e psicólogo suíço. É considerado o maior estudioso do desenvolvimento infantil. Identificou 4 fases do desenvolvimento cognitivo: sensório-motor, pré-operacional, operatório concreto e operatório formal.'
  },
  'aut-skinner': {
    pagina: 'autores',
    titulo: 'B.F. Skinner — Behaviorismo',
    texto: '(1904–1990) Psicólogo americano, principal representante do behaviorismo radical. Desenvolveu o conceito de condicionamento operante, enfatizando o papel das consequências (reforço e punição) na moldagem do comportamento.'
  },
  'aut-rogers': {
    pagina: 'autores',
    titulo: 'Carl Rogers — Psicologia Humanista',
    texto: '(1902–1987) Psicólogo americano, um dos fundadores da abordagem humanista. Defendia que cada pessoa tem um potencial inato de crescimento. Desenvolveu a Terapia Centrada na Pessoa, baseada em empatia, aceitação e autenticidade.'
  },
  'aut-vygotsky': {
    pagina: 'autores',
    titulo: 'Lev Vygotsky — Abordagem Sociocultural',
    texto: '(1896–1934) Psicólogo russo. Defendia que o aprendizado é um processo social. Criou o conceito de Zona de Desenvolvimento Proximal — aquilo que a pessoa consegue fazer com ajuda, mas ainda sozinha não consegue.'
  },

  // LINHA DO TEMPO
  'lt-1879': {
    pagina: 'linhatempo',
    titulo: '1879 — Fundação do primeiro laboratório',
    texto: 'Wilhelm Wundt fundou, na Universidade de Leipzig (Alemanha), o primeiro laboratório dedicado exclusivamente à pesquisa psicológica. Marco que separou a Psicologia da Filosofia, tornando-a uma ciência independente.'
  },
  'lt-1900': {
    pagina: 'linhatempo',
    titulo: '1900 — Nascimento da Psicanálise',
    texto: 'Sigmund Freud publicou "A Interpretação dos Sonhos", marco inicial da Psicanálise. Introduziu a ideia de que processos inconscientes influenciam nosso comportamento.'
  },
  'lt-1913': {
    pagina: 'linhatempo',
    titulo: '1913 — Surgimento do Behaviorismo',
    texto: 'John Watson publicou um manifesto defendendo que a Psicologia deveria estudar apenas o comportamento observável, e não a "mente". O behaviorismo dominou a área por quase 50 anos.'
  },
  'lt-1950': {
    pagina: 'linhatempo',
    titulo: '1950 — Psicologia Humanista',
    texto: 'Surgiu como "terceira força", rejeitando tanto a visão determinista da psicanálise quanto a limitação do behaviorismo. Valorizou a experiência subjetiva, o livre-arbítrio e o potencial humano.'
  },
  'lt-1960': {
    pagina: 'linhatempo',
    titulo: '1960 — Revolução Cognitiva',
    texto: 'Os psicólogos voltaram a estudar processos mentais: memória, pensamento, tomada de decisão. A psicologia cognitiva se consolidou, aproximando-se das ciências da computação e neurociência.'
  },

  // CONTEÚDOS
  'con-introducao': {
    pagina: 'conteudos',
    titulo: 'Introdução à Psicologia',
    texto: 'A Psicologia é a ciência que estuda o comportamento e os processos mentais do ser humano. Sua palavra vem do grego: psique = alma/mente; logos = estudo/conhecimento. Objetiva compreender, explicar e prever o comportamento humano.'
  },
  'con-metodologia': {
    pagina: 'conteudos',
    titulo: 'Metodologia Científica',
    texto: 'Conjunto de procedimentos sistemáticos usados para investigar fenômenos. Passos principais: observação, formulação de problema, hipótese, coleta de dados, análise e conclusão. Tipos de pesquisa: experimental, correlacional, descritiva e estudo de caso.'
  },
  'con-bases': {
    pagina: 'conteudos',
    titulo: 'Bases Biológicas do Comportamento',
    texto: 'O sistema nervoso e o sistema endócrino regulam nossas ações, emoções e pensamentos. O neurônio é a unidade básica do sistema nervoso. O cérebro é dividido em lóbulos com funções especializadas.'
  },
  'con-aprendizagem': {
    pagina: 'conteudos',
    titulo: 'Processos de Aprendizagem',
    texto: 'Aprendizagem é qualquer mudança relativamente permanente no comportamento resultante da experiência. Principais tipos: condicionamento clássico (Pavlov), condicionamento operante (Skinner) e aprendizagem observacional (Bandura).'
  },

  // GLOSSÁRIO
  'glo-consciencia': {
    pagina: 'glossario',
    titulo: 'Consciência',
    texto: 'Estado de estar ciente de si mesmo e do ambiente ao redor. Inclui pensamentos, sentimentos, percepções e memórias que podemos trazer voluntariamente à mente.'
  },
  'glo-percepcao': {
    pagina: 'glossario',
    titulo: 'Percepção',
    texto: 'Processo pelo qual organizamos e interpretamos as informações recebidas pelos sentidos. Não é apenas uma "foto" do mundo — é uma construção mental.'
  },
  'glo-memoria': {
    pagina: 'glossario',
    titulo: 'Memória',
    texto: 'Capacidade de armazenar e recuperar informações. Divide-se em três etapas: codificação, armazenamento e recuperação. Possui três sistemas sensoriais, de curta duração e de longa duração.'
  },
  'glo-emocao': {
    pagina: 'glossario',
    titulo: 'Emoção',
    texto: 'Reação subjetiva a eventos importantes, envolvendo mudanças fisiológicas, sentimentos e expressão. Emoções básicas: alegria, tristeza, raiva, medo, surpresa e desgosto.'
  },
  'glo-motivacao': {
    pagina: 'glossario',
    titulo: 'Motivação',
    texto: 'Conjunto de fatores que nos impulsionam a agir e a manter um comportamento. Pode vir de necessidades biológicas (fome, sono) ou sociais (reconhecimento, pertencimento).'
  },
  'glo-inteligencia': {
    pagina: 'glossario',
    titulo: 'Inteligência',
    texto: 'Capacidade de compreender, raciocinar, resolver problemas e se adaptar ao ambiente. Não é uma habilidade única — existem diferentes tipos: lógico, verbal, espacial, emocional, entre outros.'
  },

  // DISCIPLINAS
  'disc-psigeral': {
    pagina: 'disciplinas',
    titulo: 'Psicologia Geral',
    texto: 'Apresentação histórica e conceitual da Psicologia. Estudo dos processos psicológicos básicos: sensação, percepção, atenção, memória, pensamento, inteligência, linguagem, emoção e motivação.'
  },
  'disc-biologica': {
    pagina: 'disciplinas',
    titulo: 'Bases Biológicas do Comportamento',
    texto: 'Estudo da relação entre o funcionamento do organismo e o comportamento. Sistema nervoso, sistema endócrino, genética, estruturas cerebrais e como elas influenciam nossas ações.'
  },
  'disc-metodologia': {
    pagina: 'disciplinas',
    titulo: 'Metodologia Científica em Psicologia',
    texto: 'Princípios da pesquisa científica. Métodos quantitativos e qualitativos. Ética na pesquisa com seres humanos. Como planejar, executar e interpretar um estudo científico.'
  },
  'disc-desenvolvimento': {
    pagina: 'disciplinas',
    titulo: 'Psicologia do Desenvolvimento',
    texto: 'Estudo do desenvolvimento humano desde a concepção até a velhice. Mudanças físicas, cognitivas, socioemocionais e de personalidade em cada etapa da vida.'
  },
  'disc-social': {
    pagina: 'disciplinas',
    titulo: 'Psicologia Social',
    texto: 'Como o ambiente social influencia pensamentos, sentimentos e ações. Temas: percepção social, atitudes, comunicação, influência de grupo, relações interpessoais e preconceito.'
  },
  'disc-clinica': {
    pagina: 'disciplinas',
    titulo: 'Psicologia Clínica',
    texto: 'História, campos de atuação e princípios da avaliação e intervenção clínica. Principais abordagens teóricas: psicanálise, behaviorismo, humanismo, cognitivo-comportamental, entre outras.'
  }
};

// ==============================================
// FUNÇÕES GERAIS — FUNCIONAM EM TODAS AS PÁGINAS
// ==============================================

function verItem(id) {
  const item = conteudos[id];
  if (!item) return;

  // Esconde a lista
  document.getElementById(`lista-${item.pagina}`).style.display = 'none';
  // Mostra o conteúdo
  document.getElementById(`conteudo-${item.pagina}`).style.display = 'block';
  // Preenche os textos
  document.getElementById(`titulo-${item.pagina}`).textContent = item.titulo;
  document.getElementById(`texto-${item.pagina}`).textContent = item.texto;
}

function fecharLista(pagina) {
  // Esconde o conteúdo
  document.getElementById(`conteudo-${pagina}`).style.display = 'none';
  // Mostra a lista novamente
  document.getElementById(`lista-${pagina}`).style.display = 'block';
}

function buscarEnciclopedia() {
  const termo = document.getElementById('busca-enciclopedia').value.toLowerCase();
  alert(`Buscando por: "${termo}"... ✨ Em breve resultados completos!`);
}

function mostrarAba(nomeAba) {
  // Esconde todos os conteúdos
  document.getElementById('conteudo-meus-arquivos').style.display = 'none';
  document.getElementById('conteudo-livros').style.display = 'none';
  document.getElementById('conteudo-favoritos').style.display = 'none';
  
  // Reseta cores dos botões
  document.getElementById('aba-meus-arquivos').style.background = '#ccc';
  document.getElementById('aba-livros').style.background = '#ccc';
  document.getElementById('aba-favoritos').style.background = '#ccc';
  
  // Mostra o conteúdo selecionado
  document.getElementById(`conteudo-${nomeAba}`).style.display = 'block';
  document.getElementById(`aba-${nomeAba}`).style.background = '#4A6FA5';
}
