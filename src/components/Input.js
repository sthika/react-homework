import React from 'react'
import {useState} from "react";

const Input = () => {
    const [desc, setDesc] = useState("")

    const changeDesc = (e) => {
        setDesc(e.target.value)
    }
  return (
    <div className="input">
            <input type="text" onChange={changeDesc} placeholder='Писать тут'/>
            {
              desc.length ? <p>Вы ввели:{desc}</p> : null
            }
    </div>
    
  )
}

export default Input