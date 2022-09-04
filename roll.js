const rollMath = (val) => {
    return Math.floor(Math.random() * val) + 1
}

const handleRoll = () => {
    const dice = document.querySelector('.display').children
    const $total = document.querySelector('.total')
    let total = 0
    
    for ( let die of dice ) {
        let dieVal = die.firstChild.dataset.value

        if (dieVal == "percent") return $total.innerText = `${rollMath(100)}%`
        if (dieVal == "coin") {
            if( rollMath(2) == 1 ) return $total.innerText = 'heads'
            if( rollMath(2) == 2 ) return $total.innerText = 'tails'
        }
        total += rollMath(dieVal)
        $total.innerText = total
        
    }
}

// clears dice imgs and counts
const clearRolls = () => {
    const $display = document.querySelector('.display')
    const $total = document.querySelector('.total')

    $display.innerText = ''
    $total.innerText = ''
}

// creates larger, colored dice to be rolled
const setDice = (id) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')
    const $div2 = document.createElement('div')
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
    ele.id.includes('roll') && handleRoll()

})

// sets background image to random on window load
const bgGen = () => {
    const $main = document.querySelector('.main-container')
    const selectBkg = Math.floor(Math.random() * 17) + 1
    const img = `url(assets/d20_bg${selectBkg}.png)`

    $main.setAttribute('style', `background-image: ${img}`)
}

window.onload = () => {
    bgGen()
}