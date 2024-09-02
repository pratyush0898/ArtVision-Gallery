import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import gallary from './data/gallary.jsx'
import Card from './Components/ArtCard/Card.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
      <div className="gallary">
        {gallary.map((article, index) => (
				// 	<div className="gallary-item" key={index}>
        //     <img src={article.image} alt={article.title} />
        //     <h2>{article.title}</h2>
        //     <p>{article.description}</p>
            
        // </div>
        <Card img={article.image} text={article.title}  key={index} />
				))}

      </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
