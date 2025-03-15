import React from 'react';
import { useState } from 'react';
import Card from './card'


const Header = ({card, setCard, userInput, setUserInput}) => {

    return (
        <>
            <h1>The Country Quiz!</h1>
            <p>Do you know your countries?</p>
            <div>
                <p>Question <strong>{card}</strong> of <strong>10</strong></p>
                <div>
                <button id="back" onClick={() => {
                    if (card > 0) {
                        setCard(card - 1)
                    }
                    setUserInput('')
                }}
                >{`<-`}
                </button>
                <button id="next" onClick={() => {
                    if (card < 10) {
                        setCard(card + 1)
                    }
                    setUserInput('')
                }}
                >{`->`}
                </button>
                </div>
            </div>
        </>

    )
}



export default Header;