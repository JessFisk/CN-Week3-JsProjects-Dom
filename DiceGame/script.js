const rollBtn = document.getElementById(`rollBtn`)
const diceOne = document.getElementById(`diceOne`)
const diceTwo = document.getElementById(`diceTwo`)
const diceThree = document.getElementById(`diceThree`)
const diceFour = document.getElementById(`diceFour`)
const diceFive = document.getElementById(`diceFive`)
const diceSix = document.getElementById(`diceSix`)
const resetGame = document.getElementById(`resetGame`)

const losingSign = document.getElementById(`losingSign`)

let scoreNumber = document.getElementById('scoreNumber')
const diceImages = document.querySelectorAll(`#diceBox img`);

let score = 0

rollBtn.addEventListener(`click`, (e) => {
    const randomNum = Math.floor(Math.random() * 6 + 1)
    score += randomNum

    diceImages.forEach((img) => {
        img.classList.add(`hidden`)
        resetGame.classList.add(`hidden`);
    })

    if (randomNum === 1) {
        diceOne.classList.remove(`hidden`);
        resetGame.classList.remove(`hidden`);
        rollBtn.classList.add(`hidden`);
        losingSign.classList.remove(`hidden`);
    }
    if (randomNum === 2) {
        diceTwo.classList.remove(`hidden`);

    }
    if (randomNum === 3) {
        diceThree.classList.remove(`hidden`);

    }
    if (randomNum === 4) {
        diceFour.classList.remove(`hidden`);

    }
    if (randomNum === 5) {
        diceFive.classList.remove(`hidden`);

    }
    if (randomNum === 6) {
        diceSix.classList.remove(`hidden`);

    }

    scoreNumber.textContent = score.toString()
    if (score >= 20) {
        winningSign.classList.remove(`hidden`);
        resetGame.classList.remove(`hidden`);
        rollBtn.classList.add(`hidden`);
    }
})

resetGame.addEventListener(`click`, (e) => {
    location.reload()
})