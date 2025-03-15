import React from 'react';
import Card from './card'
import CARDINFO from './cardInfo';

const Footer = ({card, setCard, userInput, setUserInput})=>{
    const cards = JSON.parse(CARDINFO)
    let curr = cards[card]
    return(
        <div>
            <Card curr={curr} userInput={userInput} setUserInput={setUserInput} card={card} setCard={setCard}/>
        </div>
    )
}
export default Footer;