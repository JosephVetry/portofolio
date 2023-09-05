import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
