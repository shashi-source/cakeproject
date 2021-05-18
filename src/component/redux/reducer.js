export function shashi (state ={},{type,payload}){
    switch(type){
        case "LOGIN" :{
         state = {...state}
         state["isloggedin"] = true 
         return state
        }
        case "PLACE_ORDER":{
            state={...state}
            state["order_place"]=payload
            return state
        }
        case "PLACED_ORDERS":{
            state={...state}
            state["placed_orders"]=payload
            return state
        } 
        case "ORDER_LIST":{
            state={...state}
            state["order_list"]=payload
            return state
        }       
        default : return state
    }
 }


