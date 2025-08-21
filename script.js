const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0; //inicia no 0

function handleKeyUp(event) { 
    if (event.keyCode === 32) {
        if (!isJumping){
            jump ();
        }
    }
} //essa função diz para "pular" quando a tecla 32 (teclado) for pressionado

function jump() {
    isJumping = true;

//subindo
    let upInterval = setInterval(() => {
        if (position >= 300){
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
//aqui vamos criar o cactus para o dino pular
function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random () * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);//ele some dps de usa-lo.
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //game over!
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo! <br> :((((((</h1>';
        } else {
            cactusPosition -= 10; //velocidade que vai para a esquerda 
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime)

}

createCactus();
document.addEventListener('keyup', handleKeyUp); //vai "ouvir" qnd soltar a tecla


