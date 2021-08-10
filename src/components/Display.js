import React from 'react'
import './Display.css'
import {count} from './Calc'
function Display(props) {
    return (
        <div className='Display'>
            <a className="Tip_amount">
                <span className="display_h-1">Tip Amount</span>
                <div className='tip'>{props.tipAmount}</div>
            </a>
            <a className="Total">
                <span>Total Amount</span>
                <div className='tip'> {props.finalAmount} </div>
            </a>
            <a className="SUBMIT" type='number' onClick={props.onSubmit}>SUBMIT</a>
            <a className="RESET" type='number' onClick={props.onReset}>RESET</a>
        </div>
    )
}

export default Display
