import React from 'react'
import {Link} from 'react-router-dom'

 function Sidebar() {
    return (
        <div>            
            <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style={{backgroundColor:"#696969"}}>
                <div class="sidebar-sticky pt-3">
                    <ul class="nav flex-column">
                    <li class="nav-item">
                        Order
                    </li>
                    <li class="nav-item">
                        Product
                    </li>
                    <li class="nav-item">
                        Addcake
                    </li>
                   
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                        </a>
                    </li>
                    </ul>
                    
                </div>
                </nav>
                </div>
         </div>   
        </div>
    )
}

export default Sidebar
