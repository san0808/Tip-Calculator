import React, { Component,state } from 'react'
import './Back.css'
import Calc from './Calc.js'
import Display from './Display.js'


class Back extends Component {
   
    constructor(props){
        super(props)
        this.state ={
            T: 0,
            F: 0,
            P: 0,
            X: 0,
            t: 0,
            s: 0



        };
        this.tipCalc=this.tipCalc.bind(this);
        this.tipTotal=this.tipTotal.bind(this);
        this.people=this.people.bind(this);
        this.final=this.final.bind(this);
        this.reset=this.reset.bind(this);
        this.tipCustom=this.tipCustom.bind(this);
    }
    tipTotal= (event) =>{
        
        // this.state.T=L
        // this.setState({R: L});
        // alert(`${R}`);
        // 
        this.setState({
            t: event.target.value

        })
        // alert(`${this.t}`)
        // console.log(`${this.state.T}`);
        // event.preventDefault();

    }
    tipCustom = event =>{
        this.setState({
            X: event.target.value})
            let k=(((parseInt(this.state.t))*(parseInt(this.state.X)))/100)
            this.setState({
                s: k})
    }
    tipCalc = L =>{
        //    T=L;
        // TipAmount=(X*T)/100;
        // F=TipAmount+T;    
        // this.state
        // alert(`${this.state.T}`);
        this.setState({
            X: L})
            let k=(((parseInt(this.state.t))*(parseInt(this.state.X)))/100)
            this.setState({
                s: k})
        // this.setState({T: o});

    }
    people= event =>{

        this.setState({
            P: event.target.value
        })
        
    }
    final= event =>{
        // F=t+alert;
        // this.setState({
        //     t: event.target.t})
        // this.setState({F: event.target.F});
        
        this.setState({
            F: ((parseInt(this.state.t) +parseInt(this.state.s))*(parseInt(this.state.P))),
            T: parseInt(this.state.s)
        })
        // *(this.state.P)
       event.preventDefault()
    }
    reset(){
        window.location.reload(false);
       
    }
    render() {
        return (
        
            <div className='back'>
                <h1 className='splitter'>Sanket's Calculator</h1>
                <div className='card'>
                    <Calc bill={this.tipTotal} tipMan={this.tipCalc} tipcustom={this.tipCustom} noPeople={this.people} />
                    <Display tipAmount={this.state.T} finalAmount={this.state.F} onSubmit={this.final} onReset={this.reset}/>
                </div>
            </div>
            
        )
    }
}

export default Back


