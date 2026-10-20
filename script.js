// ========== NAVEGAÇÃO ENTRE PÁGINAS ==========
function mostrarPagina(idPagina) {
    // Esconde TODAS as páginas
    const paginas = document.querySelectorAll('div[id^="pagina-"]');
    paginas.forEach(p => p.style.display = 'none');
    
    // Mostra a página escolhida
    const pagina = document.getElementById(idPagina);
    if (pagina) {
        pagina.style.display = 'block';
        console.log('✅ Página aberta:', idPagina);
    } else {
        console.log('❌ Página NÃO encontrada:', idPagina);
    }
}

function voltarInicio() {
    mostrarPagina('pagina-inicial');
}

// ========== CONTEÚDO DAS PÁGINAS ==========
const conteudos = {
    // Enciclopédia
    'enc-psicologia-geral': {
        titulo: 'Psicologia Geral',
        texto: 'Estuda os processos fundamentais do comportamento humano e dos processos mentais: sensação, percepção, atenção, memória, pensamento, linguagem, inteligência, motivação e emoção. É a base introdutória do curso, apresentando conceitos que serão aprofundados nas demais disciplinas.'
    },
    'enc-desenvolvimento': {
        titulo: 'Psicologia do Desenvolvimento',
        texto: 'Analisa as mudanças físicas, cognitivas, emocionais e sociais ao longo da vida — da infância à velhice. Estágios de desenvolvimento, fatores de risco e proteção, teorias de Piaget, Vygotsky e Erikson são centrais nesta área.'
    },
    'enc-social': {
        titulo: 'Psicologia Social',
        texto: 'Estuda como o indivíduo influencia e é influenciado pelo meio social. Temas como percepção social, atitudes, comunicação, liderança, preconceito, identidade grupal e comportamento coletivo são objetos de estudo.'
    },
    'enc-clinica': {
        titulo: 'Psicologia Clínica',
        texto: 'Dedica-se à compreensão, avaliação e intervenção nos processos de saúde e sofrimento psíquico. Abrange modelos de atendimento, relação terapêutica, diagnóstico, prevenção e promoção de saúde mental em diferentes contextos.'
    },
    'enc-aprendizagem': {
        titulo: 'Psicologia da Aprendizagem',
        texto: 'Investiga como o ser humano adquire, armazena e recupera conhecimentos. Teorias behavioristas, cognitivistas e construtivistas explicam os processos de mudança de comportamento e formação de conhecimento.'
    },
    'enc-personalidade': {
        titulo: 'Psicologia da Personalidade',
        texto: 'Compreende as características psicológicas que distinguem e dão unidade ao indivíduo ao longo do tempo. Teorias psicanalíticas, humanistas, comportamentais e cognitivas oferecem diferentes modelos para explicar a natureza humana.'
    },

    // Autores
    'aut-freud': {
        titulo: 'Sigmund Freud – Psicanálise',
        texto: 'Considerado o pai da psicanálise. Propôs a existência do inconsciente, a estrutura da personalidade (Id, Ego e Superego), a importância da sexualidade infantil e mecanismos de defesa. Suas obras revolucionaram a compreensão da mente humana.'
    },
    'aut-piaget': {
        titulo: 'Jean Piaget – Desenvolvimento Cognitivo',
        texto: 'Estudou como a criança constrói conhecimento. Identificou fases do desenvolvimento: sensório-motora, pré-operacional, operações concretas e operações formais. Defendia que a inteligência se desenvolve pela interação entre o indivíduo e o ambiente.'
    },
    'aut-skinner': {
        titulo: 'B.F. Skinner – Behaviorismo',
        texto: 'Defendeu que o comportamento é moldado por consequências — reforço e punição. Desenvolveu o conceito de condicionamento operante e aplicou seus princípios à educação, terapia e organização social.'
    },
    'aut-rogers': {
        titulo: 'Carl Rogers – Humanismo',
        texto: 'Fundador da abordagem centrada na pessoa. Defendeu a tendência natural do ser humano de crescer e realizar-se. Condições essenciais: empatia, aceitação incondicional e congruência do terapeuta.'
    },
    'aut-vygotsky': {
        titulo: 'Lev Vygotsky – Teoria Sociocultural',
        texto: 'Destacou o papel fundamental da interação social no desenvolvimento cognitivo. Conceitos-chave: zona de desenvolvimento proximal, mediação, linguagem como ferramenta de pensamento e aprendizagem social.'
    },

    // Linha do Tempo
    'lt-1879': {
        titulo: '1879 – Fundação do primeiro laboratório',
        texto: 'Wilhelm Wundt fundou, na Alemanha, o primeiro laboratório dedicado ao estudo científico da mente. Marco que marca o nascimento da Psicologia como ciência independente da Filosofia.'
    },
    'lt-1900': {
        titulo: '1900 – Nascimento da Psicanálise',
        texto: 'Sigmund Freud publicou "A Interpretação dos Sonhos". Surgiu uma nova forma de compreender a mente, destacando o inconsciente, a história pessoal e a dimensão simbólica.'
    },
    'lt-1913': {
        titulo: '1913 – Surgimento do Behaviorismo',
        texto: 'John Watson defendeu que a Psicologia deveria estudar apenas o comportamento observável. O foco passou a ser estímulo e resposta, objetividade e mensuração.'
    },
    'lt-1950': {
        titulo: '1950 – Psicologia Humanista',
        texto: 'Surgiu como "terceira força", em oposição ao psicanalítico e ao behaviorismo. Valorizou a consciência, a liberdade, a dignidade e o potencial de crescimento humano.'
    },
    'lt-1960': {
        titulo: '1960 – Revolução Cognitiva',
        texto: 'Retorno do estudo dos processos mentais: memória, atenção, pensamento, linguagem. A mente passou a ser compreendida como processadora de informação, integrando psicologia, ciência da computação e neurociência.'
    },

    // Conteúdos
    'con-introducao': {
        titulo: 'Introdução à Psicologia',
        texto: 'A Psicologia é a ciência que estuda o comportamento e os processos mentais. Ao longo da história, construiu diferentes abordagens — não há uma única "psicologia", mas várias formas de compreender o ser humano: biológica, comportamental, cognitiva, psicanalítica, humanista, sociocultural e sistêmica.'
    },
    'con-metodologia': {
        titulo: 'Metodologia Científica',
        texto: 'Conjunto de procedimentos sistemáticos para investigar fenômenos. Etapas: observação, formulação de problema, hipótese, coleta de dados, análise e conclusão. Pesquisa qualitativa e quantitativa, ética em pesquisa com seres humanos e normas do Conselho de Ética.'
    },
    'con-bases': {
        titulo: 'Bases Biológicas do Comportamento',
        texto: 'Sistema nervoso central e periférico, neurônios, transmissão sináptica, neurotransmissores, sistema endócrino, genética e comportamento. A interação entre biologia e ambiente molda a experiência humana.'
    },
    'con-aprendizagem': {
        titulo: 'Processos de Aprendizagem',
        texto: 'Aprendizagem como mudança relativamente permanente no comportamento. Condicionamento clássico (Pavlov), operante (Skinner) e aprendizagem social (Bandura). Fatores cognitivos, motivacionais e sociais que interferem no aprender.'
    },

    // Glossário
    'glo-consciencia': {
        titulo: 'Consciência',
        texto: 'Estado de conhecimento que o indivíduo tem de si mesmo e do mundo. Engloba percepções, pensamentos, sentimentos e memórias. Pode alterar-se por sono, meditação, drogas ou processos psicopatológicos.'
    },
    'glo-percepcao': {
        titulo: 'Percepção',
        texto: 'Processo pelo qual o cérebro organiza e interpreta informações recebidas pelos sentidos. Não é uma cópia fiel da realidade: é influenciada por expectativas, experiências e contexto.'
    },
    'glo-memoria': {
        titulo: 'Memória',
        texto: 'Capacidade de codificar, armazenar e recuperar informações. Fases: aquisição, consolidação e evocação. Tipos: sensorial, curto prazo e longo prazo. Esquecimento pode ocorrer por interferência, falha na consolidação ou recuperação.'
    },
    'glo-emocao': {
        titulo: 'Emoção',
        texto: 'Reação multifacetada a eventos importantes, envolvendo mudanças fisiológicas, avaliação cognitiva e expressão. Função: preparar para ação, comunicar intenções e guiar decisões.'
    },
    'glo-motivacao': {
        titulo: 'Motivação',
        texto: 'Conjunto de fatores que direcionam e sustentam o comportamento. Hierarquia de necessidades, metas, valores e expectativas. Diferenciação entre motivação intrínseca e extrínseca.'
    },
    'glo-inteligencia': {
        titulo: 'Inteligência',
        texto: 'Capacidade de raciocinar, aprender, resolver problemas e adaptar-se ao ambiente. Não é uma capacidade única: há múltiplas formas de inteligência — lógico-matemática, linguística, espacial, emocional, prática, entre outras.'
    },

    // Disciplinas
    'disc-psigeral': {
        titulo: 'Psicologia Geral',
        texto: 'Fundamentos introdutórios da disciplina. Processos psicológicos básicos, história da Psicologia, principais escolas e perspectivas. Base conceitual para todo o curso.'
    },
    'disc-biologica': {
        titulo: 'Bases Biológicas',
        texto: 'Anatomia e fisiologia do sistema nervoso, funções cerebrais, regulação hormonal, genética do comportamento. Relação entre funcionamento biológico e experiência subjetiva.'
    },
    'disc-metodologia': {
        titulo: 'Metodologia Científica',
        texto: 'Construção do conhecimento científico. Delineamento de pesquisa, instrumentos de coleta, análise de dados, ética na pesquisa com seres humanos e elaboração de relatórios.'
    },
    'disc-desenvolvimento': {
        titulo: 'Psicologia do Desenvolvimento',
        texto: 'Desenvolvimento físico, cognitivo, afetivo e social da infância à velhice. Fatores de risco e proteção, desenvolvimento saudável e possíveis dificuldades em cada etapa.'
    },
    'disc-social': {
        titulo: 'Psicologia Social',
        texto: 'Relações indivíduo-sociedade: percepção, atitudes, comunicação, influência grupal, identidade, cultura e processos comunitários. Aplicações em instituições, trabalho e movimentos sociais.'
    },
    'disc-clinica': {
        titulo: 'Psicologia Clínica',
        texto: 'Conceitos fundamentais de saúde e doença, avaliação psicológica, modelos de intervenção, ética profissional, escuta, vínculo e promoção de saúde mental.'
    }
};

