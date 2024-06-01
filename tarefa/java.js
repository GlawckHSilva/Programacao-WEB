
function gerarTabuada() {

    const numero = document.getElementById('numero').value;
    
    const mensagemErro = document.getElementById('mensagem-erro');
    const resultado = document.getElementById('resultado');
    
  
    mensagemErro.textContent = '';
    resultado.innerHTML = '';

    if (isNaN(numero) || numero.trim() === '' || !Number.isInteger(Number(numero))) {
        mensagemErro.textContent = 'Por favor, insira um número inteiro.';
        return;
    }

    const num = parseInt(numero);

    let table = '<table><thead><tr><th>Número</th><th>Resultado</th></tr></thead><tbody>';
    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${num} x ${i}</td><td>${num * i}</td></tr>`;
    }
    table += '</tbody></table>';

    resultado.innerHTML = table;
}
