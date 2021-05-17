import {createStore} from "redux"
import {shashi} from "./reducer" //initials value declared in reducer


var store  = createStore(shashi,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//initial value

store.dispatch({
    type:"LOGIN"
})

store.dispatch({
    type:"PLACE_ORDER"
})



// console.log("after dispatch logout",store.getState())

console.log("after dispatch store ka state" , store.getState()) //to get the state from reducer

export default store