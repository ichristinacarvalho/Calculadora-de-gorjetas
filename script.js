function calcular() {

    //ENTRADA
    let valor = Number(document.getElementById("valor").value);//certo
    let porcentagem = Number(document.getElementById("porcentagem").value);//certo

    //VALIDAÇÃO
    if (valor <= 0 || porcentagem <= 0) {
        alert("Digite um número válido.")
        return
    }

    //PROCESSAMENTO
    let contaPorcentagem = porcentagem / 100;
    let gorjeta = valor * contaPorcentagem;
    let resultado = valor + gorjeta;

    //SAÍDA
    document.getElementById("conta").innerHTML = `Valor da conta: R$ ${valor.toFixed(2)}`;
    document.getElementById("gorjeta").innerHTML = `Valor da gorjeta: R$ ${gorjeta.toFixed(2)}`;
    document.getElementById("total").innerHTML = `O total a pagar é: R$ ${resultado.toFixed(2)}`;
}

//LIMPAR CAMPOS
function limparCampos() {
    //INPUTS
    document.getElementById("valor").value = "";
    document.getElementById("porcentagem").value = "";

    //RESULTADO
    document.getElementById("conta").innerHTML = "";
    document.getElementById("gorjeta").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}