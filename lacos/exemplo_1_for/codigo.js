/*  FOR ([inicialização]; [condição]; [expressao final]) {
    declaração
}
tipos de variaveis
VAR = GLOBAL
LET = LOCAL
CONST = CONSTANTE
*/
/* let valor = ''
for (let i = 0; i <= 10; i++) {
    valor += i + "<br>"
    resposta.innerHTML = valor;
} */


let valor = ''
let valor2 = parseInt(prompt("Digite um valor"))
for (let i =1; i <=10; i++) {
    valor += i + "x" + valor2 + "=" + i * valor2 + "<br>"
    resposta.innerHTML = valor;
}

