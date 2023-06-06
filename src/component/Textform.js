import { useState } from "react"

export default function Textform(props) {

    const[text,setText] =useState("Enter text here");

    const handleUpClick =()=> {
        console.log("button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Word has been Uppercase", "success");
    }

    const handleOnChange =(e) =>{
        console.log("On Change");
        setText(e.target.value);
    }

    const handleLowClick =() => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Word has been Lowecase", "success");
    }

    return (
    <>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='drak'?'white':'black'}} id="Manage Text" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to Read</p>
    </div>
    </>
  )
}
