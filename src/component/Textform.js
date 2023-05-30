import { useState } from "react"

export default function Textform() {

    const[text,setText] =useState("Enter text here");

    const handleUpClick =()=> {
        console.log("button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange =(e) =>{
        console.log("On Change");
        setText(e.target.value)
    }

    const handleLowClick =() => {
        let newText=text.toLowerCase();
        setText(newText);
    }

    return (
    <>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="Manage Text" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to Read</p>
    </div>
    </>
  )
}
