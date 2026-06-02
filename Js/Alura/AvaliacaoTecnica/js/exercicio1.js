function calcular() {

    let salarioHora =
        Number(document.getElementById("salarioHora").value);

    let horas =
        Number(document.getElementById("horas").value);

    let filhos =
        Number(document.getElementById("filhos").value);

    let salarioBruto = salarioHora * horas;
    let salarioFamilia = 0;

    if (salarioBruto <= 788) {
        salarioFamilia = filhos * 30.50;
    }
    else if (salarioBruto <= 1100) {
        salarioFamilia = filhos * 18.50;
    }
    else {
        salarioFamilia = filhos * 11.90;
    }

    let salarioLiquido =
        salarioBruto + salarioFamilia;

    document.getElementById("resultado").innerHTML =
        "Salário Bruto: R$ " + salarioBruto.toFixed(2) +
        "<br>Salário Família: R$ " + salarioFamilia.toFixed(2) +
        "<br>Salário Líquido: R$ " + salarioLiquido.toFixed(2);
}