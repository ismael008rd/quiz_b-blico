const btn_jogaNovamente = document.querySelector(".btn_jogar");

const total = document.querySelector(".total");

total.innerHTML = "agora sim papai";

const score = localStorage.getItem("totalValue");

total.innerHTML = `Total: ${score}`;

function JogarNovamente() {
  window.location.href = "index.html";
}

btn_jogaNovamente.addEventListener("click", JogarNovamente);

