import { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";


class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
            product:[]
        }
        
    }
    message={}
    addCart=[]
    addCartPro={}
    
    addToCartCakes=()=>{
        console.log(this.props)
        var cakeinfo={
            cakeid:this.props.cakedata.cakeid,      
            name:this.props.cakedata.name,     
            weight:this.props.cakedata.weight,      
            price:this.props.cakedata.price,
            image:this.props.cakedata.image     
        };
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/addcaketocart",
            data:cakeinfo,
            headers:{"authtoken":localStorage.getItem("tokenId")}
        }).then((res)=>{
            console.log(res.data)
            if(res.data !== "Session Expired"){
                this.addCartPro=res.data.data
                this.addCart.push(this.addCartPro)
                this.setState({
                    product:this.addCart
                })
                console.log(this.state.product);
                toast("Product : Add to Cart");

            }
            else{
                toast("You must Logged In");
            }
        },(err)=>{
            console.log("Error",err)
        })
    }

    render() {

        return (
            <div>
            <div class="card mb-3" style={{ maxWidth: "85vw" ,marginLeft:"13em" ,border:"none"}}>
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div class="card " style={{marginTop:"5em"}}>
              <div class="row">
                <div class="col-md-4">
                <img src={this.props.cakedata.image} style={{height:"100%" ,width:'30vw'}}class="card-img-top cakeImg" alt="..."></img>
                </div>
                <div class="col-md-8" style={{padding:"5em"}}>
                  <div class="card-body" style={{color:"tomato"}}>
                      <h3 class="card-title">{this.props.cakedata.name}</h3>                
                            <p class="card-text">Ratings : {this.props.cakedata.ratings}</p>  
                            <p class="card-text">Price : {this.props.cakedata.price}</p>  
                            <p class="card-text">{this.props.cakedata.description}</p>
                            <p class="card-text">Weight : {this.props.cakedata.weight}</p>  
                            <p class="card-text">Flavour : {this.props.cakedata.flavour}</p>  
                            <p class="card-text">Type : {this.props.cakedata.type}</p>                  
                            <p class="card-text">{this.props.cakedata.likes}👩‍👧‍👧</p>   
                            <button  onClick={this.addToCartCakes} type="button" class="btn btn-success">Add To Cart<i class="fas fa-cart-plus"></i></button>
                  </div>
                </div>
                    </div>
                    </div>
                    </Link>          
            </div>
            </div>
        )

    }
}

export default Details;