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
    state.trash.y += state.trash.vy;
    state.trash.x += state.trash.vx;
}

function setTrashPosition({ x, y }) {
    UI.trash.style.top = y + "px";
    UI.trash.style.transform = `translateX(${x}px)`
}

function updateScoreBar() {
    UI.score.textContent = `Score: ${state.score}`;
    UI.highscore.textContent = `HighScore: ${state.highscore}`;
}

function checkCollision() {
    if (isOutside()) {
        reset();
    }
}

function reset() {
    state.trash.x = 0;
    state.trash.y = 0;
    state.trash.vy = randomNumberFromInterval(2, 4)
    if (Math.random() < 0.5)
        state.trash.vx = -randomNumberFromInterval(1, 2)
    else
        state.trash.vx = randomNumberFromInterval(1, 2)

}

function randomNumberFromInterval(min, max) { // min and max included 
    const num = +(Math.random() * (max - min + 1) + min).toFixed(3)
    return num;
}

function isOutside() {
    const div1 = UI.container.getBoundingClientRect();
    const div2 = UI.trash.getBoundingClientRect();

    const isHorizontiallyOutside = !(div1.right > div2.left &&
        div1.left < div2.right
    )

    return state.trash.y >= window.innerHeight || isHorizontiallyOutside
}


export { reset }