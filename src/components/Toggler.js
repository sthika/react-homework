import React from 'react'
import { useState } from "react";

const Toggler = ({setBtnState, btnState}) => {
    return (
        <div className="toggler">
            <button className={btnState ? '' : 'active'} onClick={(e)=> {
                e.preventDefault()
                setBtnState()
                }}>
                {btnState ? "ON" : "OFF"}
            </button>
        </div>
    )
}

export default Toggler