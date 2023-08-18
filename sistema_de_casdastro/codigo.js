/* Criando a função menu */

function menu() {
    opcao = parseInt(prompt(
        "------Menu Principal ------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"

    ));
    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!"
    }
};

/* Função Cadastra Cliente */

function cadastrar_cliente() {
    let x = "n";
    relatorio = "*-Relatorio de Clientes -* <br> ";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do Cliente"))
        nome = prompt("Digite o Nome do Cliente")
        endereco = prompt("Digite o Endereço do Cliente")

        relatorio = relatorio + "<br>+--------------------------------<br><br>" +
            "ID : " + id + "<br>" +
            "NOME : " + nome + "</br>"
        "EDEREÇO" + endereco +
            "<br>+=--------------------------------<br>" +
            confirme - prompt("Finalizar Cadastro? S - sim ou N - Não?")

        if (corfime.toUpperCase == "S") {
            x = "S"
        }

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    }
}