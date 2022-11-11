
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import React,{useState} from 'react';


// import{
//   BrowserRouter as Router,
//   ,
//   Route,
//   Link
// }from "react-router-dom";
function App() {

  const [mode, setMode]=useState("light");//weather dark mode is enabled or not
  
  const toggleMode=()=>{
    if(mode === 'light'){
    // setMode=('dark');
    document.body.style.backgroundColor='sucess';
    //showAlert("Dark mode has been enabled","success");
    
    }
    else{
      setMode=('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils" aboutText="About Texttutils" mode={mode} togglemode={"dark"} />
     
     {/* <div className="container my-3">
     <TextForm  heading="Enter the text to analyse" mode={mode}/>
     </div> */}
     <About />
    </>
  );
}

export default App;
