export async function fetchHighScore() {
    const url = '/api/highscore'
    const { highscore } = await ((await fetch(url)).json());
    return highscore;
}

export async function postHighScore(score) {
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