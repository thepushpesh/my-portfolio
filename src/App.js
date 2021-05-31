import Contact from "./Contact";
import Navbar from "./Navbar";
import Main from "./Main";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import { useState, useEffect } from 'react';

const getStorageTheme = () => {
  let theme = 'light';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])
  
  return (
    <div className="App">
      <Navbar/>
      <Main change={toggleTheme}/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
