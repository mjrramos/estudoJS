const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAuto()
    turnOn[event.target.id]()
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {

    const colors = ['red', 'green', 'yellow']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex()
}

const turnOn = {
    'red': () => img.src = './assets/vermelho.png',
    'green': () => img.src = './assets/verde.png',
    'yellow': () => img.src = './assets/amarelo.png',
    'automatic': () => intervalId = setInterval(changeColor, 1200)
}

const stopAuto = () => {
    clearInterval(intervalId)
}

buttons.addEventListener('click', trafficLight)