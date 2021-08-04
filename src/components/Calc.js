import React from 'react'
import './Calc.css'
function Calc() {
    return (
        <div className="calc">
            <div className="bill">
                <h1>Bill</h1>
                <input className='bill'/>{/*$       Toltal Amount */}
            </div>
            <div className="Tip-percent">
                <h1>Select Tip</h1>
                <button>5%</button>
                <button className="ten">10%</button>
                <button>25%</button>
                <button>30%</button>
                <button>50%</button>
                <button>Custom</button>
            </div>
            <div className="number-people">
                <h1>No of people</h1>
                <input className='no-people'/>
            </div>
        </div>
    )
}

export default Calc
