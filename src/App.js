import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Mains from './component/Mains';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/main' element={<Mains/>}/>
        <Route  path='/main' element={<Mains/>}/>
      </Routes>
    </div>
  );
}

export default App;
