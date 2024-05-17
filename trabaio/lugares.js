document.addEventListener("DOMContentLoaded", function() {

    const imagens = document.querySelectorAll("img");
    console.log("Imagens:");
    imagens.forEach(imagem => console.log(imagem.src));

    const paragrafoSelecionado = document.querySelector("p");
    const novoTexto = "1 real = 1 milhão de kwanzas";
    paragrafoSelecionado.textContent = novoTexto;
});
