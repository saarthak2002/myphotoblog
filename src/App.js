import './App.css';
import { FirstSection } from './firstSection';
import { SecondSection } from './secondSection';
import { TopSection } from './topSection';
import { Footer } from './Footer'
import {ThirdSection} from './thirdSection';
import { NavBar } from './Navbar';
import {NatureSection} from './NatureSection';

export function App() {
  return (
    <div className="App">
      <NavBar />
      <TopSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <div><h1></h1></div>
      <NatureSection />
      <div><h1></h1></div>
      <Footer />
    </div>
  );
}


