import { NavBar } from "./Navbar";
import { Footer } from './Footer'
//import './About.css';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';

export function Contact(){
    return(
        <div className="aboutPage">
            <NavBar />
            <h1 className="pageTitle">get in touch with me</h1>
            <div className="aboutSectionWrapper">
                <img src={require("./Images/pigeonpointlighthouse.png")} alt="Saarthak Gupta"/>
                <div className="aboutText">
                    <h1>Contact</h1>
                    <p> The best way to get in touch with me is through E-mail. You can also connect with me on LinkedIn, and I am happy to chat about tech, computer science, or photography. My E-mail and socials can be accessed by tapping on the icons displayed below this text.</p>
                    <p>If you would like to contribute to the development of this website, please submit a pull request <a href="https://github.com/saarthak2002/myphotoblog" style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <div className="socialIcons">
                        <ul>
                            
                            <li><SocialIcon url="mailto:saarthakvir@gmail.com" target="_blank" rel="noopener noreferrer"/></li>
                            <li><SocialIcon url="https://www.linkedin.com/in/saarthak-gupta/" target="_blank" rel="noopener noreferrer"/></li>
                            <li><SocialIcon url="https://github.com/saarthak2002" target="_blank" rel="noopener noreferrer"/></li>
                            <li><SocialIcon url="https://www.instagram.com/saarthak_photography/" target="_blank" rel="noopener noreferrer"/></li>
                            <li><SocialIcon url='https://twitter.com/saarthak2002' target="_blank" rel="noopener noreferrer"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}