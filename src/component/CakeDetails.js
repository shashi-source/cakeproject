import Details from "./Details";
// import Cake from "./Cake";
import axios from 'axios';
import { useState, useEffect } from "react";




function CakeDetails(props){

    var [cakeresult, setCakes] = useState({});    
    let qq= props.match.params.id;


    useEffect(() => {
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;
      axios({
        method:"get",
        url:apiurl
      }).then((res)=>{
        console.log("res",res.data);
        setCakes(res.data.data)
      },(err)=>{
        console.log("Error",err);
      })
    },[props.match.params.id]);
        
    
  
        return (
            <div>
            <div className="row">
                 <Details cakedata={cakeresult} />
              
              </div>
            </div>
        
        )
    }
export default CakeDetails;

