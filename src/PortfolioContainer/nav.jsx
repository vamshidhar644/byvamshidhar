import React from 'react'
import './Styles/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { BiMessageSquareDetail} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
        <a href='#'><AiOutlineHome/></a>
        <a href='#about'><AiOutlineUser/></a>
        <a href='#resume'><BiBook/></a>
        <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default nav
