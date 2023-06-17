import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import View from './components/view';
import Navbar from './components/navbar';
import DataState from './components/context/notes/dataState';
import Transfer from './components/transfer';


function App() {

   
  return (
    <DataState>
      <Router>
       <Navbar/> 
       <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>        
          <Route path="/view" element={<View/>}/>
          <Route path="/transfer" element={<Transfer/>}/>
        </Routes>
        </div>
      </Router>
    </DataState>
  );
}

export default App;
