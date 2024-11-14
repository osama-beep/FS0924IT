const board = document.getElementById('board');
const smallBoards = document.getElementById('smallBoards');
const drawButton = document.getElementById('drawNumber');
const startButton = document.getElementById('startGame');
const numBoardsInput = document.getElementById('numBoards');
const drawnNumbers = new Set();

function createBoard() {
    for (let i = 1; i <= 76; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;
        board.appendChild(cell);
    }
}

function createSmallBoard() {
    const smallBoard = document.createElement('div');
    smallBoard.className = 'small-board';
    const numbers = new Set();
    while (numbers.size < 24) {
        const number = Math.floor(Math.random() * 76) + 1;
        if (!numbers.has(number)) {
            numbers.add(number);
            const cell = document.createElement('div');
            cell.className = 'small-cell';
            cell.textContent = number;
            smallBoard.appendChild(cell);
        }
    }
    return smallBoard;
}

function drawNumber() {
    if (drawnNumbers.size === 76) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    let number;
    do {
        number = Math.floor(Math.random() * 76) + 1;
    } while (drawnNumbers.has(number));

    drawnNumbers.add(number);
    const cells = board.getElementsByClassName('cell');
    cells[number - 1].classList.add('drawn');

    const smallCells = smallBoards.getElementsByClassName('small-cell');
    for (let cell of smallCells) {
        if (parseInt(cell.textContent) === number) {
            cell.classList.add('drawn');
        }
    }
}

function startGame() {
    const numBoards = parseInt(numBoardsInput.value);
    if (numBoards < 1 || numBoards > 3) {
        alert('Inserisci un numero di tabelline tra 1 e 3');
        return;
    }

    document.getElementById('setup').style.display = 'none';
    drawButton.style.display = 'inline-block';

    createBoard();
    for (let i = 0; i < numBoards; i++) {
        smallBoards.appendChild(createSmallBoard());
    }

    drawButton.addEventListener('click', drawNumber);
}

startButton.addEventListener('click', startGame);

