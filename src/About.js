import { NavBar } from "./Navbar";
import { Footer } from './Footer'

export function About(){
    return(
        <div className="aboutPage">
            <NavBar />
            <h1>About</h1>
            <Footer />
        </div>
    );
}