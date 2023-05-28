import { useState } from "react"

export default function Textform() {

    const[text,setText] =useState("Enter text here");

    const handleClick =()=> {
        console.log("button Clicked");
    }

    const handleOnChange =() =>{
        console.log("On Change");
    }

    return (
    <>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="Manage Text" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </>
  )
}
