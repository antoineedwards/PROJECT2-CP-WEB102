import React, { useState } from 'react';

const Card = ({ curr, userInput, setUserInput, card, setCard }) => {
    const [isFront, setIsFront] = useState(true);
    const [cardColor, setCardColor] = useState('white');
    const [streak, setStreak] = useState(0);

    const shuffleCard = () =>{
        let newCard = Math.floor(Math.random()*11)
        setCard(newCard)
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim().toLowerCase() === curr.back.trim().toLowerCase()) {
            setCardColor('lightgreen');
            setTimeout(() => setCardColor('white'), 1000);
            setStreak(streak + 1)
        }
        else {
            setCardColor('red');
            setTimeout(() => setCardColor('white'), 1000);
            alert(`Incorrect! The correct answer is ${curr.back}`);
            setStreak(0)
        }
    };

    const handleClick = () => {
        setIsFront(!isFront);
    };

    return (
        <>
        <h5>Streak:{streak}</h5>
            <div 
                id="card-container" 
                onClick={handleClick}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: cardColor,
                    minWidth: "500px",
                    height: "300px",
                    padding: "10px",
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease"
                }}
            >
                <h4>{curr.difficulty}</h4>
                <h3>{isFront ? curr.front : curr.back}</h3>
                {curr.img ? <img src={curr.img} width='100px' alt="Card visual"/> : null}
            </div>
            <div id="answer-box">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            value={userInput} 
                            onChange={handleUserInput}
                        />
                    </label>
                    <button type="submit">Submit Guess</button>
                </form>
                <button onClick={shuffleCard}>Shuffle</button>
            </div>
        </>
    );
};

export default Card;
