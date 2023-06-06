
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import About from './component/About';
import Alert from './component/Alert';
import Textform from './component/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')

      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils - Dark Mode Enabled'
    }

    else{
      setMode('light')

      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtils - Light Mode'
    }
  }
  return (
    <Router>
      <Navbar title="Text Manager" aboutText="About Us" searchBarText="Enter to Search" mode={mode} toggleMode={toggleMode}/>
      <Alert alertMessage={alert}/>
      <div className="container my-3">
        <Routes>
          {/* <Route path='/' element={<About/>}/>  */}
          <Route path='about' element={<About/>}/> 
          <Route path='/' element={<Textform mode={mode} showAlert={showAlert}/>}/>
        </Routes>
    </div>
    </Router>
  
  );
}

export default App;
