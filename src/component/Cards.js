import axios from "axios"
import {Component} from "react"
import Cart from "./Cart"
import {withRouter} from "react-router-dom"

class Cards extends Component{
    constructor(){
        super()
        this.state={
            cakesDetails:[]    
         }
    }
    
    cakes=[]

    cartItem=(event)=>{  
        // console.log(this.props.match.cakeid);
        if(event.target){
            let apiurl=`https://apifromashu.herokuapp.com/api/cake/${this.props.cakedata.cakeid}`
            axios({
                method:"get",
                url:apiurl
            }).then((res)=>{
                // console.log("response",res.data);
               if(res.data){
                   this.cakes.push(res.data.data)
                   this.setState({
                       cakesDetails:this.cakes
                    })
                    // console.log(this.state.cakesDetails);
                    this.props.history.push('/Cart')
                }
            },(err)=>{
                console.log("Error",err)
            })     
        }
    }

    render(){
        return(
            <div>
                    <div className="card" style={{ height:"28em", width:"20em" , padding:"1rem",margin:"0 22px",top:"70px"}}>
                        <img src={this.props.cakedata.image} style={{height:"15em"}}  className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">{this.props.cakedata.name}</h5>
                        <p className="card-text">{this.props.cakedata.price}</p>
                        <a href="#" className="btn btn-primary" onClick={this.cartItem}>Add to Cart</a>              
                        </div>
                    </div>
                            
                <div>
                 {/* send data in Cart component */}                 
                 {this.state.cakesDetails.map((el)=>{
                    return <Cart cakeinfo={el}/>
                })}
                </div>

            </div>
        )
    }

}
export default withRouter(Cards);