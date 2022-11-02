// MANIPULAÇÃO DO DOM

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameScreenTop = document.getElementById("gameScreenTop");
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const gameScreenBottom = document.getElementById("gameScreenBottom");

const botaoJogar = document.getElementById("botaoJogar");
const botaoErrar = document.getElementById("botaoErrar");
const botaoParar = document.getElementById("botaoParar");
const botaoAcertar = document.getElementById("botaoAcertar");
const botaoContinuar = document.getElementById("botaoContinuar");
const botaoJogarNovamente = document.getElementById("botaoJogarNovamente");

const valorPergunta = document.getElementById("valorPergunta");
const valorAtual = document.getElementById("valorAtual");
const valorSeErrar = document.getElementById("valorSeErrar");
const valorSeParar = document.getElementById("valorSeParar");
const valorSeAcertar = document.getElementById("valorSeContinuar");
const mensagemStatus = document.getElementById("mensagemStatus");

botaoJogar.addEventListener("click",()=>{
  startScreen.className = "hide";
  gameScreen.className = "show";
  const startGame = new Game();
  startGame.showQuestion();
});

botaoJogarNovamente.addEventListener("click", ()=>{
  startScreen.className = "show";
  gameScreen.className = "hide";
})



/*const alternativa1 = document.querySelector("#alternativa1");
  const corretas = ["50", "200"];
  alternativa1.addEventListener("click", () => {
    console.log(corretas.includes(alternativa1.innerText));
    if (corretas.includes(alternativa1.innerText)) {
      console.log("acertou!");
    }
  });*/