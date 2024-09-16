document.addEventListener('DOMContentLoaded', () => {

    const board = document.getElementById('memory-game');
    const winMessage = document.getElementById('win-message');
    const resetButton = document.getElementById('reset-button');
    const totalPairs = 6;
    let matchedPairs = 0;
    let cards = [];
    let cardElements = [];
    let firstCard, secondCard;
    let lockBoard = false;

    // Criar as cartas
    function createCards() {
        cards = [];
        for (let i = 1; i <= totalPairs; i++) {
            cards.push(i, i);
        }
        // Embaralhar as cartas
        cards = cards.sort(() => 0.5 - Math.random());
    }

    // Criar elementos das cartas
    function createCardElement(number) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.number = number;

        // Verso da carta
        const backImg = document.createElement('img');
        backImg.src = 'images/r.png';
        backImg.classList.add('back');
        card.appendChild(backImg);

        // Frente da carta
        const frontImg = document.createElement('img');
        frontImg.src = `images/${number}.png`;
        frontImg.classList.add('front');
        card.appendChild(frontImg);
        
        card.addEventListener('click', flipCard);
        return card;
    }

    // Colocar as cartas na tela
    function setupBoard() {
        board.innerHTML = ''; 
        cardElements = [];
        createCards();
        cards.forEach(number => {
            const card = createCardElement(number);
            board.appendChild(card);
            cardElements.push(card);
        });
    }

    // Virar a carta
    function flipCard() {
        if (lockBoard || this === firstCard || this.classList.contains('flipped')) return; 
        
        this.classList.add('flipped');
        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this; 
        checkForMatch();
    }

    // Verificar se as cartas são iguais
    function checkForMatch() {
        if (firstCard.dataset.number === secondCard.dataset.number) {
            disableCards();
            matchedPairs++;

            if (matchedPairs === totalPairs) {
                showWinMessage();
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetBoard();
    }

    // Desvirar cartas que não são iguais
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function showWinMessage() {
        winMessage.style.display = 'block';
    }

    function resetGame() {
        winMessage.style.display = 'none';
        matchedPairs = 0;
        setupBoard();
    }

    // Adicionar clique ao botão de reset
    resetButton.addEventListener('click', resetGame);

    setupBoard();
});
