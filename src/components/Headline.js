import React from 'react'
import styled from 'styled-components'
import bottomsmoke from '../Assets/images/bottom-smoke.png'
import camera from '../Assets/images/camera.png'
import gift from '../Assets/images/gift.png'
import wallet from '../Assets/images/wallet.png'



function headline() {
  return (
      <>
    <Page>
        <Image>
            <img src={bottomsmoke} />
        </Image>

        <Text>
            <div class="fst-container">
            <h1>What we actually do?</h1>
            <hr />
            </div>
            <div class="sec-container">
            <h2>Laborum eu consequat ullamco elit laborum esse cillum veniam eu. Elit adipisicing et id proident ad aliquip enim adipisicing dolore qui quis commodo esse cillum.</h2>
            </div>
        </Text>

        <Service>
            <div class="container">
            <div class="fst-box">
            <img src={wallet} />
            <h1>Set up your wallet</h1>
            <p>Nostrud minim nostrud quis laborum non excepteur eu et esse cupidatat.</p>
            </div>
            <div class="sec-box">
            <img src={camera} />
            <h1>Create your collection</h1>
            <p>Nostrud minim nostrud quis laborum non excepteur eu et esse cupidatat.</p>
            </div>
            <div class="tri-box">
            <img src={gift} />
            <h1>Add your NFTS</h1>
            <p>Nostrud minim nostrud quis laborum non excepteur eu et esse cupidatat.</p>
            </div>
            </div>
        </Service>
    </Page>
    </>
  )
}

export default headline

const Page = styled.div`
    text-align: center;
`

const Image = styled.div`
    margin: auto;
    margin-bottom: 10rem;

  img {
    height: 13vw;
  }
`

const Text = styled.div`
    margin-top: 10rem;
    max-width: 70rem;
    flex-wrap: wrap;
    display: flex;
    padding: 1rem;
    margin: auto;

  .fst-container {
      display: grid;
  }

  .sec-container { 
      margin: auto;
}

  h1 {
      text-transform: uppercase; 
      font-size: 2.6rem;
      padding: 1rem;
      color: white;
  }

  h2 {
    max-width: 30rem;
    font-size: 1rem;
    padding: 1rem;
    color: white;
}

hr {
    background-color: Aquamarine;
    color: Aquamarine;
    height: 0.1rem;
    width: 34rem;
}
`

const Service = styled.div`

    .container {
        justify-content: space-around;
        margin-top: 5rem;
        flex-wrap: wrap;
        display: flex;
        }

    .fst-box {
        background-color: LightSlateGrey;
        border-radius: 1rem;
        transition: 0.5s ease;
        padding: 1rem;
        width: 23rem;
        height: 14rem;
        margin: 1rem;
    }

    .fst-box:hover {
        background-color: black;
        box-shadow: 0px 0px 10px white;
    }

    .sec-box {
        background-color: LightSlateGrey;
        transition: 0.5s ease;
        border-radius: 1rem;
        padding: 1rem;
        width: 23rem;
        height: 14rem;
        margin: 1rem;
    }

    .sec-box:hover {
        background-color: black;
        box-shadow: 0px 0px 10px white;
    }

    .tri-box {
        background-color: LightSlateGrey;
        transition: 0.5s ease;
        border-radius: 1rem;
        padding: 1rem;
        width: 23rem;
        height: 14rem;
        margin: 1rem;
    }

    .tri-box:hover {
        background-color: black;
        box-shadow: 0px 0px 10px white;
    }

    h1 {
        color: white;
        margin-bottom: 2rem;
        margin-top 3rem;

    }

    p {
        margin: -0.3rem ;
        color: MintCream;
    }

    img {
        background-color: LightSlateGrey;
        border: 2px solid black;  
        border-radius: 3rem;
        padding: 1rem;
        margin: -2rem ;
        height: 6rem;
        width: 6rem;

    }
`

