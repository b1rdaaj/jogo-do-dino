const dino = document.querySelector('.dino')

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        jump ();
    }
}

function jump() {
    let position = 0;
//subindo
    let upInterval = setInterval(() => {
        position += 20; //mesma coisa que position = posição(0) + 20
        
        dino.style.bottom = position + 'px';
}, 20);
}

document.addEventListener('keyup', handleKeyUp);
