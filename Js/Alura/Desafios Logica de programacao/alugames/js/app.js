function alterarStatus(id) {
    const game = document.getElementById(`game-${id}`);
    const image = game.querySelector('.dashboard__item__img');
    const button = game.querySelector('.dashboard__item__button');
    const isRented = image.classList.contains('dashboard__item__img--rented');

    if (isRented) {
        
        if (confirm('Tem certeza que deseja devolver este jogo?')) {
            image.classList.remove('dashboard__item__img--rented');
            button.textContent = 'Alugar';
            button.classList.remove('dashboard__item__button--return');
            updateRentedGamesCount(); 
        }
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        updateRentedGamesCount(); 
    }
}


function updateRentedGamesCount() {
    const rentedGames = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Total de jogos alugados: ${rentedGames.length}`);
    
}

document.addEventListener('DOMContentLoaded', updateRentedGamesCount);