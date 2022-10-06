import React from 'react'
import crystal1 from '../Assets/images/crystal1.png'
import crystal2 from '../Assets/images/crystal2.png'
import crystal3 from '../Assets/images/crystal3.png'
import user1 from '../Assets/images/user1.png'
import user2 from '../Assets/images/user2.png'
import user3 from '../Assets/images/user3.png'
import user4 from '../Assets/images/user4.png'
import styled from 'styled-components'



function Featured() {
  return (
    <>
    <Page>
        <Title>
            <h1> Featured Artworks </h1>
        </Title>

        <Artworks>
            <div class='container'>
            <div class='fst-box'>
                <img src={crystal1} />
                <h1>Blue Color Crystals</h1>
                <div class='user'>
                <img src={user1} /><img src={user2} /><img src={user3} /><img src={user4} /><h2>Favorited This</h2>
                </div>
                <div class='time'>
                <h3>Current Bid</h3><h3>Ends 1hr</h3>
                </div>
                <div class='price'>
                <h4>2.65ETH</h4><h4>10H.33M</h4>
                </div>
            </div>
            <div class='sec-box'>
                <img src={crystal2} />
                <h1>Orange Color Crystal</h1>
                <div class='user'>
                <img src={user1} /><img src={user2} /><img src={user3} /><img src={user4} /><h2>Favorited This</h2>
                </div>
                <div class='time'>
                <h3>Current Bid</h3><h3>Ends 1hr</h3>
                </div>
                <div class='price'>
                <h4>2.65ETH</h4><h4>10H.33M</h4>
                </div>
            </div>
            <div class='tri-box'>
                <img src={crystal3} />
                <h1>Green Color Crystal</h1>
                <div class='user'>
                <img src={user1} /><img src={user2} /><img src={user3} /><img src={user4} /><h2>Favorited This</h2>
                </div>
                <div class='time'>
                <h3>Current Bid</h3><h3>Ends 1hr</h3>
                </div>
                <div class='price'>
                <h4>2.65ETH</h4><h4>10H.33M</h4>
                </div>
            </div>
            </div>
        </Artworks>
    </Page>
    </>
  )
}

export default Featured

const Page = styled.div`
    margin-top: 15rem;
`

const Title = styled.div`
    text-align: center;
    margin: 4rem;

    h1 {
        font-size: 2.5rem;
        color: white;
    }
`

const Artworks = styled.div`

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.fst-box {
    background-color: CornflowerBlue;
    border: 2px solid white; 
    transition: 0.5s ease;
    margin-bottom: 2rem;
    border-radius: 1rem;
    padding: 1rem;
}

.fst-box:hover {
    background-color: black;
}

.sec-box {
    background-color: DarkGoldenRod;
    border: 2px solid white; 
    margin-bottom: 2rem;
    transition: 0.5s ease;
    border-radius: 1rem;
    padding: 1rem;
}

.sec-box:hover {
    background-color: black;
}

.tri-box {
    background-color: CadetBlue;
    border: 2px solid white; 
    transition: 0.5s ease;
    margin-bottom: 2rem;
    border-radius: 1rem;
    padding: 1rem;
}

.tri-box:hover {
    background-color: black;
}

img {
    border: 1px solid white; 
    height: 15rem;
    width: 16rem;
}

h1 {
    font-size: 1.1rem;
    width: 15rem;
    color: white;
    margin: 0.5rem;
}

h2 {
    font-size: 0.8rem;
    color: white;    
}

h3 {
    font-size: 0.8rem;
    color: silver;
}

h4 {
    font-size: 0.8rem;
    color: white;
}

.time {
    justify-content: space-between;
    display: flex;
    margin: 0.5rem;
}

.price {
    justify-content: space-between;
    display: flex;
    margin: 0.5rem;
}

.user {
    justify-content: space-between;
    padding: 0.5rem;
    display: fle;
}

.user img {
    border: 1px solid white; 
    border-radius: 3rem;
    height: 2.3rem;
    width: 2.3rem;
    margin: -0.5rem;
    padding: 0.1rem;
`

