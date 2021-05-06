import {Component} from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
class Login extends Component{
    constructor(props){
        super(props)
        // localstorage
        this.getEmail=this.getEmail.bind(this);
        this.getPass=this.getPass.bind(this);
        this.fetchuseraxios=this.fetchuseraxios.bind(this);
        this.state={
            // for vaildation
            login:{},
            nameErr:"",
            passErr:""
        }
    }
    vaild=()=>{
        if(!this.state.login.email.includes("@") && this.state.login.password.length<4){
            this.setState({
                nameErr:"Invaild Email",
                passErr:"password length must be 4 Character"
            })
        }
        else if(!this.state.login.email.includes("@")){
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        else if( this.state.login.password.length<4){
            this.setState({
                passErr:"password length must be 4 Character"
            })
        }
        else{
            return true;
        }
    }
    login={}
    // get value from form
    getEmail=(event)=>{ 
        this.login.email=event.target.value
        this.setState({
            login:this.login
        })
    }
    getPass=(event)=>{
        this.login.password=event.target.value;
        this.setState({
            login:this.login
        })
    }
    fetchuseraxios=(e)=>{
        this.setState({
            nameErr:"",
            passErr:""
        })
        e.preventDefault();
        // console.log(this.state.login);
        if(this.vaild()){ 
            console.log(this.state.login);
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/login",
                data:this.state.login         
            }).then((res)=>{
                if(res.data){
                    toast("Welcome to our Cake Shop");
                    this.props.history.push('/')
                    console.log("response",res);
                }
            },(err)=>{
                // console.log("error",err);
                toast("Oh! Sorry You enter Wrong details");
            })            
        }   
        else{
            toast("please Check Your details");
        }     
    }
    componentDidMount(){
        console.log(this.props)
        this.login=JSON.parse(localStorage.getItem('email'));
        if(localStorage.getItem('email')){
            this.setState({
                nameErr:this.login.name,
                passErr:this.login.email
            })
        }
        else{
            this.setState({
                nameErr:"",
                passErr:""
            })
        }
    }
    componentWillUpdate(nextState){
        localStorage.setItem("email",JSON.stringify(nextState));
    }
    render(){
        return(
        <div style={{backgroundColor:"lightgray" ,height:"350px"}}>
            <div style={{height:"300px" ,width:"400px" ,margin:"100px 450px"}}>
                <form>
                    <h1 style={{color:"red"}}>Login Form</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getEmail}></input>
                    <p style={{color:"red"}}>{this.state.nameErr}</p>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.getPass}></input>
                <p style={{color:"red"}}>{this.state.passErr}</p>
                </div>
              <button type="submit" className="btn btn-primary" onClick={this.fetchuseraxios}>Login</button>
              <br></br>
                 <span>Create Account<Link to="/signup">SignUp</Link></span>&emsp;&emsp;
                &emsp;&emsp; 
                <Link to="/Forgetpass"><a href="">Forgetpassword?</a></Link>
                </form>
            </div>
        </div>
        )
    }
}
export default Login