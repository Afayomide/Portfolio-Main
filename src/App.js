import Header from './components/header/header';
import Projects from './components/Projects/projects';
import Preloader from './components/preloader/preloader';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import CustomCursor from './components/cursor/customCursor';


function App() {
  return (
    <div className="App">

  <CustomCursor/>


    <div className='elements'>        
<Preloader/>

    <Header/> 
    <div className='contents'>
  <Skills/>
    <Projects/> 
    <Contact/>
       </div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
