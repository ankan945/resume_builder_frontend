
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <div className="App" style={{ overflowX:'hidden'}}>
    <Router>
          <Navbar/>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route exact path="/about" element={<About/>} />
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
