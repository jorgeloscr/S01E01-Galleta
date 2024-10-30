
import { useState } from 'react'
import './App.css'
import phrases from './phrases.json'
import { fondo1,fondo2,fondo3,fondo4 } from './assets/images'

let images=[fondo1,fondo2,fondo3,fondo4]
function randomPhrase(max){
  return Math.floor(Math.random()*max)
}

function App() {
  const [phrase, setPhrase]=useState(phrases[randomPhrase(phrases.length)])
  const [bgImg, setBgImg]= useState(images[randomPhrase(images.length)])

  function loadNewPhrase(){
    setPhrase(phrases[randomPhrase(phrases.length)])
    setBgImg(images[randomPhrase(images.length)])
  }

  
  return (
    <div className='wrapper' style={{backgroundImage: `url(${bgImg})`}}>
    <div className="container">
      <h1 className='heading'>Galletas de la <br/>fortuna</h1>


    <div className="card">
      <div className="card__body">
      <q>{phrase.phrase}</q>
      <cite>- {phrase.author}</cite>
      </div>
      </div>
      <button onClick={loadNewPhrase} className='btn'>Ver Otro</button>
    </div>
    </div>
    
   
    // {/* <pre>
    //   {JSON.stringify(phrases, null, 2)}
    // </pre> */}

    
  )
}

export default App
