
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  const[mode,setMode] = useState("light")

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')

      document.body.style.backgroundColor = 'grey';
    }

    else{
      setMode('light')

      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Text Manager" aboutText="About Us" searchBarText="Enter to Search" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
     <Textform mode={mode} />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
