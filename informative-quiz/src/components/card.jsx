import React, { useState } from 'react';
import CardInfo from './cardInfo'


const Card = ({ curr }) => {
    const [isFront, setIsFront] = useState(true)
    const handleClick = () => {
        setIsFront(!isFront)
    }
    return (
        <div id='card-container' onClick={handleClick}
            style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'white',
                minWidth: "500px",
                height: "300px",
                padding: "10px",
                borderRadius: "10px"
            }}>
            <h4>{curr.difficulty }</h4>
            <h3>{isFront ? curr.front : curr.back}
            </h3>
            <img src={curr.img} width='100px'/>
        </div>
    )
}
export default Card;