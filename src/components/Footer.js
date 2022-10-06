import React from 'react'
import styled from 'styled-components'




function Footer() {
  return (
    <>
        <Banner>
            <div class='footer-container'>
            <h1>Get a Free Trail</h1>
            <p>Exercitation cupidatat proident commodo voluptate culpa non aute labore quis velit officia laborum deserunt. Nulla qui ut id ut anim reprehenderit.</p>
            <button>Join us now</button>
            </div>
        </Banner>

    <Footerr>
        <Leftbox>
        <div class='left-container'>
            <h1>Degital Agency</h1>
            <p>Minim excepteur aliqua ex Lorem laborum aliquip.</p>
            <hr />
            <h2>Get Our Latest Updates</h2>
            <form><label>Enter Your Email</label><button>SEND</button></form>
        </div>
        </Leftbox>
        <Rightbox>
        <div class='container'>
        <div class='fst-box'>
        <h1>Quick Links</h1>
        <p>Protool Expore</p>
        <p>System Token</p>
        <p>Optimize</p>
        <p>Visual Checking</p>
        <p>Acttivity Log</p>
        <p>System Auto Since</p>
        </div>

        <div class='sec-box'>
        <h1>Information</h1>
        <p>Marker Explore</p>
        <p>Ready Taken</p>
        <p>Man Option</p>
        <p>File Checking</p>
        <p>Blog Grid</p>
        <p>Fix Big</p>
        </div>

        <div class='tri-box'>
        <h1>Company</h1>
        <p>Upload Files</p>
        <p>Marketplace</p>
        <p>Items Details</p>
        <p>Recent Activity</p>
        <p>Conditions</p>
        <p>Privacy Policy</p>
        </div>

        <div class='for-box'>
        <h1>Social Media</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Linkedin</p>
        <p>Whatsapp</p>
        <p>Twitter</p>
        <p>Telegram</p>
        </div>
        </div>
        </Rightbox>
    </Footerr>
    </>
  )
}

export default Footer

const Banner = styled.div`

.footer-container {
    text-align: center;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    color: white;
}

p {
    text-align: center;
    font-size: 1rem;
    margin: 1rem;
    color: white;
}

button {
        background-color: Aquamarine;
        border: 2px solid Aquamarine;  
        transition: 0.5s ease;
        width: 8rem;
        height: 2rem;
        color: black;
        margin: 1rem;
    }
    
button:hover {
        background-color: transparent;
        border: 2px solid: white;  
        letter-spacing: 2px;
        color: white;
    }
`

const Footerr = styled.div`
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    padding: 1rem;
`

const Leftbox = styled.div`
    width: 25rem;

h1 {
    font-size: 2.5rem;
    color: white;
    margin: 1rem;
}

p {
    font-size: 1rem;
    color: white;
    margin: 1rem;
}

h2 {
    font-size: 1.4rem;
    color: white;
    margin: 1rem;
}

hr {
    width: 23rem;
    color: silver;
    margin: 1rem;
    margin-bottom: 2rem;
}

form {
    display: flex;
    margin: 1rem;
}

label {
    background-color: Silver;
    justify-content: center;
    border-radius: 0.5rem;  
    margin-right: 0.3rem;
    align-items: center;
    padding: 0.5rem;
    display: flex;
    width: 11rem;
    height: 2rem;
    color: white;
}

label:hover {
    background-color: Silver;
    color: black;
}


    button {
        background-color: Aquamarine;
        border: 2px solid Aquamarine;
        border-radius: 0.5rem;  
        transition: 0.5s ease;
        width: 5rem;
        height: 2rem;
        color: black;
    }
    
button:hover {
        background-color: transparent;
        border: 2px solid: white;  
        letter-spacing: 2px;
        color: white;
}
`


const Rightbox = styled.div`
    width: 50rem;
    margin: 1rem;
    padding: 1.2rem;


.container { 
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
} 

.fst-box {
    margin-bottom: 1rem;
}

.sec-box {
    margin-bottom: 1rem;
}

.tri-box {
    margin-bottom: 1rem;
}

.for-box {
    margin-bottom: 1rem;
}

    h1 {
        margin-bottom: 1rem;
        color: white;
    }

    p {
        transition: 0.5s ease;
        color: silver
    }

    p:hover {
        color: red;
        letter-spacing: 4px;
    }
`




