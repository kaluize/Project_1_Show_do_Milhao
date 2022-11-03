// MANIPULAÇÃO DO DOM

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameScreenTop = document.getElementById("gameScreenTop");
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const gameScreenBottom = document.getElementById("gameScreenBottom");
const status = document.getElementById("status");

const botaoJogar = document.getElementById("botaoJogar");
const botaoErrar = document.getElementById("botaoErrar");
const botaoParar = document.getElementById("botaoParar");
const botaoAcertar = document.getElementById("botaoAcertar");
const botaoContinuar = document.getElementById("botaoContinuar");
const botaoJogarNovamente = document.getElementById("botaoJogarNovamente");
const botaoAlternativa1 = document.getElementById("botaoAlternativa1");
const botaoAlternativa2 = document.getElementById("botaoAlternativa2");
const botaoAlternativa3 = document.getElementById("botaoAlternativa3");
const botaoAlternativa4 = document.getElementById("botaoAlternativa4");

const valorPremio = document.getElementById("valorPremio");
const valorAtual = document.getElementById("valorAtual");
const valorSeErrar = document.getElementById("valorSeErrar");
const valorSeParar = document.getElementById("valorSeParar");
const valorSeAcertar = document.getElementById("valorSeContinuar");
const mensagemStatus = document.getElementById("mensagemStatus");
const controlesEmJogo = document.querySelector(".controlesEmJogo");
const controlesFinalJogo = document.querySelector(".controlesFinalJogo");

const startGame = new Game();

let respostaCerta = "";

botaoJogar.addEventListener("click",()=>{
  startScreen.classList.add ("hide");
  gameScreen.classList.remove("hide");
  startGame.perguntaAtual = startGame.showQuestion();
});

botaoJogarNovamente.addEventListener("click", ()=>{
  startScreen.classList.remove ("hide");
  gameScreen.classList.add("hide");
  controlesEmJogo.classList.remove("hide");
  botaoJogarNovamente.classList.add("hide");
})

botaoAlternativa1.addEventListener("click", ()=>{
  startGame.validarResposta(botaoAlternativa1, startGame);
  controlesEmJogo.classList.add("hide");

})

botaoAlternativa2.addEventListener("click", ()=>{
  startGame.validarResposta(botaoAlternativa2, startGame);
  controlesEmJogo.classList.add("hide");
})

botaoAlternativa3.addEventListener("click", ()=>{
  startGame.validarResposta(botaoAlternativa3, startGame);
  controlesEmJogo.classList.add("hide");
})

botaoAlternativa4.addEventListener("click", ()=>{
  startGame.validarResposta(botaoAlternativa4, startGame);
  controlesEmJogo.classList.add("hide");
})

botaoContinuar.addEventListener("click", ()=>{
  startGame.round ++
  startGame.perguntaAtual = startGame.showQuestion();
  controlesEmJogo.classList.remove("hide");
  botaoContinuar.classList.add("hide");
})




/*const alternativa1 = document.querySelector("#alternativa1");
  const corretas = ["50", "200"];
  alternativa1.addEventListener("click", () => {
    console.log(corretas.includes(alternativa1.innerText));
    if (corretas.includes(alternativa1.innerText)) {
      console.log("acertou!");
    }
  });*/