const handleRoll = (numberOfDie, sidedDie) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')

    $div.innerText = `d${sidedDie} - ${Math.floor(Math.random() * sidedDie) + 1}`
    $display.append($div)

    if (numberOfDie > 1) {
        numberOfDie--
        handleRoll(numberOfDie, sidedDie)
    }

}

const clearRolls = () => {
    const $display = document.querySelector('.display')
    $display.innerText = ''
    window.console.clear()
}