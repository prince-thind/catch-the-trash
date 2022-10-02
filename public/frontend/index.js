import fetchHighScore from './lib/fetchHighScore.js'

const trash = document.getElementById('trash');
const bin = document.getElementById('bin');
const scoreDiv = document.getElementById('score');
const highscoreDiv = document.getElementById('high-score');

const state = {
    pos: {
        x: 0, y: 0
    },
    dragging: false,
    score: 0,
    highscore: 0,
    gameOver: false
}

init();

async function init() {
    state.highscore = (await fetchHighScore()) ?? 0;

    trash.style.top = state.pos.y;

    trash.addEventListener('dragstart', function (e) {
        state.dragging = true;
    })
    trash.addEventListener('dragend', function (e) {
        state.dragging = false;
    })

    bin.addEventListener('dragover', (e) => e.preventDefault());

    bin.addEventListener('drop', function (e) {
        e.preventDefault();
        incrementScore();
        reset();
    })
    setInterval(update, 10)

}

async function incrementScore() {
    state.score++;
    if (state.score > state.highscore) {
        await updateHighscore(state.score);
    }
}

async function updateHighscore(score) {
    state.highscore = score;

    await fetch('/api/highscore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            highscore: score
        })
    })
}
function updateScoreBar() {
    scoreDiv.textContent = `Score: ${state.score}`;
    highscoreDiv.textContent = `HighScore: ${state.highscore}`;
}

function update() {
    if (state.dragging) return;

    setBinPosition(state.pos);
    incrementPosition();
    checkCollision();
    updateScoreBar();

}

function checkCollision() {
    if (state.pos.y >= window.innerHeight) {
        reset();
    }
}

function incrementPosition() {
    state.pos.y++;

    if (Math.random() < 0.5) {
        state.pos.x++;
    }
    else {
        state.pos.x--;
    }
}

function setBinPosition({ x, y }) {
    trash.style.top = state.pos.y + "px";
    trash.style.transform = `translateX(${state.pos.x}px)`
}

function reset() {
    state.pos.x = 0;
    state.pos.y = 0;
}