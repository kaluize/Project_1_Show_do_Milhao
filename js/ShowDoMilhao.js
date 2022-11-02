// CLASSE

class Game {
    constructor() {
      this.round = 1
      this.perguntaAtual = {}
      this.perguntasNivel1 = [
        {
            pergunta: "pergunta 1-1",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 1-2",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 1-3",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 1-4",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
        {
            pergunta: "pergunta 1-5",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
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
        },
        {
            pergunta: "pergunta 2-5",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
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
        },
        {
            pergunta: "pergunta 3-5",
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
        {
            pergunta: "pergunta 4-5",
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
        {
            pergunta: "pergunta 5-5",
            alternativas: ["alternativa 1", "alternativa 2"],
            resposta: "alternativa 1",
        },
      ];
    }

    showQuestion() {
    }
    pickQuestion() {
      if (this.round === 1) {
          this.perguntaAtual = this.perguntasNivel1[0]
      }
    }
  }
