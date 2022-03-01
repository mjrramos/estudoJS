const lamp = document.getElementById('lamp');
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const text = document.getElementById('text');
const isLampBroken = () => lamp.src.indexOf('broken') > -1

toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')

    if(toggle.classList.contains('active')){
        lamp.src = '/assets/images/lamp/on.jpg'
        text.textContent = 'ON'
    }
    else{
        lamp.src = '/assets/images/lamp/off_bg.png'
        text.textContent = 'OFF'

    }
}


const lampBroken = () => lamp.src = '/assets/images/lamp/broken_bg.png'

lamp.addEventListener('dblclick', lampBroken )