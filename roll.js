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

const setDice = (id) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')
    const $id = document.querySelector(`#${id}`)
    const $node = $id.cloneNode()

    $node.classList.remove('filter')

    if($display.childElementCount >= 6) return

    $div.append($node)
    $display.append($div)
    
}

document.addEventListener('click', (e) => {
    e.preventDefault()
    let ele = e.target
    ele.id.includes('dice') && setDice(ele.id)
})