// ========== FUNÇÕES DE NAVEGAÇÃO DE CONTEÚDO ==========
function verItem(chave) {
    const dado = conteudos[chave];
    if (!dado) return;

    // Descobre em qual página está o item
    const paginaAtual = event.target.closest('div[id^="pagina-"]').id;
    const prefixo = paginaAtual.replace('pagina-', '');

    document.getElementById(`lista-${prefixo}`).style.display = 'none';
    document.getElementById(`conteudo-${prefixo}`).style.display = 'block';
    document.getElementById(`titulo-${prefixo}`).textContent = dado.titulo;
    document.getElementById(`texto-${prefixo}`).textContent = dado.texto;
}

function fecharLista(nome) {
    document.getElementById(`lista-${nome}`).style.display = 'block';
    document.getElementById(`conteudo-${nome}`).style.display = 'none';
}

// ========== ABAs da Biblioteca ==========
function mostrarAba(nomeAba) {
    const abas = ['meus-arquivos', 'livros', 'favoritos'];
    abas.forEach(nome => {
        const botao = document.getElementById(`aba-${nome}`);
        const conteudo = document.getElementById(`conteudo-${nome}`);
        if (nome === nomeAba) {
            botao.style.background = '#4A6FA5';
            botao.style.color = 'white';
            conteudo.style.display = 'block';
        } else {
            botao.style.background = '#ccc';
            botao.style.color = 'black';
            conteudo.style.display = 'none';
        }
    });
}

