// does math random for rolls
const rollMath = (val) => {
    return Math.floor(Math.random() * val) + 1 

}

// handles rolls & outcomes
const handleRoll = () => {
    const dice = Array.from(document.querySelector('.display').children)
    const $total = document.querySelector('.total')
    const $roll = document.querySelector('#roll')
    let total = 0

    $roll.classList.remove('material-symbols-outlined#roll:active')
    $roll.classList.add('material-symbols-outlined#roll:active')
    
    for ( let die of dice ) {
        let dieVal = die.firstChild.dataset.value

        if (dieVal == "percent") return $total.innerText = `${rollMath(100)}%`
        if (dieVal == "coin") return rollMath(2) === 1 ? $total.innerText = 'heads' : $total.innerText = 'tails'

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
    const $diceCount = $display.childElementCount
    const dice = Array.from(document.querySelector('.display').children)
    const $div = document.createElement('div')
    const $node = document.querySelector(`#${id}`).cloneNode()
    $node.classList.remove('filter')
    
    if(dice[0] && (dice[0].firstChild.dataset.value === "20" || dice[0].firstChild.dataset.value === "percent" || dice[0].firstChild.dataset.value === "coin")) return
    if($diceCount >= 6) return
    
    $div.append($node)
    $display.append($div)
}


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

// listens for clicks on static dice, roll, and clear buttons
document.addEventListener('click', (e) => {
    e.preventDefault()
    let ele = e.target
    
    ele.id.includes('dice') && setDice(ele.id)
    ele.id.includes('roll') && handleRoll()
    ele.id.includes('delete') && clearRolls()

})
