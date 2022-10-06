import React from 'react'
import { FcServiceMark } from 'react-icons/fc';
import styled from 'styled-components'



function Navbar() {
  return (
    <>
    <Navbarr>
      <FcServiceMark class='icon' />
      <a><li> Home </li></a>
      <a><li> Artworks </li></a>
      <a><li> About </li></a>
      <a><li> Artists </li></a>
      <button>Log in</button>
    </Navbarr>

    </>
  )
}

export default Navbar


const Navbarr = styled.div`
  padding: 2rem;
  list-style-type: none;
  justify-content: space-between;

  .icon {
    font-size: 3rem;
  }

  text-transform: uppercase;
  text-decoration: none;
  list-style-type: none;
  font-size: 1.2rem;
  display: flex;
  color: plum;

  li {
    transition: 0.5s ease;
    font-size: 1.1rem;
  }

  li:hover {
    letter-spacing: 4px;
    font-size: 1.4rem;
    color: red;
  }

button {
  background-color: Aquamarine;
  text-transform: uppercase;
  border: 2px solid black;
  transition: .5s ease;
  font-size: 0.8rem;
  border-radius: 1rem;
  height: 2rem;
  width: 6rem;
}

button:hover {
  height: 3rem;
  width: 6rem;
  color: red;

`