import React from 'react'
import styled from 'styled-components'
import grid from '../Assets/images/grid.gif'
import user1 from '../Assets/images/user1.png'
import user2 from '../Assets/images/user2.png'
import user3 from '../Assets/images/user3.png'
import user4 from '../Assets/images/user4.png'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';



function Artwork() {
  return (
    <>
    <Page>
        <Gif>
        <img src={grid} />
        </Gif>
        <Text>
            <div class="container">
            <h1> Explore our top works </h1>
            <p>Incididunt Lorem magna nostrud esse adipisicing reprehenderit pariatur tempor esse.Aute sit laboris tempor cillum et minim eu minim do.</p>
            <div class="user">
            <h2>Artworks</h2><h2>users</h2>
            </div>
            <div class="num">
            <h3>1305K</h3><h3>505K</h3>
            </div>
            <div class="text">
            <h4>Very popular NFT's</h4><h4>Buy One Today!</h4>
            </div>
            </div>
        </Text>
        <Artist>
            <Title>
                <h1>Our Top Artists</h1>
                <p>Duis aliquip pariatur ex cupidatat ad laborum magna ut eiusmod est.Amet cupidatat consectetur occaecat enim deserunt amet dolor incididunt anim occaecat sit. Occaecat ullamco magna nulla eu labore veniam ullamco non nostrud amet proident Lorem qui occaecat. Voluptate occaecat et ut tempor ut quis excepteur incididunt qui ut.</p>
            </Title>
            <Profiles>
                <div class='container'>
                <div class='fst-box'>
                <img src={user1} />
                <h1> Unknown  Name </h1>
                <p><AiFillStar class="icons" /><AiFillStar class="icons" /><FaStarHalfAlt class="icons" /><AiOutlineStar  class="icons" /><AiOutlineStar  class="icons" /></p> 
                <h2>Animator</h2>
                <button>Follow</button>
                </div>
                <div class='sec-box'>
                <img src={user2} />
                <h1> Unknown  Name </h1>
                <p><AiFillStar class="icons" /><AiFillStar class="icons" /><AiFillStar class="icons" /><AiFillStar class="icons" /><FaStarHalfAlt class="icons" /></p> 
                <h2>Web Designer</h2>
                <button>Follow</button>
                </div>
                <div class='tri-box'>
                <img src={user3} />
                <h1> Unknown  Name </h1>
                <p><AiFillStar class="icons" /><AiFillStar class="icons" /><FaStarHalfAlt class="icons" /><AiOutlineStar  class="icons" /><AiOutlineStar  class="icons" /></p> 
                <h2>Game Developer</h2>
                <button>Follow</button>
                </div>
                <div class='for-box'>
                <img src={user4} />
                <h1> Unknown  Name </h1>
                <p><AiFillStar class="icons" /><AiFillStar class="icons" /><AiFillStar class="icons" /><AiFillStar class="icons" /><AiOutlineStar class="icons" /></p> 
                <h2>Graphic Artist</h2>
                <button>Follow</button>
                </div>
                </div>
            </Profiles>
        </Artist>
    </Page>
    </>
  )
}

export default Artwork

const Page = styled.div`
    margin-top: 10rem;
`

const Gif = styled.div`
    text-align: center;

    img {
        width: 100vw;
        height: 15vw;
    }
`

const Text = styled.div`
    box-shadow: 0px 0px 10px white;
    background-color: grey;
    transition: 0.3s ease;
    border-radius: 1rem;
    text-align: center;
    max-width: 60rem;
    padding: 1rem;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 10rem;

    &:hover {
        background-color: black;
    }

    .user {
        justify-content: space-between;
        display: flex;
    }

    .num {
        justify-content: space-between;
        display: flex;
    }

    .text {
        justify-content: space-between;
        display: flex;
    }

    h1 {
        text-decoration: underline Aquamarine;
        text-align: center;
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
    }

    h2 {
        text-decoration: underline Aquamarine;
        text-align: center;
        font-size: 2.5rem;
        color: white;
        margin-bottom: 1rem;
    }

    h3 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: white;
    }

    h4 {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1rem;
        color: silver;
    }

    p {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.2rem;
        color: silver;
    }
`

const Artist = styled.div`
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
`

const Title = styled.div`
    text-align: center;
    padding: 1rem;
    max-width: 60rem;
    margin: auto;

    h1 {
        text-decoration: underline Aquamarine;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 3rem;
        color: white;
    }

    p {
        font-size: 1rem;
        color: white;
    }
`
const Profiles = styled.div`

.container {
    justify-content: space-around;
    margin-bottom: 15rem;
    flex-wrap: wrap;
    display: flex;
}

.fst-box {
    background-color: DarkRed;
    border: 2px solid Red;  
    border-radius: 1rem;
    text-align: center;
    width: 17rem;
    margin: 1rem;

}

.sec-box {
    background-color: DarkSlateBlue;
    border: 2px solid Purple;  
    border-radius: 1rem;
    text-align: center;
    width: 17rem;
    margin: 1rem;
}

.tri-box {
    background-color: CornflowerBlue;
    border: 2px solid Blue;  
    border-radius: 1rem;
    text-align: center;
    width: 17rem;
    margin: 1rem;
}

.for-box {
    background-color: CadetBlue;
    border: 2px solid Green;  
    border-radius: 1rem;
    text-align: center;
    width: 17rem;
    margin: 1rem;
}

img {
    border-radius: 1rem;
    width: 16.9rem;
}

h1 {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem;
    color: white;
}

h2 {
    text-align: center;
    font-size: 1.2rem;
    margin: 1rem;
    color: white;
}

p {
    text-align: center;
    margin: 1rem;
    color: Gold;
}

button {
    background-color: transparent;
    border: 2px solid white;  
    transition: 0.5s ease;
    width: 8rem;
    height: 2rem;
    color: white;
    margin: 1rem;
}

button:hover {
    background-color: white;
    border: 2px solid: white;  
    letter-spacing: 2px;
    color: black;
}
`


