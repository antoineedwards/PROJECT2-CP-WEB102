import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'
import './App.css'

function App() {
  const [sharedCard, setSharedCard] = useState(0);
  const [sharedUserInput, sharedSetUserInput] = useState('');
  

  return (
    <>
      <Header card={sharedCard} setCard={setSharedCard} userInput={sharedUserInput} setUserInput={sharedSetUserInput}/>
      <Footer card={sharedCard} setCard={setSharedCard} userInput={sharedUserInput} setUserInput={sharedSetUserInput}/>
    </>
  )
}

export default App
