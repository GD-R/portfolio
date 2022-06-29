import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Achievements from "./Pages/Achievements";
import Work from "./Pages/Work";
import { useAppContext } from "./Context/ContextProvider";
 

function App() {
 
  const { allStates: { colorTheme,setTheme } } = useAppContext();
  


  return (
    <div className="">
      <Navbar colorTheme={colorTheme} setTheme={setTheme} />
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}>
        <Route path="/about" element={<Skills/>}/>
          <Route path="/about/skills" element={<Skills/>} />
          <Route path="/about/achievements" element={<Achievements/>} />
          <Route path="/about/experience" element={<Work/>} />
        </Route>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
