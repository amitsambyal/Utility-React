import React,{useState} from 'react'

export default function Textform(props) {
  const[text,setText]=useState('');

  const handleUpClick=()=>{
    //console.log("you have clicked uppercase button"+ text);
    //setText("you have clicked uppercase button");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case","Success");
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case","Success");
  }
  const handleSenClick=()=>{
    const lower=text.toLowerCase();
    let newtext=text.charAt(0).toUpperCase();
    newtext+= lower.slice(1);    
    setText(newtext);
    props.showAlert("Converted to Sentence case","Success");
  }
  const handleClearClick=()=>{           
    setText('');
    props.showAlert("Data has been cleared","Success");
  }
  const handleCopyClick=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","Success");
  }
  const handleSpacesClick=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed","Success");
  }

  const handleOnChange=(event)=>{
   // console.log("you have clicked onChange button");
    setText(event.target.value);
  }

 // text="new text";// wrong way to change the state
  //setText("new text");// correct way to change the state
  return (
   <>    
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">     
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#5A5A5A',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>     
   </div>
   <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleSenClick}>Convert to Sentencecase</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
   </div>
   <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h2	>Your text Summary</h2>
    <p>{text.length<1?0:text.trim().split(/[ ]+/).join(" ").split(" ").length} words and  {text.length} character</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
   </div>
   </>
  )
  }
