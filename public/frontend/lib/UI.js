const UI = {
    trash: document.getElementById('trash'),
    bin: document.getElementById('bin'),
    score: document.getElementById('score'),
    highscore: document.getElementById('high-score'),
    loadingModal: document.getElementById('loading-screen'),
    container: document.getElementById('main'),
    time: document.getElementById('time'),
    gameOver: document.getElementById('gameover-screen'),

}

function hideLoadingScreen() {
    UI.loadingModal.classList.add('hide')
    UI.loadingModal.classList.add('hidden')
}


export default UI;
export { hideLoadingScreen }