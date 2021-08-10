import React from 'react'
// import './Calc.css'
import './Calc2.css'
function Calc(props) {
    let L=0;
    
    return (
        
        <div className="calc">
            <div className="bill">
                <h1 className="bill_h1">Bill</h1>
                <input className='bill_total'  type='number' placeholder="0" value={props.T} onChange={props.bill} />
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
                <a className='Button' onClick={() => props.tipMan(5)}>5%</a>
                <a className='Button'onClick={() => props.tipMan(20)}>20%</a>
                <a className='Button' onClick={() => props.tipMan(35)}>35%</a>
                <a className='Button'onClick={() => props.tipMan(40)}>40%</a>
                <a className='Button' onClick={() => props.tipMan(50)}>50%</a>
                <input className='Button' type='number'placeholder="Custom" value={props.X} onChange={props.tipcustom}></input>
                </div>
                
            </div>
            <div className="number-people">
                <h1>No of people</h1>
                <input className='no-people' type='number' placeholder="00" value={props.P} onChange={props.noPeople}/>
            </div>
        </div>
    )
}


export default Calc 

