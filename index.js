var startBtn = document.querySelector(".verde");
var stopBtn = document.querySelector(".vermelho");
var pauseBtn = document.querySelector(".amarelo");

var horas = 0;
var segundos = 0;
var minutos = 0;
var intertval;

startBtn.addEventListener("click", startTime);
stopBtn.addEventListener("click", stopTime);
pauseBtn.addEventListener("click", pauseTime);

function startTime() {
  //console.log("iniciou");
  interval = setInterval(counter, 1000);
}
function stopTime() {
  //console.log("parou");
  clearInterval(interval);
  horas = 0;
  segundos = 0;
  minutos = 0;
  document.querySelector(".segundos").innerHTML = "0" + segundos;
  document.querySelector(".minutos").innerHTML = "0" + minutos;
  document.querySelector(".horas").innerHTML = "0" + horas;
}
function pauseTime() {
  //console.log("pausou");
  clearInterval(interval);
}
function counter() {
  segundos++;
  if (segundos == 60) {
    minutos++;
    segundos = 0;
  }
  if (minutos == 60) {
    horas++;
    minutos = 0;
  }
  if (segundos < 10) {
    document.querySelector(".segundos").innerHTML = "0" + segundos;
  } else {
    document.querySelector(".segundos").innerHTML = segundos;
  }
  if (minutos < 10) {
    document.querySelector(".minutos").innerHTML = "0" + minutos;
  } else {
    document.querySelector(".minutos").innerHTML = minutos;
  }
  if (horas < 10) {
    document.querySelector(".horas").innerHTML = "0" + horas;
  } else {
    document.querySelector(".horas").innerHTML = horas;
  }
}
