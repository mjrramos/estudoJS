const lamp = document.getElementById('lamp');
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const text = document.getElementById('text');
const isLampBroken = () => lamp.src.indexOf('broken') > -1
const status = false

toggle.onclick = function(){

    if(!toggle.classList.contains('broken')){ 
        toggle.classList.toggle('active')
        body.classList.toggle('active')
    }

    if(toggle.classList.contains('active')){
        lamp.src = './assets/images/lamp/on.jpg'
        text.textContent = 'ON'
    }
    else{
        if(!toggle.classList.contains('broken'))
        lamp.src = './assets/images/lamp/off_bg.png'
        text.textContent = 'OFF'
    }
}


const lampBroken = () => {
    lamp.src = './assets/images/lamp/broken_bg.png'
    text.textContent = 'OFF'
    toggle.classList.add('broken')
    toggle.classList.remove('active')
    body.classList.remove('active')    
} 

lamp.addEventListener('dblclick', lampBroken )