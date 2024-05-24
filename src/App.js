//import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //Dark/Light mode
  const [mode,setMode]=useState('light');
// const togglemode1=()=>{
//   if(mode==='light'){
//     setMode('dark');
//     document.body.style.backgroundColor='#595656';
//     showAlert("Dark mode 2 is Enabled","success");
//   }
//   else{
//    setMode('light');
//    document.body.style.backgroundColor='white';
//    showAlert("light mode is Enabled","success");}

//   }
const togglemode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode is Enabled","success");
    document.title = 'TextUtils-Dark Mode';
    //Blink Title
    // setInterval(()=>{
    //   document.title = 'TextUtils is Amazing';
    // },2000)
    // setInterval(()=>{
    //   document.title = 'Install Now';
    // },1500)
  }
  else{
   setMode('light');
   document.body.style.backgroundColor='white';
   showAlert("light mode is Enabled","success");
   document.title = 'TextUtils-Light Mode';
  
  }

  }
  //Alert
const [alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
  setAlert({
    msg:message ,
    type:type
  })
  setTimeout(()=>{
  setAlert(null);
  },1000)
}
  return (

    <div>
      {/* <BrowserRouter> */}
  <Navbar navbarBrand="Textutils" navbarLink="About" mode={mode} togglemode={togglemode} alert={alert} showAlert={showAlert} />
  <Alert alert={alert} showAlert={showAlert}/>
  <div className="container my-3">
  {/* <Routes> */}
    {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} togglemode={togglemode}  alert={alert} showAlert={showAlert}/>}/> */}
    
    <TextForm heading="Enter text to analyze" mode={mode} togglemode={togglemode}  alert={alert} showAlert={showAlert}/>
    {/* <Route exact path="/About" element={<About/>}/> */}
    
   
    {/* </Routes> */}
 
  
  </div>
  {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
