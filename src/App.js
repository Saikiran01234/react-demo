import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'



function App() {
  return (
    <div className="App">
      {/*<ClassComponent/>*/}
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
