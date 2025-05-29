const frases = [
  { id: "linha1", texto: "Bem-vindo(a) ao meu portfólio!" },
  { id: "linha2", texto: "Eu sou <span class='azul'>Henrique Almeida</span>" },
  { id: "linha3", texto: "Desenvolvedor Full Stack, confira meus projetos\ne solicite um orçamento" }
];

let linhaAtual = 0;
let caractere = 0;

function escrever() {
  if (linhaAtual >= frases.length) return;

  const el = document.getElementById(frases[linhaAtual].id);
  const textoCompleto = frases[linhaAtual].texto;

  el.innerHTML = textoCompleto.substring(0, caractere).replace(/\n/g, "<br>") + '<span class="cursor"></span>';

  caractere++;

  if (caractere <= textoCompleto.length) {
    setTimeout(escrever, 60);
  } else {
    caractere = 0;
    linhaAtual++;
    setTimeout(escrever, 60);
  }
}

document.addEventListener("DOMContentLoaded", escrever);
