// CLASSE

class Game {
    constructor() {
      this.round = 1
      this.perguntaAtual = {}
      this.perguntasNivel1 = [
        {
            pergunta: "Pergunta nivel 1 respostas com A",
            alternativas: ["abacaxi", "antena", "anis", "algodão"],
            resposta: "abacaxi",
        },
        {
            pergunta: "Pergunta nível 1 respostas com B",
            alternativas: ["banana", "boneca", "biscoito", "brasil"],
            resposta: "banana",
        },
        {
            pergunta: "Pergunta nível 1 respostas com C",
            alternativas: ["carambola", "carro", "corinthians", "chrome"],
            resposta: "carambola",
        },
        {
            pergunta: "Pergunta nível 1 respostas com D",
            alternativas: ["danoninho", "duran duran", "domingo", "damasco"],
            resposta: "damasco",
        }
      ];
      this.perguntasNivel2 = [
        {
            pergunta: "pergunta 2-1",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 2-2",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 2-3",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 2-4",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        }
      ];
      this.perguntasNivel3 = [
        {
            pergunta: "pergunta 3-1",
            alternativas: ["alternativa 1", "alternativa 2"],
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
        }
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
        }
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
        }
      ];
    }

    showQuestion() {
        const perguntaSorteada = document.getElementById("perguntaSorteada");
        const alternativa1 = document.getElementById("alternativa1");
        const alternativa2 = document.getElementById("alternativa2");
        const alternativa3 = document.getElementById("alternativa3");
        const alternativa4 = document.getElementById("alternativa4");
        let indicePergunta = Math.floor(Math.random()*this.perguntasNivel1.length);
        perguntaSorteada.textContent = this.perguntasNivel1[indicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel1[indicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel1[indicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel1[indicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel1[indicePergunta].alternativas[3];

    }
    pickQuestion() {
      if (this.round === 1) {
          this.perguntaAtual = this.perguntasNivel1[0]
      }
    }
  }
