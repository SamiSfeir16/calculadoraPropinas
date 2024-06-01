const valorInput = document.querySelector(".cuenta__input");
const botones = document.querySelectorAll(".btn-prop");
const propMsj = document.querySelector(".propina__total");
const totalMsj = document.querySelector(".total__total");
const custom = document.getElementById("custom");
const btnReset = document.querySelector(".reset");
const btnDefault = document.getElementById("15per");
let propPorce = 15;
let valorCuenta = 0;
let propinaTotal = 0;
let cuentaTotal = 0;

botones.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    botones.forEach((btn) => {
      btn.classList.remove("btn__selected");
    });

    btn.classList.add("btn__selected");
    propPorce = parseInt(btn.id, 10);
    custom.value = "";
    calcularTotal();
  });
});

function calcularTotal() {
  if (
    isNaN(propPorce) ||
    propPorce === Infinity ||
    isNaN(valorCuenta) ||
    valorCuenta === Infinity ||
    propPorce < 0 ||
    valorCuenta < 0
  ) {
    return;
  }

  propinaTotal = valorCuenta * (propPorce / 100);
  cuentaTotal = valorCuenta + propinaTotal;

  propMsj.textContent = `$${propinaTotal.toFixed(2)}`;
  totalMsj.textContent = `$${cuentaTotal.toFixed(2)}`;
}

valorInput.addEventListener("keyup", function (e) {
  valorCuenta = +e.currentTarget.value;
  calcularTotal();
});

custom.addEventListener("keyup", function (e) {
  propPorce = +e.currentTarget.value;
  calcularTotal();
});

btnReset.addEventListener("click", function (e) {
  valorInput.value = "";
  valorInput.placeholder = `0.00`;
  valorCuenta = 0;
  propPorce = 15;
  custom.value = "";
  botones.forEach((btn) => {
    btn.classList.remove("btn__selected");
  });

  btnDefault.classList.add("btn__selected");
});
