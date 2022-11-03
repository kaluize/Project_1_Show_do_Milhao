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
const botaoAlternativa1 = document.getElementById("botaoAlternativa1");
const botaoAlternativa2 = document.getElementById("botaoAlternativa2");
const botaoAlternativa3 = document.getElementById("botaoAlternativa3");
const botaoAlternativa4 = document.getElementById("botaoAlternativa4");

const valorPergunta = document.getElementById("valorPergunta");
const valorAtual = document.getElementById("valorAtual");
const valorSeErrar = document.getElementById("valorSeErrar");
const valorSeParar = document.getElementById("valorSeParar");
const valorSeAcertar = document.getElementById("valorSeContinuar");
const mensagemStatus = document.getElementById("mensagemStatus");

const startGame = new Game();
let respostaCerta = "";

botaoJogar.addEventListener("click",()=>{
  startScreen.className = "hide";
  gameScreen.className = "show";
  startGame.showQuestion();
});

botaoJogarNovamente.addEventListener("click", ()=>{
  startScreen.className = "show";
  gameScreen.className = "hide";
})

botaoAlternativa1.addEventListener("click", ()=>{
  alert(respostaCerta);
})

botaoAlternativa2.addEventListener("click", ()=>{

})

botaoAlternativa3.addEventListener("click", ()=>{

})

botaoAlternativa4.addEventListener("click", ()=>{

})




/*const alternativa1 = document.querySelector("#alternativa1");
  const corretas = ["50", "200"];
  alternativa1.addEventListener("click", () => {
    console.log(corretas.includes(alternativa1.innerText));
    if (corretas.includes(alternativa1.innerText)) {
      console.log("acertou!");
    }
  });*/