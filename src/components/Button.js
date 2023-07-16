import React from 'react'
import {useState } from "react";

const Button = () => {

    const [text, setText] = useState("Нажми на меня")

    const replaceText = () => {
        setText("Clicked")
    }
  return (
    <button className='main__btn' onClick={replaceText}>
        {text}
    </button>
  )
}

export default Button