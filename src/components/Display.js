import React from 'react'
import './Display.css'
import {count} from './Calc'
function Display( { count }) {
    return (
        <div className='Display'>
            <a className="Tip_amount">
                <span className="display_h-1">Tip Amount</span>
                <output className='tip'>000</output>
            </a>
            <a className="Total">
                <span>Total Amount</span>
                <output className='tip'> {count} </output>
            </a>
            <a className="RESET">RESET</a>
        </div>
    )
}

export default Display
