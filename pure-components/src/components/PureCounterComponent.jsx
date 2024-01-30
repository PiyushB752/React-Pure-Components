import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        count : 0,
        toogleVal: true
      }
    }
    adder =() =>{
        if (this.state.toogleVal){
            this.setState((e)=>{
                return {count: e.count + 1}
            })
        } 
    }
    toogle = () =>{
        this.setState((e)=>{
            return{toogleVal: !e.toogleVal }
        })
    }
  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <h1>Pure Components</h1>
        <b><span>{this.state.count}</span></b><br />
        <button onClick={this.toogle}>Set Toogle</button>
        <button onClick={this.adder}>Counter</button>
      </div>
    )
  }
}
