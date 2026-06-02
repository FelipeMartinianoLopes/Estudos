//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

// Valor aleatório: Math.random() retorna número entre 0 e 1. Se for maior ou igual a 0.5, consideramos que está chovendo.
let estaChovendo = Math.random() >= 0.5;

function verificarChuva(estaChovendo){
    if(estaChovendo){
        console.log("Está chovendo!Leve um guarda-chuva.");
    } else {
        console.log("Não está chovendo.Não precisa levar um guarda-chuva.");
    }
}

verificarChuva(estaChovendo);