// ========== LEITURA DE ARQUIVOS ==========
async function lerArquivo() {
    const input = document.getElementById('arquivo-input');
    const nomeEl = document.getElementById('nome-arquivo');
    const resumoEl = document.getElementById('resultado-resumo');

    if (!input.files || input.files.length === 0) {
        alert('⚠️ Escolha um arquivo primeiro!');
        return;
    }

    const arquivo = input.files[0];
    nomeEl.textContent = '✅ ' + arquivo.name;
    nomeEl.style.display = 'block';
    resumoEl.style.display = 'block';
    resumoEl.innerHTML = '<p>⏳ Lendo arquivo...</p>';

    try {
        let texto = '';

        if (arquivo.name.endsWith('.txt')) {
            texto = await lerArquivoTexto(arquivo);
        } else if (arquivo.name.endsWith('.docx')) {
            texto = await mammoth.extractRawText({ arrayBuffer: await arquivo.arrayBuffer() });
            texto = texto.value;
        } else if (arquivo.name.endsWith('.pdf')) {
            texto = await lerArquivoPDF(arquivo);
        } else {
            throw new Error('Formato não suportado. Use .txt, .docx ou .pdf');
        }

        const preview = texto.length > 1500 
            ? texto.substring(0, 1500) + '...\n\n[Texto truncado — completo tem ' + texto.length + ' caracteres]'
            : texto;

        resumoEl.innerHTML = `
            <strong>📄 Conteúdo extraído:</strong><br><br>
            <textarea readonly style="width: 100%; height: 200px; border: 1px solid #ddd; border-radius: 6px; padding: 10px; font-family: inherit; font-size: 14px;">${preview}</textarea>
            <br><br>
            <em>✅ Arquivo carregado com sucesso! ${texto.length} caracteres lidos.</em>
        `;

    } catch (erro) {
        resumoEl.innerHTML = `<p style="color: red;">❌ Erro ao ler arquivo: ${erro.message}</p>`;
    }
}

