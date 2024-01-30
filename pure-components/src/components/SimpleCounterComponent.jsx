import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          count : 0,
          toogleVal: false
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
    console.log("This is Simple Component")
    return (
        <div>
        <h1>Simple Components</h1>
        <b><span>{this.state.count}</span></b><br />
        <button onClick={this.toogle}>Set Toogle</button>
        <button onClick={this.adder}>Counter</button>
      </div>
    )
  }
}
