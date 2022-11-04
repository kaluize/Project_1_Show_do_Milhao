// MANIPULAÇÃO DO DOM

const telaInicial = document.querySelector(".telaInicial");
const telaDeJogo = document.querySelector(".telaDeJogo");
//const telaDeJogoParteSuperior = document.getElementById("telaDeJogoParteSuperior");
//const pergunta = document.getElementById("pergunta");
//const respostas = document.getElementById("respostas");
//const telaDeJogoParteInferior = document.getElementById("telaDeJogoParteInferior");
const status = document.querySelector(".status");
const botaoJogar = document.getElementById("botaoJogar");
//const botaoErrar = document.getElementById("botaoErrar");
const botaoParar = document.getElementById("botaoParar");
//const botaoAcertar = document.getElementById("botaoAcertar");
const botaoContinuar = document.getElementById("botaoContinuar");
const botaoJogarNovamente = document.getElementById("botaoJogarNovamente");
const botaoAlternativa1 = document.getElementById("botaoAlternativa1");
const botaoAlternativa2 = document.getElementById("botaoAlternativa2");
const botaoAlternativa3 = document.getElementById("botaoAlternativa3");
const botaoAlternativa4 = document.getElementById("botaoAlternativa4");
const valorPremio = document.getElementById("valorPremio");
const valorAtual = document.getElementById("valorAtual");
//const valorSeErrar = document.getElementById("valorSeErrar");
//const valorSeParar = document.getElementById("valorSeParar");
//const valorSeAcertar = document.getElementById("valorSeContinuar");
const mensagemStatus = document.getElementById("mensagemStatus");
const desfechosPossiveis = document.querySelector(".desfechosPossiveis");
//const validacao = document.querySelector(".validacao");

const novoJogo = new Jogo();

let respostaCerta = "";

botaoJogar.addEventListener("click", () => {
  telaInicial.classList.add("hide");
  telaDeJogo.classList.remove("hide");
  novoJogo.perguntaAtual = novoJogo.showQuestion();
});

botaoJogarNovamente.addEventListener("click", () => {
  window.location.reload();
});

botaoAlternativa1.addEventListener("click", () => {
  novoJogo.validarResposta(botaoAlternativa1, novoJogo);
  desfechosPossiveis.classList.add("hide");
});

botaoAlternativa2.addEventListener("click", () => {
  novoJogo.validarResposta(botaoAlternativa2, novoJogo);
  desfechosPossiveis.classList.add("hide");
});

botaoAlternativa3.addEventListener("click", () => {
  novoJogo.validarResposta(botaoAlternativa3, novoJogo);
  desfechosPossiveis.classList.add("hide");
});

botaoAlternativa4.addEventListener("click", () => {
  novoJogo.validarResposta(botaoAlternativa4, novoJogo);
  desfechosPossiveis.classList.add("hide");
});

botaoContinuar.addEventListener("click", () => {
  novoJogo.rodada++;
  novoJogo.perguntaAtual = novoJogo.showQuestion();
  desfechosPossiveis.classList.remove("hide");
  botaoContinuar.classList.add("hide");
  mensagemStatus.classList.add("hide");

});

botaoParar.addEventListener("click", () => {
  desfechosPossiveis.classList.add("hide");
  status.classList.remove("hide");
  mensagemStatus.classList.remove("hide");
  botaoJogarNovamente.classList.remove("hide");
  mensagemStatus.innerHTML = "Você parou. Fim de jogo.";
});
