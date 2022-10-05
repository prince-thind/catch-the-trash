import state from "./state.js";
import UI from "./UI.js";

export default function animate() {
    if (state.dragging) return requestAnimationFrame(animate)

    setTrashPosition(state.trash);
    incrementPosition();
    checkCollision();
    updateScoreBar();

    requestAnimationFrame(animate);
}

function incrementPosition() {
    state.trash.y++;
}

function setTrashPosition({ x, y }) {
    UI.trash.style.top = state.trash.y + "px";
    UI.trash.style.transform = `translateX(${state.trash.x}px)`
}

function updateScoreBar() {
    UI.score.textContent = `Score: ${state.score}`;
    UI.highscore.textContent = `HighScore: ${state.highscore}`;
}



function checkCollision() {
    if (state.trash.y >= window.innerHeight) {
        reset();
    }
}

function reset() {
    state.trash.x = 0;
    state.trash.y = 0;
}

export { reset }