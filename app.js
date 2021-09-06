const p1 = {
    Score: 0,
    Button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1display')

}
const p2 = {
    Score: 0,
    Button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 3;
let isgameOver = false;

function updateScore(player, opponent) {
    if (!isgameOver) {
        player.Score += 1;
        if (player.Score === winningScore) {
            isgameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.display.textContent = player.Score;
    }
}


p1.Button.addEventListener('click', () => {
    updateScore(p1, p2);
})

p2.Button.addEventListener('click', () => {
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isgameOver = false;
    for (let p of[p1, p2]) {
        p.score = 0;
        p.display = 0;
        p.display.textContent = 0;
        p1display.classList.remove('has-text-success', 'has-text-danger');
        p1Button.disabled = false;
    }
}