// const handleRoll = (numberOfDie, sidedDie) => {
//     const $display = document.querySelector('.display')
//     const $div = document.createElement('div')

//     const rolledA = Math.floor(Math.random() * sidedDie) + 1
//     $div.innerText = `d${sidedDie} - ${rolledA}`
//     $display.append($div)

//     if (numberOfDie > 1) {
//         numberOfDie--
//         handleRoll(numberOfDie, sidedDie)
//     }

//     sidedDie == 20 && rolledA == 1 && $div.append('CRITICAL FAILURE')
//     rolledA == 20 && $div.append('NAT 20!!')

// }

const handleRoll = () => {
    const $display = document.querySelector('.display')
    const $total = document.querySelector('.total')
    const dice = $display.children
    let total = 0

    for ( let die of dice ) {
        const dieVal = die.firstChild.dataset.value
        const rolledA = Math.floor(Math.random() * dieVal) + 1
        
        die.append(rolledA)
        total += rolledA
    }
    $total.innerText = total
}

// clears dice imgs and counts
const clearRolls = () => {
    const $display = document.querySelector('.display')
    $display.innerText = ''
}

// creates larger, colored dice to be rolled
const setDice = (id) => {
    const $display = document.querySelector('.display')
    const $div = document.createElement('div')
    const $div2 = document.createElement('div')
    const $id = document.querySelector(`#${id}`)
    const $node = $id.cloneNode()

    $node.classList.remove('filter')
    $div2.classList.add('rollVal')
    $div2.setAttribute('background-color', 'black')
    $div2.setAttribute('text-align', 'center')

    if($display.childElementCount >= 6) return

    $div.append($node, $div2)
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