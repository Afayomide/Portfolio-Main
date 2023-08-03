import Header from './components/header/header';
import Projects from './components/Projects/projects';
import Preloader from './components/preloader/preloader';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
    <Preloader/>
    <Header/>
  <Projects/>
   <Contact/> 
    <Footer/>
    </div>
  );
}

export default App;
