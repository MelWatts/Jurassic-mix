document.addEventListener('DOMContentLoaded', () => {
 
    //card options
    const cardArray = [
        {
            name: 'dino-1',
            img: 'assets/images/dino-1.jpg'
        },
        {
            name: 'dino-1',
            img: 'assets/images/dino-1.jpg'
        },
        {
            name: 'dino-2',
            img: 'assets/images/dino-2.jpg'
        },
        {
            name: 'dino-2',
            img: 'assets/images/dino-2.jpg'
        },
        {
            name: 'dino-3',
            img: 'assets/images/dino-3.jpg'
        },
        {
            name: 'dino-3',
            img: 'assets/images/dino-3.jpg'
        },
        {
            name: 'dino-4',
            img: 'assets/images/dino-4.jpg'
        },
        {
            name: 'dino-4',
            img: 'assets/images/dino-4.jpg'
        },
        {
            name: 'dino-5',
            img: 'assets/images/dino-5.jpg'
        },
        {
            name: 'dino-5',
            img: 'images/dino-5.jpg'
        },
        {
            name: 'dino-6',
            img: 'assets/images/dino-6.jpg'
        },
        {
            name: 'dino-6',
            img: 'assets/images/dino-6.jpg'
        },
        {
            name: 'dino-7',
            img: 'assets/images/dino-7.jpg'
        },
        {
            name: 'dino-7',
            img: 'assets/images/dino-7.jpg'
        },
        {
            name: 'dino-8',
            img: 'assets/images/dino-8.jpg'
        },
        {
            name: 'dino-8',
            img: 'assets/images/dino-8.jpg'
        },
    ]
    
    cardArray.sort(() => 0.5 - Math.random())
    
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //create my board
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/orange.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    
    
    //check for matches
    function checkForMatch() {
        var cards = documnt.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images/white.jpg')
            cardsWon.push(cardsChosen)
        }   else {
            cards[optionOneId].setAttribute('src', 'assets/images/orange.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images/orange.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Well done, all safe and sound!'
        }
    }
    
    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    
    createBoard()
    
    })