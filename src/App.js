
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
    <Navbar title="Text Manager" aboutText="About Us" searchBarText="Enter to Search"/>
    <div className="container my-3">
      <Textform />
    </div>
    </>
  );
}

export default App;
