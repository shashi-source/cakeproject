import React, { Component } from 'react'

 class CheckOut extends Component {
     constructor() {
         super()
         this.state={

         }
     }
    componentDidMount() {
        console.log(this.props.product)
    }
    
     
    render(){
        return (
            <div>
                <button className="btn btn-outline-primary"  style={{top:"6em",marginLeft:"900px"}}>CheckOut</button> 
            </div>
        )
    }
}
export default CheckOut