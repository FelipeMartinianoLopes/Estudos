function analisar() {

    let texto =
        document.getElementById("numeros").value;

    let lista = texto.split(",");

    let numeros = [];

    for (let i = 0; i < lista.length; i++) {
        numeros.push(Number(lista[i]));
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    document.getElementById("resultado").innerHTML =
        "Sequência: " + numeros.join(", ") +
        "<br>Maior número: " + maior +
        "<br>Menor número: " + menor;
}