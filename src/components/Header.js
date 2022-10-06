import React from 'react'
import styled from 'styled-components'
import uppersmoke from '../Assets/images/upper-smoke.png'
import { motion } from 'framer-motion';


function Header() {
  return (
    <>
    <Page>
        <Text>
        <motion.div class="fst-container"
          initial={{ y:10, scale: 0}}
          animate={{ x:0, scale: 1}}
       
       transition={{
        type: 'spring',
        bounce: 0.0,
          duration: 5,
          delay: 0
       }} >

            <h1>Enim qui do est nostrud eiusmod labore adipisicing aute veniam officia pariatur mollit.</h1>
            <hr />
            <h2>Buy NFTS</h2>
            <div class="sec-container">
            <h2>Sell NFTS</h2>
            <hr />
            <h1>Enim qui do est nostrud eiusmod labore adipisicing aute veniam officia pariatur mollit.</h1>
        </div>
        </motion.div>
        </Text>

        <Button>
            <button> Join us </button>
            <button class="dark "> Learn More </button>
        </Button>

        <Image>
            <img src={uppersmoke}></img>
        </Image>
    </Page>
    </>
  )
}

export default Header

const Page = styled.div`
    text-align: center;
    margin-top: 8rem;


.fst-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;

}

.sec-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
}

h1 {
    font-size: 1rem;
    align-items: center;
    color: white;
}

h2 {
    text-transform: uppercase;
    font-size: 3rem;
    color: white;
}

hr {
    background-color: Aquamarine;
    color: Aquamarine;
    margin: 1rem;
    height: 4rem;
}
`

const Text = styled.div`
text-align: center;
padding: 1rem;
max-width: 60rem;
margin: auto;


.fst-container {
    display: flex;
    flex-wrap: wrap-reverse;
}

.sec-container {
    display: flex;
    flex-wrap: wrap;
}

h1 {
font-size: 1rem;
align-items: center;
color: white;
}

h2 {
text-transform: uppercase;
font-size: 3rem;
color: white;
}

hr {
background-color: Aquamarine;
color: Aquamarine;
margin: 1rem;
height: 4rem;
}
`

const Button = styled.div`
    text-align: center;
    padding: 1rem;
    max-width: 60rem;
    margin: auto;


button {
    background-color: Aquamarine;
    text-transform: uppercase;
    border: 2px solid black;  
    border-radius: 1rem;
    transition: .5s ease;
    height: 2rem;
    width: 8rem;
    margin: 1rem;
  }  

  button:hover {
    color: red;
  }

  .dark {
      background-color: transparent;
      border: 2px solid Aquamarine;;  
      color: white;
  }
`

const Image = styled.div`
    margin-top: 6rem;  

  img {
    height: 13vw;
  }
`

