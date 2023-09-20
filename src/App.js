import React,{useState} from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = ()=>{
     if(mode==='light'){  
        setMode('dark');
        document.body.style.backgroundColor='#070011';
        showAlert("Dark mode has been enabled","success");
        document.title="Dark Mode Enabled-TextUtilities";
        //Below code is used to get the attention of the user 
        // setInterval(() => {
        //   document.title="Dark Mode Enabled-TextUtilities";
        // },2000);
        // setInterval(() => {
        //   document.title="Install textUtils Now";
        // }, 1500);
      }
     else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been enabled","success");
        document.title="Light Mode Enabled-TextUtilities";
      }
  }

  return (
      <>
      {/* install react router using cli cammand npm i react-router-dom */}
      <Router>
      <Navbar title="Utility App" aboutText="About" mode={mode} togglemode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 ">
        {/* /user  ---component1
        /user/home -- component2
        if you skip exact in route tag then in both cases it will call component 1 */}
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>          
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
      </>  
  ); 
}

export default App;
