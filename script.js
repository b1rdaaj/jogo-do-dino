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

//https://web.dio.me/lab/recriando-o-famoso-jogo-do-dinossauro-sem-internet/learning/5a924282-1582-42e9-8da0-a0f99b699dcb