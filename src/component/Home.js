import {Component} from "react"
import Carousel from './Carousel'
import Cards from "./Cards"
// import cakes from "./Data"
import axios from "axios"
// import {Link} from "react-router-dom"

class Home extends Component{
    constructor(){
        super()
        this.state={
            cakes:[]
        }
    }
    // get request to api
    componentDidMount(){
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        axios({
            url:apiurl,
            method:"get"
        }).then((res)=>{
            // console.log("response",res.data);
            this.setState({
                cakes:res.data.data
            })
        },(err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <Carousel/>
                <div className="row" style={{margin:"1.5rem"}}>
                    {
                        this.state.cakes.map((each)=>{
                            return <Cards cakedata={each}></Cards>
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Home;