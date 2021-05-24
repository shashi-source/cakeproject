import {Component} from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { connect } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.getEmail=this.getEmail.bind(this);
        this.getPass=this.getPass.bind(this);
        this.userLogin=this.userLogin.bind(this);
        this.state={
            login:{},
            nameErr:"",
            passErr:""
        }
    }
    // for vaildation
    vaild=()=>{
     if( !this.state.login.email && !this.state.login.password && !this.state.login.email.includes("@") && this.state.login.password.length<4){
            this.setState({
                nameErr:"Invaild Email",
                passErr:"password length must be 4 Character"
            })
        }
        else if(!this.state.login.email && !this.state.login.password && !this.state.login.email.includes("@") && this.state.login.email==="" ){
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        else if(!this.state.login.email && !this.state.login.password && this.state.login.password.length<4){
            this.setState({
                passErr:"password length must be 4 Character"
            })
        }
        else{
            return true;
        }
    }
    login={}
    message={}
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
    userLogin=(e)=>{
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
            }).then((res) => {
                console.log("my mess", res);
                console.log(res.data.token);
                // localstorage
                localStorage.setItem("tokenId",res.data.token)
                localStorage.setItem("name",res.data.name)
                this.message = res.data;
                if(this.message.message !== 'Invalid Credentials'){
                    toast.success("Welcome to Our CakeShop",{autoClose:"2000"});                    
                    console.log("message ;.....",this.message);
                    this.props.dispatch({
                        type:"LOGIN",
                        payload:res.data
                    })
                    this.props.history.push('/');
                } else {
                    toast.warning("Please Check Your Email or Password",{autoClose:"2000"});
                }              
            },(err)=>{
                // console.log("error",err);
                toast.warn("Email/Password should not be Empty");
            })                     
        }      
    }
    render(){
        return(
            // 
        <div style={{backgroundColor:"lightgray",height:"500px"}}>
            <div style={{margin:"100px"}}>
                <form>
                    <h1 style={{color:"red"}}>Login Form</h1>
                    <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                     <div class="col-sm-10">
                       <input type="email" class="form-control" id="inputEmail3" onChange={this.getEmail} />
                        <p style={{color:"red"}}>{this.state.nameErr}</p>

                     </div>
                    </div>
               
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" onChange={this.getPass} />
                    <p style={{color:"red"}}>{this.state.passErr}</p>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" onClick={this.userLogin}>Sign in</button>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                      <span>Create Account<Link to="/signup">SignUp</Link></span>&emsp;&emsp;
                      &emsp;&emsp;<Link to="/Forgetpass"><a href="">Forgetpassword?</a></Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
        )
    }
}
export default connect()(Login)