const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(event) { 
    if (event.keyCode === 32) {
        if (!isJumping){
            jump ();
        }
    }
} //essa função diz para "pular" quando a tecla 32 (teclado) for pressionado

function jump() {
    let position = 0; //inicia no 0
    isJumping = true;

//subindo
    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
//descendo
        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval); //quando a posiçao for igual menor que 0, ela para de fazer a "queda"
                isJumping = false;
            } else {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        }, 20);
        } else {
        position += 20; 
        dino.style.bottom = position + 'px';
        }
}, 20);//tempo em milisegundos que ele sobe
}

function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10; //velocidade que vai para a esquerda 
        cactus.style.left = cactusPosition + 'px';
    })

}

createCactus();
document.addEventListener('keyup', handleKeyUp); //vai "ouvir" qnd soltar a tecla


