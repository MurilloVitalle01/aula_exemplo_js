let valor = ''
let valor2 = parseInt(prompt("Digite seu valor"));
for (let i = 1; i <= 11; i++ ) {
    valor += i + 'x' +  "<br>"
    document.innerHTML = valor;
}

