const handleRoll = (numberOfDie, sidedDie) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')

    const rolledA = Math.floor(Math.random() * sidedDie) + 1
    $div.innerText = `d${sidedDie} - ${rolledA}`
    $display.append($div)

    if (numberOfDie > 1) {
        numberOfDie--
        handleRoll(numberOfDie, sidedDie)
    }

    sidedDie == 20 && rolledA == 1 && $div.append('CRITICAL FAILURE')
    rolledA == 20 && $div.append('NAT 20!!')

}

const clearRolls = () => {
    const $display = document.querySelector('.display')
    $display.innerText = ''
}

const setRolls = (numberOfDie, sidedDie) => {
    clearRolls()
    handleRoll(numberOfDie, sidedDie)
}