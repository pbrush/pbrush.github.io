import logo from './logo.svg';
import github from './images/github-mark.svg'
import linkedin from './images/linkedin-mark.svg'
import youtube from './images/youtube-mark.svg'
import me from './images/me.jpg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// CUSTOM
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <p> how about this</p>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </div>
      </Router>
      <header className="App-header">
        <p> Where does this go</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editing this should change something
        </p>
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


      </header>
    </div>
  );
}

export default App;
