import React,  {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText)
    }


    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    //credit A
    const handleCopy=()=>{
      console.log("copying");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipvboard.writeText(text.value);
    }

    //credit coding wala
    const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }


    const [text, setText] =useState('Enter text here');
    //text="new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      {/* <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div> */}
      {/* <h1>{props.heading}-{text}</h1> */}
      <h1>{props.heading}</h1>
    <div className="mb-3">
     {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
   </div>
   <button type="button" classsName="btn bg-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

   <button type="button"  classsName="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
   <button type="button" class="btn btn-primary" onClick={handleLoClick}>Convert</button>
   <button classsName="btn bg-primary mx-2" onClick={handleClearClick}>Clear Text</button>
   <button classsName="btn bg-primary mx-2" onClick={handleCopy}>Copy Text</button>
   <button classsName="btn bg-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  
  {/* <button classsName="btn-btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  */}
    </div>

    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <h3>{text.length>0?text:"Enter some in textbox to preview here"}</h3>
    </div>


    
    </>
  )
}
