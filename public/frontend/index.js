import animate, { reset } from './lib/animation.js';
import { fetchHighScore, postHighScore } from './lib/api.js'
import state from './lib/state.js';
import UI, { hideLoadingScreen } from './lib/UI.js';


init();

async function init() {

    state.highscore = (await fetchHighScore()) ?? 0;
    hideLoadingScreen();

    UI.trash.style.top = state.trash.y;

    UI.trash.addEventListener('dragstart', function (e) {
        state.dragging = true;
    })
    UI.trash.addEventListener('dragend', function (e) {
        state.dragging = false;
    })

    UI.bin.addEventListener('dragover', (e) => e.preventDefault());

    UI.bin.addEventListener('drop', function (e) {
        e.preventDefault();
        incrementScore();
        reset();
    })

    requestAnimationFrame(animate);

    setInterval(() => {
        if (state.dragging) return;
        state.time--;
    }, 1000)

}

async function incrementScore() {
    state.score++;
    if (state.score > state.highscore) {
        await updateHighscore(state.score);
    }
}

async function updateHighscore(score) {
    state.highscore = score;
    await postHighScore(score)
}

