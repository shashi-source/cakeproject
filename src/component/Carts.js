import axios from 'axios';
import React, { Component } from 'react'
import CheckOut from './CheckOut';
import Product from './Product';

 class Carts extends Component {
     constructor(props) {
         super(props)
         
         this.state = {
             cake:[]
            }
        }
        // cakes=[]
     componentDidMount() {
         console.log(this.props);
         axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{ //image not working here
            headers:{"authtoken":localStorage.tokenId}
         }).then((res)=>{
             console.log("res",res.data);
            //  this.cakes.push(res.data.data)
            this.setState({
                cake:res.data.data
            })
            console.log(this.state.cake)
         },(err)=>{
             console.log("Error",err);
         })
     }
     
        //    <div>
        //     {/* {this.state.cake.map((ele)=>{
        //         <CheckOut product={ele}/>
        //     })} */}
        //    </div>
    //<button className="btn btn-outline-primary"  style={{top:"6em",marginLeft:"900px"}}>CheckOut</button> 
       
     
    render() {
        return (
            <div>
            <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{top:"6em",right:"10em"}}>   
            <CheckOut/>
            <table class="table">
                            
                     <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            </table>
                </div>

                    <div  className="row">
                  {this.state.cake.map((ele)=>{
                      return <Product cakecart={ele}/>
                  })}
                    </div>
                    
                </div>
    
    
        )
    }
}
export default Carts