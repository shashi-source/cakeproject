import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'

class OrderList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderCakeList:[]             
        }
    }
    componentDidMount() {
        // console.log(this.props)
        // https://apifromashu.herokuapp.com/api/addcake,post,object
        let apiurl="https://apifromashu.herokuapp.com/api/cakeorders"
        axios({
            method:"post",
            url:apiurl,
            headers:{"authtoken":localStorage.tokenId}
        }).then((res)=>{
            // console.log("response",res.data.cakeorders);
            this.setState({
                orderCakeList:res.data.cakeorders
            });
        },(err)=>{
            console.log("Error",err)
        })
    }
    
    render() {
        console.log(this.state.orderCakeList);
        return (
            <div>
                <table class="table" style={{marginTop:"100px"}}>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Order List</th>
                        </tr>
                    </thead>
                </table>

                    <div>
                    {this.state.orderCakeList.map((ele,index)=>{
                       console.log(ele)
                       return(
                                <div class="accordion"   id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn  btn-block text-left" onClick={(event)=>{
                                                 console.log(event.target)
                                            }} type="button" data-toggle="collapse"  data-target={`#collapseOne`} aria-expanded="true" aria-controls="collapseOne">
                                            Name:{ele.name}<br/>
                                            Address:{ele.address}
                                            <span style={{marginLeft:"5rem"}}>
                                            OrderDate:{ele.orderdate}
                                            </span>
                                            <span style={{marginLeft:"5rem"}}>
                                            OrderId:{ele.orderid}
                                            </span>  
                                            <span style={{marginLeft:"5rem"}}>
                                            Total Price:{ele.price}
                                            </span>
                                            <span style={{marginLeft:"5rem"}}>
                                            Payment Mode:{ele.mode}
                                            </span>

                                            </button>
                                        </h2>
                                        </div>
                                        
                                        <div id="collapseOne" style={{backgroundColor:"#CD6155",color:"#fff"}} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body" style={{marginLeft:"10px"}}> 
                                        <div>
                                        <div style={{width:"400px"}}> 
                                           <p>Cakes:({ele.cakes})</p> 
                                           <p>PhoneNo:({ele.phone})</p> 
                                           <p>Pincode:({ele.pincode})</p>
                                        </div>   
                                        </div>
                                        </div>
                                        </div>
                                    </div> 
                                    </div>
                        )
                    })}
                    </div>    
                    
            </div>
        )
    }
}

export default connect((state,props)=>{
    console.log(state)
    return{
        OrderList:state["order_list"]
    }
})(OrderList)

