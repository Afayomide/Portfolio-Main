import { useState, useRef } from 'react';
import music from "./components/images/fav-song.mp3"
import Header from './components/header/header';
import Projects from './components/Projects/projects';
import Preloader from './components/preloader/preloader';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import CustomCursor from './components/cursor/customCursor';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { Toaster,toast } from "react-hot-toast";
import SideBar from './components/sidebar/sideBar';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        toast("Paused!", { icon: "⏸️" }); // Display toast on pause
      } else {
        audioRef.current.play();
        toast("Playing Experience by Ludovico Einaudi", { icon: "▶️" }); // Display toast on play
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="App">

  <CustomCursor/>
  <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#ffd79f",
              color: "#00000",
            },
          }}
        />

    <div className='elements'>        
<Preloader/>
<SideBar/>
    <Header/> 
    <div className='contents'>
  <Skills/>
  <Experience/>
  <Education/>
    <Projects/> 
    <Contact/>
       </div>
       <div className="sound">
          <audio ref={audioRef} src={music} />
          <div className="playmusic" onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause className="playmusic" />
            ) : (
              <FaPlay className="playmusic" />
            )}
          </div>
        </div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
