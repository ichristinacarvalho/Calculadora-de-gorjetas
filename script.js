function calcular() {

    //pega o valor bruto em formato de texto e cria uma versão numérica limpa em seguida
    let valor = document.getElementById("valor").value;
    let valorNum = Number(valor);

    let porcentagem = document.getElementById("porcentagem").value;
    let porcentagemNum = Number(porcentagem);

    //validação de campos vazios e negativos
    if (valor.trim() === "" || porcentagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    } else if(valorNum < 0  || porcentagemNum < 0){
        alert("Os valores não podem ser negativos.");
        return;
    }

    //PROCESSAMENTO
    let contaPorcentagem = porcentagem / 100;
    let gorjeta = valor * contaPorcentagem;
    let resultado = valor + gorjeta;

    //SAÍDA
    document.getElementById("conta").innerHTML = `Valor da conta: R$ ${valorNum.toFixed(2)}`;
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