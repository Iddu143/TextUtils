// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Greet from './components/Greet' 
// import Wishes from './components/Wishes'
// import Hello from './components/Hello';
// import Withclass from './components/Withclass';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Click from './components/Click';
// import ClickFunction from './components/ClickFunction';
// import EventBind from './components/EventBind';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Speechform from './components/Speechform';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import AboutUs from './components/About';
// import Speechform from './components/Speechform';
// import Speechform from './components/Speechform';
function App(){
  const [mode,setMode]=useState("");//whether the dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#6c757d';
    showAlert("Dark Mode Has been Enabled","success:");
    document.title="TextUtils-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has been Enabled","success:");
    document.title="TextUtils-LightMode";


    }
    
  }
    return (
      <>
      {/* <Navbar title="TextUtils" AboutText="About Us" /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </div>
     
      {/* <div>
        <About/>
      </div> */}
      {/* <div className='container'>
        <Speechform/>
        hi
      </div> */}
          {/* element={<Textform showAlert={showAlert}  heading="Enter text to analyse" mode={mode} /> */}

      </Router>
      </> 
        

    );

}

export default App;
