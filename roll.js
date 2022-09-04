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

// clears dice imgs and counts
const clearRolls = () => {
    const $display = document.querySelector('.display')
    $display.innerText = ''
}

const setRolls = (numberOfDie, sidedDie) => {
    clearRolls()
    handleRoll(numberOfDie, sidedDie)
}

// creates larger, colored dice to be rolled
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

// listens for clicks on static dice
document.addEventListener('click', (e) => {
    e.preventDefault()
    let ele = e.target
    ele.id.includes('dice') && setDice(ele.id)
})

// sets background image to random on window load
const bgGen = () => {
    const selectBkg = Math.floor(Math.random() * 17) + 1
    const $main = document.querySelector('.main-container')
    const img = `url(assets/d20_bg${selectBkg}.png)`

    $main.setAttribute('style', `background-image: ${img}`)
}

window.onload = () => {
    bgGen()
}