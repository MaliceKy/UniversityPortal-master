// this is our login page 
import logo from './logo.svg';
import './App.css';

import Headr from "./components/Headr.js";
import LogPage from "./Login";


//this is where everything is displayed so we call other classes -- basically a main
function App() {
  return (
    <div className="App">
     <LogPage />
    </div>

  );
}


export default App;