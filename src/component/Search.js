import {useState,useEffect} from "react"
import queryString from "query-string"
import axios from "axios"
import Cards from "./Cards"

function Search(props){
    var [Cakeresult,setCakes]=useState([]);
    var [isloading,setloading]=useState(false);
    
    var query=queryString.parse(props.location.search)
    console.log("aa gyi ",query.q);
    
    useEffect(()=>{
        var apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
        setloading(true)
        axios({
            method:"get",
            url:apiurl            
        }).then((res)=>{
            console.log("response",res.data);
            setCakes(res.data.data)
            setloading(false);
        },(err)=>{
            console.log("Error",err);
        })
    },[query.q])

    return(
        <div className="row">
            {isloading && <div>
            <div class="d-flex justify-content-center" style={{margin:"100px 100px"}}>
             <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            </div></div>}
            {Cakeresult.map((each)=>{        
                return <Cards cakedata={each}/>
            })}
            {Cakeresult.length<=0 && <div>
                        <div class="card" style={{marginLeft:"16em",marginTop:"10em"}}>
                            <div class="card-header">
                                    <b>Oop!</b> 
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                            <p>Sorry, no results found!</p>               
                        </blockquote>
                        <h4>Please check the spelling or try searching for something else</h4>
                        </div>            
                    </div>
                </div>}
        </div>
    )

}

export default Search