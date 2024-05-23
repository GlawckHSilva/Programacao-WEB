const botao = document.querySelector("button");

botao.addEventListener("click", function(){
    console.log("Dieimes Nunes");
});

const form_dieimes = document.querySelector("#exemplo_form");

form_dieimes.addEventListener("submit", function(event){
    event.preventDefault();
})


let texto_numero = "2024";

let numero = parseFloat(texto_numero);

console.log(typeof(numero));


const tabela = document.querySelector("#tabela");

let linha_nova = tabela.insertRow();

let coluna = linha_nova.insertCell();
let coluna2 = linha_nova.insertCell();

coluna.innerHTML = "Dieimes";
coluna2.innerHTML = "10";


const exemplo_1 = document.querySelector("#exemplo_1");

exemplo_1.innerHTML = "<p>Dieimes</p>";

const formulario2 = document.querySelector("#exemplo_form2");

formulario2.addEventListener("submit", function(event){
   // event.preventDefault();
    document.querySelector("#exemplo_form2").reset();
});

