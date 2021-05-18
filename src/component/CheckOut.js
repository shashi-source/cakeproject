import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {toast} from 'react-toastify'

 class CheckOut extends Component {
     constructor(props) {
         super(props)
         this.state={
            
         }
     }
     total=0
     cakes=[]
    componentDidMount() {
        // console.log(this.props.order_place)
        this.props.order_place.data.map((each)=>{
            // console.log(each)
             this.cakes.push(each.name);
            this.total=this.total+each.price;
        });
        console.log(this.cakes)
        console.log(this.total);  
        this.placeOrder.price=this.total
        this.placeOrder.cakes=this.cakes
    }
    placeOrder={}

     userName=(event)=>{
        this.placeOrder.name=event.target.value
     }   
     address=(event)=>{
        this.placeOrder.address=event.target.value
     }
     city=(event)=>{
         this.placeOrder.city=event.target.value
     }
     pin=(event)=>{
         this.placeOrder.pincode=event.target.value
     }
     phone=(event)=>{
        this.placeOrder.phone=event.target.value
    }
    
    orderPlace=(event)=>{
        event.preventDefault()
        // console.log(this.placeOrder);     
        let apiurl="https://apifromashu.herokuapp.com/api/addcakeorder"
        axios({
            method:"post",
            url:apiurl,
            data:this.placeOrder,
            headers:{"authtoken":localStorage.tokenId}
        }).then((res)=>{
            toast.success(res.data.messageg,{autoClose:2000})
            this.props.dispatch({
                type:"PLACED_ORDERS",
                payload:res.data
            })
        },(err)=>{console.log(err)})
    }
    
    render(){
        return (
            <div style={{margin:"-30px"}}>
            <div style={{backgroundColor:"lightgray",position:"fixed",left:"0px",right:"0px"}}>
            <div style={{width:"400px" ,margin:"100px 450px"}}>
                <form >
                    <h1 style={{color:"red"}}>Order Details</h1>
                <div className="form-group">
                    <label for="exampleInputId"> Name</label>
                    <input type="text" onChange={this.userName.bind(this)}  className="form-control" id="exampleInputId" aria-describedby="IdHelp" ></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputName"> Address</label>
                    <input type="text" onChange={this.address.bind(this)} className="form-control" id="exampleInputName"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputName">City</label>
                    <input type="text" onChange={this.city.bind(this)} className="form-control" id="exampleInputName"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputName">pin code</label>
                    <input type="number" onChange={this.pin.bind(this)} className="form-control" id="exampleInputName"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputName">phone No</label>
                    <input type="number" onChange={this.phone.bind(this)} className="form-control" id="exampleInputName"></input>
                </div>
                
                <div className="form-group">
                    <label for="exampleInputName">Cakes</label>
                    <input type="text" className="form-control" id="exampleInputName">
                    </input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPrice">price</label>
                    <input type="Number" className="form-control" id="exampleInputPrice" ></input>
                </div>
                <button type="submit" className="btn btn-success" onClick={this.orderPlace.bind(this)}>Order Place</button>
                </form>
            </div>
            </div>
            
        </div>
        )
    }
}
export default connect((state,props)=>{
// console.log(state);
return{
    order_place:state["order_place"]
}
})(CheckOut)