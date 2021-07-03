/**
 * GENERAL VARIABLES
 */
 
//card options

const cardArray = [
    {
        name: 'dino-1',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-1',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-2',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-2',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-3',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-3',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-4',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-4',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-5',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-5',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-6',
        img: 'image/dino-1.jpg'
    },
    {
        name: 'dino-6',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-7',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-7',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-8',
        img: 'images/dino-1.jpg'
    },
    {
        name: 'dino-8',
        img: 'images/dino-1.jpg'
    },
]
})

const grid = document.querySelector('.grid')

//create your board

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src' 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener
    }
}