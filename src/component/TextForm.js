import React,{useState}from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const handleupClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        if(text!=='')
        props.showAlert("Coverted to Upper Case","success");
    }
    const handlelowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        if(text!=='')
        props.showAlert("Coverted to lower Case","success");
    }
    const clearAll=()=>{
       setText('');
       if(text!=='')
       props.showAlert("Clear All","success");
    }
    // logic to not count space ;
    const logic=()=>{
        let arr=text.split(/\s/);
    let m=arr.length;
    let count1 =0;
  // console.log(arr);
   for(let i=0;i<m;++i)
    {
        if(arr[i]!=='')
            count1++;
    }
    return count1;
    }

    //copy Text
const handlecopy=()=>
  {
      let num=document.getElementById("mybox");
      num.select();
      navigator.clipboard.writeText(num.value);
      if(text!=='')
      props.showAlert("Copied to Clipboard","success");
  }
  //Extra spaces
  const extraspaces=()=>{
    let temp=text.split(/[ ]+/);
    setText(temp.join(" "));
  }

    const [text,setText]=useState(' ');
  return (
    <>
    <div>
<div className="mb-3">
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="3"></textarea>
  
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleupClick}>convert to upper</button>
<button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>convert to lower</button>
<button className="btn btn-primary mx-1 my-1" onClick={clearAll}>Clear All</button>
<button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy</button>
<button className="btn btn-primary mx-1 my-1" onClick={extraspaces}>Remove extra space</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
  <h3>Your Text Summary</h3>
  <p>Words:{logic()} Characters:{text.length}</p>
  <p>Time Required to read: {0.008*logic()} min</p>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h3 >Preview</h3>
  <p>{text===""?"Enter something to show":text}</p>
</div>
    </>
  )
}
