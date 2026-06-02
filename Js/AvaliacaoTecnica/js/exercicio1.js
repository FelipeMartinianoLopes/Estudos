function calcular() {

    let salarioHora = document.getElementById("salarioHora").value;
    let horas = document.getElementById("horas").value;
    let filhos = document.getElementById("filhos").value;

    if (salarioHora === "" || horas === "" || filhos === "") {
        alert("Preencha todos os campos.");
        return;
    }

    salarioHora = Number(salarioHora);
    horas = Number(horas);
    filhos = Number(filhos);

    if (salarioHora < 0) {
        alert("O salário por hora não pode ser negativo.");
        return;
    }

    if (horas < 0) {
        alert("A quantidade de horas não pode ser negativa.");
        return;
    }

    if (filhos < 0) {
        alert("A quantidade de filhos não pode ser negativa.");
        return;
    }

    if (!Number.isInteger(filhos)) {
        alert("A quantidade de filhos deve ser um número inteiro.");
        return;
    }

    let salarioBruto = salarioHora * horas;
    let salarioFamilia = 0;

    if (salarioBruto <= 788) {
        salarioFamilia = filhos * 30.50;
    } else if (salarioBruto <= 1100) {
        salarioFamilia = filhos * 18.50;
    } else {
        salarioFamilia = filhos * 11.90;
    }

    let salarioLiquido = salarioBruto + salarioFamilia;

    document.getElementById("resultado").innerHTML =
        "Salário Bruto: R$ " + salarioBruto.toFixed(2) +
        "<br>Salário Família: R$ " + salarioFamilia.toFixed(2) +
        "<br>Salário Líquido: R$ " + salarioLiquido.toFixed(2);
}