document.addEventListener('DOMContentLoaded',() => {
    let cards= [
        {
            name: 'star',
            img: 'imgs/img1.png'
        },
        {
            name: 'batman',
            img: 'imgs/img2.jpg'
        },
        {
            name: 'fox',
            img: 'imgs/img3.png'
        },
        {
            name: 'jello block',
            img: 'imgs/img4.gif'
        },
        {
            name: 'spongebob',
            img: 'imgs/img5.png'
        },
        {
            name: 'casper',
            img: 'imgs/img6.jpg'
        },
        {
            name: 'white sonic',
            img: 'imgs/img7.gif'
        },
        {
            name: 'star',
            img: 'imgs/img1.png'
        },
        {
            name: 'batman',
            img: 'imgs/img2.jpg'
        },
        {
            name: 'fox',
            img: 'imgs/img3.png'
        },
        {
            name: 'jello block',
            img: 'imgs/img4.gif'
        },
        {
            name: 'spongebob',
            img: 'imgs/img5.png'
        }
        


    ]  
    
    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    //create board
    function board(){
        for(let i=0; i< cards.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','imgs/blank.png')
            card.setAttribute('data-id',i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)

        }


    }

//check for matches


//flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cards[cardId].img)

}
board();






    

})