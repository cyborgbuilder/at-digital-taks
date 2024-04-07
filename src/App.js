import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar.js'
import ScrollToTop from './Pages/ScrollToTop.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
       <Navbar />
       <ScrollToTop />
         <Routes>
         <Route path='/' element={<Home />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
