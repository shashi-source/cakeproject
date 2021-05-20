import React from 'react'
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';
import Sidebar from "./Sidebar"
import './Dashboard.css'

 function DashBoard() {
    const [allCakes,setAllcakes] = useState([]);
    // const [sortAllCakes,setsortcake]=useState([])
        useEffect(() => {
            let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
            axios({
                method:"get",
                url:apiurl
            }).then((res)=>{
                // console.log(res.data);
                setAllcakes(res.data.data)
            },(err)=>{
                console.log(err);
            })
        },[])

        function sortCake(){
            let sortallcakes= allCakes.sort((a,b)=>{
                return(a.price-b.price)
            })
            console.log(sortallcakes);   
            // setsortcake(sortallcakes)
        }

        
        return (
            <div>
            {/* {console.log(sortAllCakes)} */}
            <Sidebar/>
            <div>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 fixed-top" style={{top:"50px",backgroundColor:"#fff",zIndex:10}}>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                    <Link to="/dashboard"><button class="btn btn-sm btn-outline-secondary" onClick={sortCake}>price Low to High</button></Link>
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle">Filter</button>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    </table>
                </div>
                </main>
                    <div>
                    {allCakes.map((ele,index)=>{
                        // console.log(ele,index);
                        return(
                            <div>
                                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{top:"200px"}}>
                                <div class="table-responsive" style={{alignItems:"center"}}>
                                    <table class="table table-striped table-sm">
                                    <tbody style={{padding:"10px"}}>
                                        <tr >
                                        <td style={{width:"50px"}}>{index+1}</td>
                                        <td style={{width:"100px"}}><img src={ele.image} style={{height:"50px",width:"50px"}}></img></td>
                                        <td style={{width:"150px"}}>{ele.name}</td>
                                        <td style={{width:"100px"}}>{ele.price}</td>
                                        <td style={{width:"150px"}}>
                                            <div class="btn-group" role="group" aria-label="Basic example" style={{cursor:"pointer"}}>
                                            <Link to="/content"><button type="button" class="btn btn-secondary" onClick={(event)=>console.log(event.target)}>+</button></Link>   
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                </main>  
                            </div>
                            )                     
                    })}  
                    </div>                
            </div>
          
        </div>
    )
}

export default  DashBoard