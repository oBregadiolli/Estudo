const textoAnimado = document.getElementById("textobemvindo");
const palavras = [
  "Amigo",
  "Friend",
  "Prijatelj",
  "Dost",
  "友達",
  "Vän",
  "Arkadaş",
  "Prieten",
];
let indexPalavraAtual = 0;

function escreverTextoAnimado() {
  let palavra = palavras[indexPalavraAtual];
  let charIndex = 0;

  function digitar() {
    if (charIndex < palavra.length) {
      textoAnimado.textContent += palavra.charAt(charIndex);
      charIndex++;
      setTimeout(digitar, 100);
    } else {
      setTimeout(apagar, 1000);
    }
  }

  function apagar() {
    if (charIndex > 0) {
      textoAnimado.textContent = palavra.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(apagar, 50);
    } else {
      indexPalavraAtual = (indexPalavraAtual + 1) % palavras.length;
      palavra = palavras[indexPalavraAtual];
      setTimeout(digitar, 500);
    }
  }

  digitar();
}

escreverTextoAnimado();
