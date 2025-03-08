import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'
import './App.css'

function App() {
  const [sharedCard, setSharedCard] = useState(0);

  return (
    <>
      <Header card={sharedCard} setCard={setSharedCard}/>
      <Footer card={sharedCard} setCard={setSharedCard}/>
    </>
  )
}

export default App
