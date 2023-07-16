import React, { useEffect } from 'react'
import {useState} from "react";

const Counter = ({handleCounterChange, counter}) => {
    const [count, setCount] = useState(counter)
    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }
    
    useEffect(() => {
      handleCounterChange(count)
    }, [count])
  return (
    <div className="main__counter">
        <button className='inc' onClick={increase}>+</button>
        <p>{counter}</p>
        <button className='dec' onClick={decrease}>-</button>
    </div>
  )
}

export default Counter