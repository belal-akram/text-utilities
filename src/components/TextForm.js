import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleItalicClick = () => {
      
      let newText =text.italics();
      // Update the 'text' state with the italicized text
      setText(newText);
  
   
      props.showAlert("Converted to Italic", "success");
      
  }
  
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=('');
        setText(newText);
        props.showAlert("Text has been deleted","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
      console.log("I am copy");
      var text=document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed","success");
    }
    const [text,setText]=useState('');
    // text="new text"; //Wrong Way to change the state
    // setText="new text"; //Right Way to change the state
    
    return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2"  onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-2" id="myBox" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-2" id="myBox" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2" id="myBox" onClick={handleItalicClick}>Convert to Italic</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text in the textbox above to preview it here."}</p>
    </div>
   
    </>
  )
}
