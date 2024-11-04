import logo from './logo.svg';
import github from './images/github-mark.svg'
import linkedin from './images/linkedin-mark.svg'
import youtube from './images/youtube-mark.svg'
import me from './images/me.jpg'
import './App.css';
import { Route, Routes } from 'react-router-dom';


// CUSTOM
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route>
            <Route path="/"         element={ <Home />      }/>
            <Route path="/Projects"  element={ <Projects />  }/>
            <Route path="/About"    element={ <About />     }/>
          </Route>
        </Routes>
      </div>
      <div>
          <a
            className="App-link"
            href="https://github.com/pbrush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="github-svg" alt="git" />
          </a>

          <a
            className="App-link"
            href="https://github.com/pbrush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="linkedin-svg" alt="li" />
          </a>

          <a
            className="App-link"
            href="https://www.youtube.com/@philb_7009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} className="youtube-svg" alt="yt" />
          </a>
        </div>
      {/* <header className="App-header">
        <p> Where does this go</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editing this should change something
        </p>
        


      </header> */}
    </div>
  );
}

export default App;
