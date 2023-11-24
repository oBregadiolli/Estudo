function validarWidth() {
  var widthAtual = window.innerWidth;
  var menorque800 = widthAtual < 800;
  console.log("Largura da Página:" + widthAtual + menorque800);
  if (widthAtual < 800) {
    var elementosEsconder = document.getElementById("teste");
    if (elementosEsconder) { elementosEsconder.style.display = "none" ;}
  }
  else {
    var elementosEsconder = document.getElementById("teste");
    if (elementosEsconder) {
      elementosEsconder.style.display = "block";
    }
  }
}

window.addEventListener("resize", validarWidth);

validarWidth();