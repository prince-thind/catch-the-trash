export default async function fetchHighScore() {
    const url = '/api/highscore'
    const {highscore} = await ((await fetch(url)).json());
    return highscore;

}