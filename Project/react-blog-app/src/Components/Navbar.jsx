import React from 'react'

const Navbar = () => {
  return (
    <div>
            <p id='headText'><span id='verticalText'>The</span><span id='siren'>SIREN</span></p>
            <div id='NavBar'>
                <div>Home</div>
                <div>Bollywood</div>
                <div>Technology</div>
                <div>Hollywood</div>
                <div>Fitness</div>
                <div>Food</div>
            </div> 
            <hr className='hr'/>
    </div>
  )
}

export default Navbar