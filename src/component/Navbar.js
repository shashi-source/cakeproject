import {Component} from "react"
import { Link } from "react-router-dom"
// import Search from "./Search"

class Navbar extends Component{
    constructor(){
        super()
        this.state={
            searchtext:undefined
        }
    }
    searchtext

    getSearchText=(event)=>{
       this.setState({
           searchtext:event.target.value
       })
       
    }

    render()
    {
        return(
        <div>
            {/* #A93226 */}
          <nav className="navbar  navbar-expand-lg fixed-top navbar-light" style={{backgroundColor:"#A93226",zIndex:30}} >
                <Link to="/"><a className="navbar-brand" href="#" style={{color:"#fff" ,fontWeight:"bold",fontFamily:"sans",fontSize:"1.5rem"}}><span style={{color:"#F39898"}}>My Cake </span>Shop</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <form className="form-inline my-2 my-lg-0" >
                    <input onChange={this.getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                   <Link to={`/search?q=${this.state.searchtext}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{color:"#fff"}} >Search</button></Link>
                    <Link to="/dashboard">&emsp;<button type="button" class="btn btn-light">Admin</button></Link>
                    </form>
                    </li>
                    </ul>
                    <button type="button" class="btn btn-light">cart</button>&emsp;
                    <Link to="/login"><button  className="btn btn-outline-info" style={{color:"#fff"}}>Login</button></Link>  
                </div>
            </nav>
        </div>
        )
    }
}
export default Navbar;