const UI = {
    trash: document.getElementById('trash'),
    bin: document.getElementById('bin'),
    score: document.getElementById('score'),
    highscore: document.getElementById('high-score'),
    loadingModal: document.getElementById('loading-screen'),
    container:document.getElementById('main')
}

function hideLoadingScreen() {
    UI.loadingModal.classList.add('hidden')
}


export default UI;
export { hideLoadingScreen }