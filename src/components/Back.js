import React from 'react'
import './Back.css'
import Calc from './Calc.js'
import Display from './Display.js'
function Back() {
    return (
        <div className='back'>
            <h1 className='splitter'>SPLITTER</h1>
            <div className='card'>
                <Calc/>
                <Display />
            </div>
        </div>
    )
}

export default Back

