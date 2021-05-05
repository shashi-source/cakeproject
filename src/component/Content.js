import React from 'react'

export default function Content() {
    return (
        <div>
            <div style={{backgroundColor:"lightgray"}}>
            <div style={{width:"400px" ,margin:"100px 450px"}}>
                <form>
                    <h1 style={{color:"red"}}>Edit cake Form</h1>
                <div className="form-group">
                    <label for="exampleInputId"> Cake-id</label>
                    <input type="Number" className="form-control" id="exampleInputId" aria-describedby="IdHelp" ></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPrice">price</label>
                    <input type="Number" className="form-control" id="exampleInputPrice" ></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputImage">Image</label>
                    <input type="file" className="form-control" id="exampleInputImage" ></input>
                </div>
                
                <button type="submit" className="btn btn-primary" >Save</button>
                </form>
            </div>
            </div>
            
        </div>
    )
}
