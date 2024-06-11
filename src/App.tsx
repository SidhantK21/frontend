import { Intro } from "./components/IntroSection";
import { NavigationBar } from './components/Navbar';
import { Hero } from './components/Herosection';
import { Spec } from './components/Specs';
import { Edu } from './components/Education';
import Footer from './components/footer';
import { useScrollMob } from "./context/scrollforMobile";
import './App.css';



function App() {
  const {homesectionMob}=useScrollMob();
  return (
    <>
      <div  ref={homesectionMob}>
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
