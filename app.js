//The function executes after the contents of the HTML is loaded or parsed
document.addEventListener('DOMContentLoaded', ()=>{
    //Creating an array that stores objects with name and img attributes
    const cardArray = [
        {
            name:'react',
            img:'images/1.jpg'
        },
        {
            name:'react',
            img:'images/1.jpg'
        },
        {
            name:'vue',
            img:'images/2.png'
        },
        {
            name:'vue',
            img:'images/2.png'
        },
        {
            name:'angular',
            img:'images/3.png'
        },
        {
            name:'angular',
            img:'images/3.png'
        },
        {
            name:'js',
            img:'images/4.png'
        },
        {
            name:'js',
            img:'images/4.png'
        },
        {
            name:'java',
            img:'images/5.png'
        },
        {
            name:'java',
            img:'images/5.png'
        },
        {
            name:'python',
            img:'images/6.png'
        },
        {
            name:'python',
            img:'images/6.png'
        }
    ]

    //Randomizing the position of objects in the cardArray
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    //Creating empty arrays
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.classList.add('card-prop')
            card.setAttribute('src','images/card-back.jpg')
            card.setAttribute('data-id', i)

            //Calling flip card function on click event
            card.addEventListener('click', flipcard) 
            grid.appendChild(card)
        }
    }

    //MEthod for checking card match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/bg.png')
            cards[optionTwoId].setAttribute('src', 'images/bg.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/card-back.jpg')
            cards[optionTwoId].setAttribute('src', 'images/card-back.jpg')
            alert('Sorry try again!')
        }

        //Resetting the arrays to empty value
        cardsChosen = []
        cardsChosenId = []
        // console.log(cardsWon)
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'congrats! you found them all.'
        }
    }

    function flipcard(){
        //'this' refers to the clicked img tag 
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            //setting 0.5s timeout before executing checking function
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})