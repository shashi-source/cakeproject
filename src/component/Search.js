import {useState,useEffect} from "react"
import queryString from "query-string"
import axios from "axios"
import Cards from "./Cards"

function Search(props){
    var [Cakeresult,setCakes]=useState([]);
    var query=queryString.parse(props.location.search)
    console.log("aa gyi ",query.q);
    
    useEffect(()=>{
        
        var apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
        axios({
            method:"get",
            url:apiurl            
        }).then((res)=>{
            console.log("response",res.data);
            setCakes(res.data.data)
        },(err)=>{
            console.log("Error",err);
        })
    },[query.q])

    return(
        <div className="row">
            {Cakeresult.map((each)=>{        
                return <Cards cakedata={each}/>
            })}
            {Cakeresult.length<=0 && <div>
                <div class="card" style={{margin:"160px 530px"}}>
                    <div class="card-header" style={{backgroundColor:"gray"}}>
                        <b style={{color:"deepskyblue"}}>Oop!</b> 
                    </div>
                    <div class="card-body" style={{backgroundColor:"lightgrey"}}>
                        <blockquote class="blockquote mb-0">
                        <p style={{color:"red",fontWeight:"bold"}}>we could not found  this cake</p>
                        </blockquote>
                    </div>
                    </div>
                </div>}
        </div>
    )

}

export default Search