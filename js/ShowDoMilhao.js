// CLASSE

class Game {
    constructor() {
      this.round = 1
      this.premio = [0, "R$ 50.000,00", "R$ 100.000,00", "R$ 250.000,00", "R$ 500.000,00", "R$ 1.000.000,00"]
      this.perguntaAtual = {}
      this.perguntasNivel1 = [
        {
            pergunta: "Que animal da fauna brasileira está retratado na nota de 10 reais?",
            alternativas: ["Jabuti", "Onça", "Arara", "Tucano"],
            resposta: "Arara",
        },
        {
            pergunta: "Quingentésimo corresponde a qual número?",
            alternativas: ["500", "5.000", "50", "5"],
            resposta: "500",
        },
        {
            pergunta: "Que profissional usa uma ferramenta chamada formão?",
            alternativas: ["Carpinteiro", "Relojoeiro", "Confeiteiro", "Bombeiro"],
            resposta: "Carpinteiro",
        },
        {
            pergunta: "Quando começou e terminou a Primeira Guerra Mundial? ",
            alternativas: ["1914 - 1918", "1902 - 1908 ", "1920 - 1930", "1912 - 1915"],
            resposta: "1914 - 1918",
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
        
        if (this.round === 1){
        sorteioIndicePergunta = Math.floor(Math.random()*this.perguntasNivel1.length);
        perguntaSorteada.textContent = this.perguntasNivel1[sorteioIndicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel1[sorteioIndicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel1[sorteioIndicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel1[sorteioIndicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel1[sorteioIndicePergunta].alternativas[3];
        respostaCerta = this.perguntasNivel1[sorteioIndicePergunta].resposta;
        return this.perguntasNivel1[sorteioIndicePergunta];
        }

        if (this.round === 2){
        sorteioIndicePergunta = Math.floor(Math.random()*this.perguntasNivel2.length);
        perguntaSorteada.textContent = this.perguntasNivel2[sorteioIndicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel2[sorteioIndicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel2[sorteioIndicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel2[sorteioIndicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel2[sorteioIndicePergunta].alternativas[3];
        respostaCerta = this.perguntasNivel2[sorteioIndicePergunta].resposta;
        return this.perguntasNivel2[sorteioIndicePergunta];
        }

       if (this.round === 3){
        sorteioIndicePergunta = Math.floor(Math.random()*this.perguntasNivel3.length);
        perguntaSorteada.textContent = this.perguntasNivel3[sorteioIndicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel3[sorteioIndicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel3[sorteioIndicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel3[sorteioIndicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel3[sorteioIndicePergunta].alternativas[3];
        respostaCerta = this.perguntasNivel3[sorteioIndicePergunta].resposta;
        return this.perguntasNivel3[sorteioIndicePergunta];
        }

    if (this.round === 4){
        sorteioIndicePergunta = Math.floor(Math.random()*this.perguntasNivel4.length);
        perguntaSorteada.textContent = this.perguntasNivel4[sorteioIndicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel4[sorteioIndicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel4[sorteioIndicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel4[sorteioIndicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel4[sorteioIndicePergunta].alternativas[3];
        respostaCerta = this.perguntasNivel4[sorteioIndicePergunta].resposta;
        return this.perguntasNivel4[sorteioIndicePergunta];
        }

    if (this.round === 5){
        sorteioIndicePergunta = Math.floor(Math.random()*this.perg5ntasNivel5.length);
        perguntaSorteada.textContent = this.perguntasNivel5[sorteioIndicePergunta].pergunta;
        alternativa1.textContent = this.perguntasNivel5[sorteioIndicePergunta].alternativas[0];
        alternativa2.textContent = this.perguntasNivel5[sorteioIndicePergunta].alternativas[1];
        alternativa3.textContent = this.perguntasNivel5[sorteioIndicePergunta].alternativas[2];
        alternativa4.textContent = this.perguntasNivel5[sorteioIndicePergunta].alternativas[3];
        respostaCerta = this.perguntasNivel5[sorteioIndicePergunta].resposta;
        return this.perguntasNivel5[sorteioIndicePergunta];
        }

        
        
    }

    validarResposta(respostaClicada, game) {
        if(respostaClicada.textContent === respostaCerta) {
            respostaClicada.classList.add("verde")
        } else {
            respostaClicada.classList.add("vermelho");
            game.perguntasNivel1.alternativas
        }

    }

    pickQuestion() {
      if (this.round === 1) {
          this.perguntaAtual = this.perguntasNivel1[0]
      }
    }
  }
