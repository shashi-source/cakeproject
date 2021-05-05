import {Component} from "react"

class Cart extends Component{
    constructor(){
        super()
        this.state={
            // cartCake:""
        }    
    }
    // cakes=[]
    componentDidMount() {
        console.log(this.props.cakeinfo);
    }
    
    
    render(){
        return(
        
                <div>
                 
                    {/* <div class="card" style={{width: "18rem"}}>
                    <img src={this.props.cakeinfo.image} style={{height:"40vh"}} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.cakeinfo.name}</h5>
                        <p class="card-text">{this.props.cakeinfo.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Weight: {this.props.cakeinfo.weight}</li>
                        <li class="list-group-item">Price: {this.props.cakeinfo.price}</li>
                        <li class="list-group-item">Ratings: {this.props.cakeinfo.ratings}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" className="btn btn-outline-primary">process to pay</button>|                
                        <button type="button" className="btn btn-outline-primary">remove from cart</button>                
                    </div>
                    </div> */}

                </div>
        )
    }

}
export default Cart
