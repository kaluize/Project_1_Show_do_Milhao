// CLASSE

class Jogo {
  constructor() {
    this.rodada = 1;
    this.premio = [
      "R$ 0,00",
      "R$ 50.000,00",
      "R$ 100.000,00",
      "R$ 250.000,00",
      "R$ 500.000,00",
      "R$ 1.000.000,00",
    ];
    this.perguntaAtual = {};
    this.perguntasNivel1 = [
      {
        pergunta:
          "Que animal da fauna brasileira está retratado na nota de 10 reais?",
        alternativas: ["1) Jabuti", "3) Onça", "2) Arara", "4) Tucano"],
        resposta: "2) Arara",
      },
      {
        pergunta: "Quingentésimo corresponde a qual número?",
        alternativas: ["1) 500", "3) 5.000", "2) 50", "4) 5"],
        resposta: "1) 500",
      },
      {
        pergunta: "Que profissional usa uma ferramenta chamada formão?",
        alternativas: [
          "1) Carpinteiro",
          "3) Relojoeiro",
          "2) Confeiteiro",
          "4) Bombeiro",
        ],
        resposta: "1) Carpinteiro",
      },
      {
        pergunta: "Quando começou e terminou a Primeira Guerra Mundial? ",
        alternativas: [
          "1) 1914 - 1918",
          "3) 1902 - 1908 ",
          "2) 1920 - 1930",
          "4) 1912 - 1915",
        ],
        resposta: "1) 1914 - 1918",
      },
      {
        pergunta: "Qual bicho transmite a doença de Chagas?",
        alternativas: ["1) Abelha", "3) Barata", "2) Pulga", "4) Barbeiro"],
        resposta: "4) Barbeiro",
      },
      {
        pergunta: "A jogada chamada 'strike' é feita em qual jogo?",
        alternativas: [
          "1) Tênis de mesa",
          "3) Beisebol",
          "2) Xadrez",
          "4) Boliche",
        ],
        resposta: "4) Boliche",
      },
    ];
    this.perguntasNivel2 = [
      {
        pergunta: "O samba é uma dança originária de qual continente?",
        alternativas: [
          "1) Europa",
          "3) Ásia",
          "2) África",
          "4) América do Sul",
        ],
        resposta: "2) África",
      },
      {
        pergunta: "Qual é o triângulo que tem todos os lados diferentes?",
        alternativas: [
          "1) Equilátero",
          "3) Isósceles",
          "2) Escaleno",
          "4) Trapézio",
        ],
        resposta: "2) Escaleno",
      },
      {
        pergunta: "Qual é o coletivo de cães?",
        alternativas: ["1) Matilha", "3) Rebanho", "2) Alcatéia", "4) Manada"],
        resposta: "1) Matilha",
      },
      {
        pergunta: "Como se chama o estudo entre palavras e significados?",
        alternativas: [
          "1) Fonética",
          "3) Semântica",
          "2) Filosofia",
          "4) Psiquiatria",
        ],
        resposta: "3) Semântica",
      },
      {
        pergunta:
          "Como se chama o território compreendido entre o istmo do Panamá e Terra do Fogo?",
        alternativas: [
          "1) América do Norte",
          "3) América Central",
          "2) América do Sul",
          "4) América Latina",
        ],
        resposta: "2) América do Sul",
      },
      {
        pergunta:
          "Qual flor é o símbolo nacional do Egito e foi considerada sagrada na antiguidade?",
        alternativas: ["1) Rosa", "3) Lírio", "2) Jasmim", "4) Lótus"],
        resposta: "4) Lótus",
      },
    ];
    this.perguntasNivel3 = [
      {
        pergunta: "Qual o antônimo de malograr?",
        alternativas: [
          "1) Perder",
          "3) Fracassar",
          "2) Conseguir",
          "4) Desprezar",
        ],
        resposta: "2) Conseguir",
      },
      {
        pergunta: "O adjetivo venoso está relacionado a:",
        alternativas: ["1) Vela", "3) Vento", "2) Vênia", "4) Veia"],
        resposta: "4) Veia",
      },
      {
        pergunta: "Montezuma era o líder de qual povo?",
        alternativas: ["1) Maia", "3) Asteca", "2) Inca", "4) Guarani"],
        resposta: "3) Asteca",
      },
      {
        pergunta:
          "Quem dirigiu o filme Central do Brasil, indicado ao Oscar de Melhor Filme Estrangeiro em 1999?",
        alternativas: [
          "1) Bruno Barreto",
          "3) Hector Babenco",
          "2) Arnaldo Jabor",
          "4) Walter Salles Jr.",
        ],
        resposta: "4) Walter Salles Jr.",
      },
      {
        pergunta: "Quem atravessou a cidade nua montada em um cavalo branco?",
        alternativas: [
          "1) Lady MacBeth",
          "3) Lady Diana",
          "2) Lady Godiva",
          "4) Lady Hawk",
        ],
        resposta: "2) Lady Godiva",
      },
      {
        pergunta: "Em que parte do corpo se encontra a epiglote?",
        alternativas: ["1) Estômago", "3) Pâncreas", "2) Rim", "4) Boca"],
        resposta: "4) Boca",
      },
    ];
    this.perguntasNivel4 = [
      {
        pergunta: "Em que país nasceu Carmem Miranda?",
        alternativas: [
          "1) Brasil",
          "3) Espanha",
          "2) Portugal",
          "4) Argentina",
        ],
        resposta: "2) Portugal",
      },
      {
        pergunta: "A compensação por perda é chamada de:",
        alternativas: [
          "1) Déficit",
          "3) Indenização",
          "2) Indexação",
          "4) Indébito",
        ],
        resposta: "3) Indenização",
      },
      {
        pergunta:
          "Qual montanha se localiza na fronteira do Tibet com o Nepal?",
        alternativas: [
          "1) Monte Everest",
          "3) Monte Carlo",
          "2) Monte Fuji",
          "4) Monte Branco",
        ],
        resposta: "1) Monte Everest",
      },
      {
        pergunta: "Quem compôs a melodia do Hino da Independência?",
        alternativas: [
          "1) Dom Pedro I",
          "3) Manuel Bandeira",
          "2) Castro Alves",
          "4) Carlos Gomes",
        ],
        resposta: "1) Dom Pedro I",
      },
      {
        pergunta:
          "Seguindo a sequência do baralho, qual carta vem depois do dez?",
        alternativas: ["1) Rei", "3) Valete", "2) Nove", "4) Ás"],
        resposta: "3) Valete",
      },
    ];
    this.perguntasNivel5 = [
      {
        pergunta: "Qual era a nacionalidade do escritor Oscar Wilde?",
        alternativas: ["1) Irlandês", "3) Alemão", "2) Inglês", "4) Americano"],
        resposta: "1) Irlandês",
      },
      {
        pergunta: "Qual é o primeiro nome do pintor Cezanne?",
        alternativas: ["1) Jean", "3) Paul", "2) Georges", "4) Jacques"],
        resposta: "3) Paul",
      },
      {
        pergunta: "Que nome se dá à purificação por meio da água?",
        alternativas: [
          "1) Abolição",
          "3) Abnegação",
          "2) Ablução",
          "4) Abrupção",
        ],
        resposta: "2) Ablução",
      },
      {
        pergunta:
          "Qual foi o último presidente no período da ditadura militar no Brasil?",
        alternativas: [
          "1) Costa e Silva",
          "3) João Figueiredo",
          "2) Ernesto Geisel",
          "4) Emílio Médici",
        ],
        resposta: "3) João Figueiredo",
      },
    ];
  }

