import './App.css';
import { FirstSection } from './firstSection';
import { SecondSection } from './secondSection';
import {Link} from 'react-router-dom';
import { TopSection } from './topSection';
import { Footer } from './Footer'
import {ThirdSection} from './thirdSection';
import { NavBar } from './Navbar';

export function App() {
  return (
    <div className="App">
      <NavBar />
      <TopSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}


