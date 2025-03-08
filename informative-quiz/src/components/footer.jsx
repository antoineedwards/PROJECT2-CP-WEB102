import React from 'react';
import Card from './card'
import CARDINFO from './cardInfo';

const Footer = ({card, setCard})=>{
    const cards = JSON.parse(CARDINFO)
    let curr = cards[card]
    return(
        <div>
            <Card curr={curr}/>
        </div>
    )
}
export default Footer;