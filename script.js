var click = 0;
var reset = 0;
var divisible = 0;

function mudarNumero() {
  document.getElementById("clique").textContent = click;
  document.getElementById("resetar").textContent = reset;
  document.getElementById("divisivel").textContent = divisible;
}

function clicar() {
  click++;
  mudarNumero();

  if (click % 10 == 0) {
    alert("Você clicou " + click + " vezes!");
    divisible++;
    mudarNumero();
  }
}

function resetar() {
  reset++;
  click = 0;
  divisible = 0;
  mudarNumero();
}

document.getElementById("botaoClick").addEventListener("click", clicar);
document.getElementById("botaoReset").addEventListener("click", resetar);
