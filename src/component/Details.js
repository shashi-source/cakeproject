import { Component } from "react";
import {cakeDetail} from './CakeDetails'
import { useHistory } from "react-router-dom";
import {axios} from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";


class Details extends Component {
    
    constructor() {
        super()
        this.state = {
            addCart:[]
        }
    }
    // Cartapi
    // https://apifromashu.herokuapp.com/api/addcaketocart

    addCartCake={}
    addCarts=[]

    addToCartCakes=()=>{
        this.addCartCake.cakeid=this.props.cakedata.cakeid;      
        this.addCartCake.name=this.props.cakedata.name;      
        this.addCartCake.weight=this.props.cakedata.weight;      
        this.addCartCake.price=this.props.cakedata.price;
        console.log(this.addCartCake);  
        
        var tempObj=this.addCartCake
        this.addCarts.push(tempObj); 
        console.log(this.addCarts);
        this.setState({
            addCart:this.addCarts
        })   
        console.log(this.state.addCart);
    }

    render() {
        // console.log("state,", this.props)

        return (
            <div class="card mb-3" style={{ maxWidth: "85vw" ,marginLeft:"13em" ,border:"none"}}>
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div onClick = {()=>{
            
                        // this.NavigationDemo(this.props.cakedata.cakeid);
                                }}
                     class="card " style={{marginTop:"5em"}}>
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
        )

    }
}

export default Details;