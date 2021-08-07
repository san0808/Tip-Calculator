import React, { useState } from 'react'
// import './Calc.css'
import './Calc2.css'
function Calc() {
    const [count, setCount] = useState(0);

    return (
        
        <div className="calc">
            <div className="bill">
                <h1 className="bill_h1">Bill</h1>
                <input className='bill_total'   placeholder="0" ></input>
            </div>
            <div className="Tip-percent">
                <h1>Select Tip</h1>
                {/* <button>5%</button>
                <button className="ten">10%</button>
                <button>25%</button>
                <button>30%</button>
                <button>50%</button>
                <button>Custom</button> */}
                <div className="button">
                <a className='Button' onClick={() => setCount(count + 1)}>5%</a>
                <a className='Button'>20%</a>
                <a className='Button'>35%</a>
                <a className='Button'>40%</a>
                <a className='Button'>50%</a>
                <input className='Button' placeholder="Custom"></input>
                </div>
                
            </div>
            <div className="number-people">
                <h1>No of people</h1>
                <input className='no-people' type='number' placeholder="00"/>
            </div>
        </div>
    )
}

export default Calc
