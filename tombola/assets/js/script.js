const board = document.getElementById('board');
const drawButton = document.getElementById('drawNumber');
const drawnNumbers = new Set();

function createBoard() {
    for (let i = 1; i <= 76; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;
        board.appendChild(cell);
    }
}

function drawNumber() {
    if (drawnNumbers.size === 76) {
        alert('All numbers have been drawn!');
        return;
    }

    let number;
    do {
        number = Math.floor(Math.random() * 76) + 1;
    } while (drawnNumbers.has(number));

    drawnNumbers.add(number);
    const cell = board.children[number - 1];
    cell.classList.add('drawn');
}

function startGame() {
    createBoard();
    drawButton.addEventListener('click', drawNumber);
}

document.addEventListener('load', startGame());

