// CLASSE

class Game {
  constructor() {
    this.round = 1;
    this.premio = [
      0,
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
        alternativas: ["1) Jabuti", "2) Onça", "3) Arara", "4) Tucano"],
        resposta: "3) Arara",
      },
      {
        pergunta: "Quingentésimo corresponde a qual número?",
        alternativas: ["1) 500", "2) 5.000", "3) 50", "4) 5"],
        resposta: "1) 500",
      },
      {
        pergunta: "Que profissional usa uma ferramenta chamada formão?",
        alternativas: [
          "1) Carpinteiro",
          "2) Relojoeiro",
          "3) Confeiteiro",
          "4) Bombeiro",
        ],
        resposta: "1) Carpinteiro",
      },
      {
        pergunta: "Quando começou e terminou a Primeira Guerra Mundial? ",
        alternativas: [
          "1) 1914 - 1918",
          "2) 1902 - 1908 ",
          "3) 1920 - 1930",
          "4) 1912 - 1915",
        ],
        resposta: "1) 1914 - 1918",
      },
    ];
    this.perguntasNivel2 = [
      {
        pergunta: "O samba é uma dança originária de qual continente?",
        alternativas: [
          "1) Europa",
          "2) Ásia",
          "3) África",
          "4) América do Sul",
        ],
        resposta: "3) África",
      },
      {
        pergunta: "Como se chama o estudo entre palavras e significados?",
        alternativas: [
          "1) Fonética",
          "2) Semântica",
          "3) Filosofia",
          "4) Psiquiatria",
        ],
        resposta: "2) Semântica",
      },
      {
        pergunta:
          "Como se chama o território compreendido entre o istmo do Panamá e Terra do Fogo?",
        alternativas: [
          "1) América do Norte",
          "2) América Central",
          "3) América do Sul",
          "4) América Latina",
        ],
        resposta: "3) América do Sul",
      },
      {
        pergunta:
          "Qual flor é o símbolo nacional do Egito e foi considerada sagrada na antiguidade?",
        alternativas: ["1) Rosa", "2) Lírio", "3) Jasmim", "4) Lótus"],
        resposta: "4) Lótus",
      },
    ];
    this.perguntasNivel3 = [
      {
        pergunta: "Qual o nome da esposa do escritor Jorge Amado",
        alternativas: [
          "1) Zélia Cardoso de Melo",
          "Zélia Gattai",
          "3) Zélia Ribeiro",
          "4) Zélia de Almeida",
        ],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 3-2",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 3-3",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 3-4",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
    ];
    this.perguntasNivel4 = [
      {
        pergunta: "pergunta 4-1",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 4-2",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 4-3",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 4-4",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
    ];
    this.perguntasNivel5 = [
      {
        pergunta: "pergunta 5-1",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 5-2",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 5-3",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
      {
        pergunta: "pergunta 5-4",
        alternativas: ["alternativa 1", "alternativa 2"],
        resposta: "alternativa 1",
      },
    ];
  }

  showQuestion() {
    const perguntaSorteada = document.getElementById("botaoPerguntaSorteada");
    const alternativa1 = document.getElementById("botaoAlternativa1");
    const alternativa2 = document.getElementById("botaoAlternativa2");
    const alternativa3 = document.getElementById("botaoAlternativa3");
    const alternativa4 = document.getElementById("botaoAlternativa4");
    alternativa1.className = "botaoResposta";
    alternativa2.className = "botaoResposta";
    alternativa3.className = "botaoResposta";
    alternativa4.className = "botaoResposta";
    valorPremio.innerHTML = this.premio[this.round];

    let sorteioIndicePergunta;

    if (this.round === 1) {
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
      respostaCerta = this.perguntasNivel1[sorteioIndicePergunta].resposta;
      return this.perguntasNivel1[sorteioIndicePergunta];
    }

    if (this.round === 2) {
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
      respostaCerta = this.perguntasNivel2[sorteioIndicePergunta].resposta;
      return this.perguntasNivel2[sorteioIndicePergunta];
    }

    if (this.round === 3) {
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
      respostaCerta = this.perguntasNivel3[sorteioIndicePergunta].resposta;
      return this.perguntasNivel3[sorteioIndicePergunta];
    }

    if (this.round === 4) {
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
      respostaCerta = this.perguntasNivel4[sorteioIndicePergunta].resposta;
      return this.perguntasNivel4[sorteioIndicePergunta];
    }

    if (this.round === 5) {
      sorteioIndicePergunta = Math.floor(
        Math.random() * this.perg5ntasNivel5.length
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
      respostaCerta = this.perguntasNivel5[sorteioIndicePergunta].resposta;
      return this.perguntasNivel5[sorteioIndicePergunta];
    }
  }

  validarResposta(respostaClicada, game) {
    const botaoContinuar = document.querySelector("#botaoContinuar");
    const botaoJogarNovamente = document.querySelector("#botaoJogarNovamente");

    if (this.round === 5 && respostaClicada.textContent === respostaCerta) {
      window.alert("Você ganhou!");
      window.location.reload();
    }

    if (respostaClicada.textContent === respostaCerta) {
      respostaClicada.classList.add("verde");
      botaoContinuar.classList.remove("hide");
    }

    if (respostaClicada.textContent !== respostaCerta) {
      respostaClicada.classList.add("vermelho");
      game.perguntasNivel1.alternativas;
      botaoJogarNovamente.classList.remove("hide");
    }
  }

  pickQuestion() {
    if (this.round === 1) {
      this.perguntaAtual = this.perguntasNivel1[0];
    }
  }
}
