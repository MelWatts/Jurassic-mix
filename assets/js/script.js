class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/roar.mp3');
        this.flipSound = new Audio('assets/audio/roar.mp3');
        this.matchSound = new Audio('assets/audio/roar.mp3');
        this.victorySound = new Audio('assets/audio/roar.mp3');
        this.gameOverSound = new Audio('assets/audio/roar.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
            let audioController = new AudioController ();
            audioController.startMusic();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}
})
