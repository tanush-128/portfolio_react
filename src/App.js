import "./App.css";
import Navbar from "./components/navbar";
import Main from "./sections/main";
import About from "./sections/about";
import Expertise from "./sections/expertise";
import Resume from "./sections/resume";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import { MaxWidthWrapper } from "./components/maxWidthWrapper";
function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Expertise />
      <Resume />
      <Projects />
      <Contact />
      </div>
   
  );
}

export default App;
