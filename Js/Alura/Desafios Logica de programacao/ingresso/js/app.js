let disponiveis = {
    pista: 100,
    superior: 200,
    inferior: 400
};


function comprar() {
   
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeInput = document.getElementById('qtd');
    const quantidade = parseInt(quantidadeInput.value);

    
    if (isNaN(quantidade) || quantidade < 1) {
        alert('Por favor, insira uma quantidade válida (mínimo 1).');
        return;
    }

    if (quantidade > 100) {
        alert('Você pode comprar no máximo 10 ingressos por vez.');
        return;
    }

    
    if (disponiveis[tipoIngresso] < quantidade) {
        alert(`Desculpe, só temos ${disponiveis[tipoIngresso]} ingressos disponíveis para ${getNomeIngresso(tipoIngresso)}.`);
        return;
    }

    
    disponiveis[tipoIngresso] -= quantidade;
    atualizarQuantidadesDisponiveis();

   
    alert(`Compra realizada com sucesso! ${quantidade} ingresso(s) ${getNomeIngresso(tipoIngresso)}.`);

   
    quantidadeInput.value = '';
}

function atualizarQuantidadesDisponiveis() {
    for (const tipo in disponiveis) {
        const elemento = document.getElementById(`qtd-${tipo}`);
        if (disponiveis[tipo] > 0) {
            elemento.textContent = disponiveis[tipo];
            elemento.className = ''; 
        } else {
            elemento.textContent = 'Indisponível';
            elemento.className = 'indisponivel'; 
            document.querySelector(`#tipo-ingresso option[value="${tipo}"]`).disabled = true;
        }
    }
}


function getNomeIngresso(tipo) {
    switch (tipo) {
        case 'pista': return 'Pista';
        case 'superior': return 'Cadeira Superior';
        case 'inferior': return 'Cadeira Inferior';
        default: return '';
    }
}

document.addEventListener('DOMContentLoaded', atualizarQuantidadesDisponiveis);

