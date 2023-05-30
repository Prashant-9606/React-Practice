
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
 import Textform from './component/Textform';

function App() {
  return (
    <>
    <Navbar title="Text Manager" aboutText="About Us" searchBarText="Enter to Search"/>
    <div className="container my-3">
     <Textform />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
