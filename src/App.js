import React from 'react'
import Navbarr from '../src/components/Navbar'
import Header from '../src/components/Header'
import Headline from './components/Headline'
import Featured from './components/Featured'
import Artwork from './components/Artwork'
import Footer from './components/Footer'
import '../src/App.css'


function App() {
  return (
    <>
    <div class="upper-page" >
    <Navbarr />
    <Header />
    </div>
    <div class="bottom-page" >
    <Headline />
    <Featured />
    <Artwork />
    <Footer />
    </div>
    </>
  )
}

export default App
