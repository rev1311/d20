// does math random for rolls
const rollMath = (val) => {
    return Math.floor(Math.random() * val) + 1 

}

// handles rolls & outcomes
const handleRoll = () => {
    const dice = document.querySelector('.display').children
    const $total = document.querySelector('.total')
    let total = 0
    
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
    const $div = document.createElement('div')
    const $node = document.querySelector(`#${id}`).cloneNode()
    const $dataset = $node.dataset.value
    const $dataId = $node.closest('div').id

    $node.classList.remove('filter')

    console.log($dataId)
    console.log($display.firstElementChild)

    if(($dataset == 'percent' || $dataset == 'coin' || $dataset == 20 ) && $diceCount >= 1 ) return
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

// listens for clicks on static dice & roll button
document.addEventListener('click', (e) => {
    e.preventDefault()
    let ele = e.target
    
    ele.id.includes('dice') && setDice(ele.id)

})

// listens for clicks on static dice & roll button
document.addEventListener('click', (e) => {
    e.preventDefault()
    let ele = e.target
    
    ele.id.includes('delete') && clearRolls()

})