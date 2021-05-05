import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
    }

    msg=()=>{
        this.setState({
            message:"bye bye"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.msg}>click</button>
            </div>
        )
    }
}
export default Demo;