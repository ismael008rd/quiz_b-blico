const questoes = document.querySelectorAll(".questoesalt");
const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const q5 = document.querySelector("#q5");
const proximo = document.querySelector(".btn_prox");

let indexPergunt = 0;
let score = 0;

const perguntas = [
  {
    pergunta: "1) Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
    perguntaA: "Enos, viveu 905 anos",
    perguntaB: "Noé, viveu 990 anos",
    perguntaC: "Matusalém, viveu 969 anos",
    perguntaD: " Rainha Ester, viveu 859 anos",
    correct: "Matusalém, viveu 969 anos",
  },
  {
    pergunta: "2) Qual desses não teve o seu nome mudado na Bíblia?",
    perguntaA: "Sara",
    perguntaB: "Abraão",
    perguntaC: "Jacó",
    perguntaD: "Davi",
    correct: "Davi",
  },
  {
    pergunta: "3. Qual dos nomes de Deus Moisés deveria dar aos israelitas, quando falasse de quem tinha lhe enviado?",
    perguntaA: "Elohim",
    perguntaB: "El Shadday",
    perguntaC: "Eu sou o que sou",
    perguntaD: "Eu sou o Senhor",
    correct: "Eu sou o que sou",
  },
];

function comecarJogo() {
  q1.innerHTML = perguntas[indexPergunt].pergunta;
  q2.innerHTML = perguntas[indexPergunt].perguntaA;
  q3.innerHTML = perguntas[indexPergunt].perguntaB;
  q4.innerHTML = perguntas[indexPergunt].perguntaC;
  q5.innerHTML = perguntas[indexPergunt].perguntaD;

  //  pecorrer()
}

comecarJogo();

let alternativaSelecionada = false;

function pecorrer() {
  questoes.forEach((e) => {
    e.addEventListener("click", handleClique);
  });
}

function handleClique(){
  console.log(this.lastChild.innerHTML);
  const conteudo = this.lastChild.innerHTML;
   alternativaSelecionada=true



  // Verificar se a alternativa já foi clicada
  if (!this.classList.contains("clicked")) {
    if (conteudo === perguntas[indexPergunt].correct) {
      this.classList.add("correct");
      score = score + 100;
    } else {
      this.classList.add("incorrect");
    }
   
    // Adicionar classe 'clicked' para indicar que essa alternativa foi clicada
    this.classList.add("clicked");
   

    console.log(alternativaSelecionada);
    if (alternativaSelecionada) {
      proximo.style.display = "block";
    } else {
      console.log("deu falso");
      proximo.removeEventListener("click", proximoPerg);
    }

    questoes.forEach((e) => {
      e.removeEventListener("click", handleClique);
    });
  }
}
function mostrarPontuacao() {
  console.log(score);
  // Ou, se desejar redirecionar para outra página com a pontuação
  // window.location.href = `resultado.html?total=${score}`;
}

pecorrer();
proximo.addEventListener("click", proximoPerg);
function proximoPerg() {
  alternativaSelecionada=false
  indexPergunt++;


  questoes.forEach((e) => {
    e.classList.remove('clicked')
  });



  if (alternativaSelecionada) {
  
    proximo.style.display = "block";
  } else {
    console.log("deu falso");
    proximo.style.display = "none";

  }

  if (indexPergunt >= perguntas.length) {
    console.log("fim das questões");

    mostrarTotal()
  }
  console.log(score);
  console.log(indexPergunt);
  console.log("clicado");
  comecarJogo();
  questoes.forEach((elemento) => {
    elemento.classList.remove("correct");
    elemento.classList.remove("incorrect");
  });

 

  pecorrer();
}
function mostrarTotal() {
  console.log(score);
  window.location.href = `total.html?total=${score}`;
}
