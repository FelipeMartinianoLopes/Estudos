function fibonacci() {

    let n = Number(document.getElementById("n").value);

    if (n <= 0 || n % 1 !== 0) {
        alert("Preencha o campo com um número inteiro positivo.");
        return;
    }

    let lista = [1, 1];

    while (lista.length < n) {

        let proximo =
            lista[lista.length - 1] +
            lista[lista.length - 2];

        lista.push(proximo);
    }

    let pertence = false;

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] == n) {
            pertence = true;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Primeiros " + n + " números: " +
        lista.join(", ") +
        "<br><br>" +
        (pertence
            ? n + " pertence à sequência."
            : n + " não pertence à sequência.");
}