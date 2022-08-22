const handleRoll = (die) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')

    $div.innerText = `d${die} - ${Math.floor(Math.random() * die) + 1}`
    $display.append($div)
    console.log(`${$div.textContent}`)
}

const clearRolls = () => {
    const $display = document.querySelector('.display')
    $display.innerText = ''
    window.console.clear()
}