function lerArquivoTexto(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = e => resolve(e.target.result);
        leitor.onerror = reject;
        leitor.readAsText(arquivo);
    });
}

async function lerArquivoPDF(arquivo) {
    const arrayBuffer = await arquivo.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let textoCompleto = '';
    for (let i = 1; i <= pdf.numPages; i++) {
        const pagina = await pdf.getPage(i);
        const conteudo = await pagina.getTextContent();
        const textoPagina = conteudo.items.map(item => item.str).join(' ');
        textoCompleto += `--- Página ${i} ---\n${textoPagina}\n\n`;
    }
    return textoCompleto;
}

// ========== BUSCA NA ENCICLOPÉDIA ==========
function buscarEnciclopedia() {
    const termo = document.getElementById('busca-enciclopedia').value.toLowerCase().trim();
    if (!termo) {
        alert('Digite um termo para buscar!');
        return;
    }

    const lista = document.getElementById('lista-enciclopedia');
    const itens = lista.querySelectorAll('li');
    let encontrou = false;

    itens.forEach(item => {
        const textoItem = item.textContent.toLowerCase();
        if (textoItem.includes(termo)) {
            item.style.display = 'block';
            encontrou = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!encontrou) {
        alert(`Nenhum resultado encontrado para "${termo}".`);
        itens.forEach(item => item.style.display = 'block');
    }
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ PsycheEstuda carregado com sucesso!');
    mostrarPagina('pagina-inicial');
});
