
import React, {useEffect, useState} from 'react';
import Card from './Card';


function PlayGround() {
    const imgs = [
        {src: 'https://angular.io/assets/images/logos/angular/angular.svg', matched: false},
        {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png', matched: false},
        {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png', matched: false },
        {src: "https://erdincuzun.com/wp-content/uploads/svg/nodejs.svg" , matched: false},
        {src: "https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67", matched: false },
        {src: "http://store-images.s-microsoft.com/image/apps.26737.9007199266244427.c75d2ced-a383-40dc-babd-1ad2ceb13c86.ed1d047e-03d9-4cd8-a342-c4ade1e58951", matched: false},
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png", matched: false},
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png", matched: false},
    ]
    const [choice1, setChoice1] = useState();
    const [choice2, setChoice2] = useState();
    const [cards, setCards] = useState([]);
    let shuffledCards = [];
    const shuffleCard = () => {
        shuffledCards = [...imgs, ...imgs].sort(() => Math.random() - 0.5).map(card => ({...card, id: Math.random()}));
        setCards(shuffledCards)
    }   
    const handleChoice = (card) => {
        if(!choice1) {
            setChoice1(card);
        } else if(!choice2) {
            setChoice2(card);
        }
    }
    useEffect(() => {
        shuffleCard();
    }, [])
    useEffect(() => {
        if(choice1 && choice2) {
            if(choice1.src === choice2.src) {
                setCards((prevState) => prevState.map(card => card.src === choice1.src ? {...card, matched: true} : card))
                setChoice1(null);
                setChoice2(null);
            } else {
                setTimeout(() => {
                    setChoice1(null);
                    setChoice2(null);
                }, 1000);
            }
        }
    },[choice1, choice2, cards])    
    console.log(cards)
    console.log(choice1, choice2);
  return (
    <React.Fragment>
    <button className='btn btn-primary d-block mx-auto' onClick={shuffleCard}>Shuffle</button>
     {cards.map(card => <Card card={card} key={card.id} flipped={card === choice1 || card === choice2 || card.matched } handleChoice={handleChoice}/>
         
     )}
    </React.Fragment>
  );
}

export default PlayGround;
