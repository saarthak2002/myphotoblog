import { NavBar } from "./Navbar";
import { Footer } from './Footer'
import './About.css';

const content = "Lorem ipsum dolor sit amet. Et ipsum cupiditate qui eligendi rerum et voluptatem esse et velit sunt eum provident cupiditate? Ut consequatur deserunt est quisquam quibusdam sed harum autem sit aliquam soluta et Quis tenetur eos sint possimus et error sunt.";

export function About(){
    return(
        <div className="aboutPage">
            <NavBar />
            <h1 className="pageTitle">welcome to my little corner of the internet</h1>
            <div className="aboutSectionWrapper">
                <img src={require("./Images/saarthak.jpg")} alt="Saarthak Gupta"/>
                <div className="aboutText">
                    <h1>About Me</h1>
                    <p>My name is Saarthak Gupta, and I created this website to showcase one of my hobbies- amateur photography. I enjoy taking pictures (or rather, "freezing time," as I like to think of it) of all sorts of things- cities, clouds, trees, people, a slice of pizza. I am also a college student studying computer science, and creating this website has allowed me to nuture one of my greatest passions- developing software. I believe this endeavor has been doubly creative, spanning the creativity associated with both photography and front-end design.</p>
                    <p>If you could not tell already, I am a bit of a computer nerd. I love working with new technologies and building software. This website was created using <a href="https://reactjs.org/" style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">React</a>- an incredibly powerful JavaScript framework for building user interfaces. I periodically built and fine tuned this website over a course of 4 months, from July 2022 to October 2022. The primary tools I used to build this website are HTML, CSS, and JavaScript. This website has been deployed using GitHub Pages, a static website hosting framework that allows you to host websites right out of a Git repository. The git repository for this website can be viewed <a href="https://github.com/saarthak2002/myphotoblog" style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}