  showQuestion() {
    const perguntaSorteada = document.getElementById("botaoPerguntaSorteada");
    const alternativa1 = document.getElementById("botaoAlternativa1");
    const alternativa2 = document.getElementById("botaoAlternativa2");
    const alternativa3 = document.getElementById("botaoAlternativa3");
    const alternativa4 = document.getElementById("botaoAlternativa4");
    const botaoErrar = document.getElementById("botaoErrar");
    const botaoParar = document.getElementById("botaoParar");
    const botaoAcertar = document.getElementById("botaoAcertar");
    const desfechosPossiveis = document.querySelector(".desfechosPossiveis");
    const mensagemStatus = document.getElementById("mensagemStatus");
    alternativa1.className = "botaoResposta";
    alternativa2.className = "botaoResposta";
    alternativa3.className = "botaoResposta";
    alternativa4.className = "botaoResposta";

    valorPremio.innerHTML = this.premio[this.rodada];
    valorAtual.innerHTML = this.premio[this.rodada - 1];

    const vozSilvio = new Audio("../audios/abertura.mp3");
    vozSilvio.volume = 0.05;
    vozSilvio.loop = true;
    vozSilvio.play();

    let sorteioIndicePergunta;

    if (this.rodada === 1) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perguntasNivel1.length
      );
      perguntaSorteada.textContent =
        this.perguntasNivel1[sorteioIndicePergunta].pergunta;
      alternativa1.textContent =
        this.perguntasNivel1[sorteioIndicePergunta].alternativas[0];
      alternativa2.textContent =
        this.perguntasNivel1[sorteioIndicePergunta].alternativas[1];
      alternativa3.textContent =
        this.perguntasNivel1[sorteioIndicePergunta].alternativas[2];
      alternativa4.textContent =
        this.perguntasNivel1[sorteioIndicePergunta].alternativas[3];
      botaoErrar.textContent = "Se ERRAR você não ganha nada";
      botaoParar.textContent = "Se PARAR agora você não ganha nada";
      botaoAcertar.textContent = "Se ACERTAR você ganha R$ 50.000,00";
      respostaCerta = this.perguntasNivel1[sorteioIndicePergunta].resposta;
      return this.perguntasNivel1[sorteioIndicePergunta];
    }

    if (this.rodada === 2) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perguntasNivel2.length
      );
      perguntaSorteada.textContent =
        this.perguntasNivel2[sorteioIndicePergunta].pergunta;
      alternativa1.textContent =
        this.perguntasNivel2[sorteioIndicePergunta].alternativas[0];
      alternativa2.textContent =
        this.perguntasNivel2[sorteioIndicePergunta].alternativas[1];
      alternativa3.textContent =
        this.perguntasNivel2[sorteioIndicePergunta].alternativas[2];
      alternativa4.textContent =
        this.perguntasNivel2[sorteioIndicePergunta].alternativas[3];
      botaoErrar.textContent = "Se ERRAR você ganha R$ 25.000,00";
      botaoParar.textContent = "Se PARAR agora você ganha R$ 50.000,00";
      botaoAcertar.textContent = "Se ACERTAR você ganha R$ 100.000,00";
      respostaCerta = this.perguntasNivel2[sorteioIndicePergunta].resposta;
      return this.perguntasNivel2[sorteioIndicePergunta];
    }

    if (this.rodada === 3) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perguntasNivel3.length
      );
      perguntaSorteada.textContent =
        this.perguntasNivel3[sorteioIndicePergunta].pergunta;
      alternativa1.textContent =
        this.perguntasNivel3[sorteioIndicePergunta].alternativas[0];
      alternativa2.textContent =
        this.perguntasNivel3[sorteioIndicePergunta].alternativas[1];
      alternativa3.textContent =
        this.perguntasNivel3[sorteioIndicePergunta].alternativas[2];
      alternativa4.textContent =
        this.perguntasNivel3[sorteioIndicePergunta].alternativas[3];
      botaoErrar.textContent = "Se ERRAR você ganha R$ 50.000,00";
      botaoParar.textContent = "Se PARAR agora você ganha R$ 100.000,00";
      botaoAcertar.textContent = "Se ACERTAR você ganha R$ 250.000,00";
      respostaCerta = this.perguntasNivel3[sorteioIndicePergunta].resposta;
      return this.perguntasNivel3[sorteioIndicePergunta];
    }

    if (this.rodada === 4) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perguntasNivel4.length
      );
      perguntaSorteada.textContent =
        this.perguntasNivel4[sorteioIndicePergunta].pergunta;
      alternativa1.textContent =
        this.perguntasNivel4[sorteioIndicePergunta].alternativas[0];
      alternativa2.textContent =
        this.perguntasNivel4[sorteioIndicePergunta].alternativas[1];
      alternativa3.textContent =
        this.perguntasNivel4[sorteioIndicePergunta].alternativas[2];
      alternativa4.textContent =
        this.perguntasNivel4[sorteioIndicePergunta].alternativas[3];
      botaoErrar.textContent = "Se ERRAR você ganha R$ 125.000,00";
      botaoParar.textContent = "Se PARAR agora você ganha R$ 250.000,00";
      botaoAcertar.textContent = "Se ACERTAR você ganha R$ 500.000,00";
      respostaCerta = this.perguntasNivel4[sorteioIndicePergunta].resposta;
      return this.perguntasNivel4[sorteioIndicePergunta];
    }

    if (this.rodada === 5) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perguntasNivel5.length
      );
      perguntaSorteada.textContent =
        this.perguntasNivel5[sorteioIndicePergunta].pergunta;
      alternativa1.textContent =
        this.perguntasNivel5[sorteioIndicePergunta].alternativas[0];
      alternativa2.textContent =
        this.perguntasNivel5[sorteioIndicePergunta].alternativas[1];
      alternativa3.textContent =
        this.perguntasNivel5[sorteioIndicePergunta].alternativas[2];
      alternativa4.textContent =
        this.perguntasNivel5[sorteioIndicePergunta].alternativas[3];
      botaoErrar.textContent = "Se ERRAR você ganha R$ 125.000,00";
      botaoParar.textContent = "Se PARAR agora você ganha R$ 500.000,00";
      botaoAcertar.textContent = "Se ACERTAR você ganha R$ 1.000.000,00";
      respostaCerta = this.perguntasNivel5[sorteioIndicePergunta].resposta;
      return this.perguntasNivel5[sorteioIndicePergunta];
    }
    
  }

  validarResposta(respostaClicada, jogo) {
    const botaoContinuar = document.querySelector("#botaoContinuar");
    const botaoJogarNovamente = document.querySelector("#botaoJogarNovamente");
    const cadaBotao = document.querySelectorAll(".botaoResposta");
    const botaoParar = document.getElementById("botaoParar");
    const botaoAcertar = document.getElementById("botaoAcertar");
    const desfechosPossiveis = document.querySelector(".desfechosPossiveis");
    const status = document.querySelector(".status");
    const mensagemStatus = document.querySelector("#mensagemStatus");
    const telaDeJogo = document.getElementById("telaDeJogo");

    if (respostaClicada.textContent === respostaCerta) {
      respostaClicada.classList.add("verde");
      desfechosPossiveis.classList.add("hide");
      status.classList.remove("hide");
      mensagemStatus.classList.remove("hide");
      if (this.rodada !== 5) {
        botaoContinuar.classList.remove("hide");
        mensagemStatus.innerHTML =
          "Parabéns! Você acertou! Vá para a próxima pergunta.";
      } else {
        botaoJogarNovamente.classList.remove("hide");
        mensagemStatus.innerHTML = "Parabéns! Você ganhou um milhão!!!";
        const vozSilvio = new Audio("../audios/milhao.mp3");
        vozSilvio.play();
      }
      const vozSilvio = new Audio("../audios/certaResposta.mp3");
      vozSilvio.play();
    } else {
      respostaClicada.classList.add("vermelho");
      status.classList.remove("hide");
      desfechosPossiveis.classList.add("hide");
      mensagemStatus.classList.remove("hide");
      mensagemStatus.innerHTML = "Ah que pena! Você perdeu!";
      botaoJogarNovamente.classList.remove("hide");
      const vozSilvio = new Audio("../audios/voceErrou.mp3");
      vozSilvio.play();
    }
    [].forEach.call(cadaBotao, function(button) {
      //button.disabled = true;
      if (button.textContent === respostaCerta) {
      button.classList.add("verde");
      }
    });

  }
}
