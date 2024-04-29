import { Intro } from "./components/IntroSection";
import { NavigationBar } from './components/Navbar';
import { Hero } from './components/Herosection';
import { Spec } from './components/Specs';
import { Edu } from './components/Education';
import Footer from './components/footer';
import './App.css';



function App() {
  return (
    <>
      <div className=''>
        <NavigationBar />
        <Intro />
      </div>
      <div className='m-32'>
        <Hero />
      </div>
      <div>
        <Spec />
      </div>
      <Edu />

      <div className='mt-24'>
        <Footer />
      </div>
    </>
  )
}

export default App;
