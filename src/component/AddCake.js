import { Component, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function AddCake() {
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = () => {
        // console.log(files[0])
        const formData = new FormData()
        formData.append("file",imageSelected)        
        axios.post("https://apifromashu.herokuapp.com/api/upload",formData,{
            headers:{"authtoken":localStorage.tokenId}
        })
            .then((res) => {
            console.log(res);
        })
    }
   
      
        
   
   return (
            <div>                
                <form style={{ marginTop: "4em", padding: "1.5em 28em", backgroundColor: "#F7F2F2" }}>
                <h3 style={{ backgroundColor: "#F7F2F2", color: "tomato" ,fontFamily:"monospace" }}>New cake </h3>
            <hr></hr>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Name</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group">
      <label for="validationTooltip04">Weight</label>
      <select class=" form-control" style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
                        <option>500 gm</option>
                        <option>1 kg</option>
                        <option>1.5 kg</option>
                    </select>
                </div>    
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Description</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Ingredients</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Category</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>

                    <div class="form-group">
      <label for="validationTooltip04">Eggless</label>
      <select class=" form-control " style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
                        <option>True</option>
                        <option>False</option>                        
                    </select>
                    </div>
                    
                    <div class="form-group">
    <label for="price" style={{fontSize:"1.1em"}}>Price</label>
    <input type="number" style={{height:"2em"}} class="form-control"></input>
                    </div>                 
                    
                    <div class="form-group">
    <label for="exampleFormControlFile1" style={{fontSize:"1.1em",marginRight:"20em"}}>Cake Image:</label>
         <input type="file" name="image" style={{ height: "2em" }} class="form-control-file" id="exampleFormControlFile1" onChange={(event) => {setImageSelected(event.target.files[0])}} style={{marginLeft:"17em",marginTop:"-2.4em"}}></input>
    <button  class="btn btn-link" onClick={uploadImage} style={{color:"black",backgroundColor:"#979A9A ", marginLeft:"25em",marginTop:"-3.1em"}} type="button" id="inputGroupFileAddon04">UPLOAD</button>
                    </div>
                  
  <button type="submit" class="btn btn-primary">Add Cake</button>
</form>    
            </div>
        )
    
}
export default AddCake;
