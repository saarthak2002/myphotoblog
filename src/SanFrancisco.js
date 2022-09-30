import { NavBar } from "./Navbar";
import { Footer } from './Footer'
import './ImageGrid.css';
export function SanFrancisco(){
    return(
        <div className="aboutPage">
            <NavBar />
            <h1 className="SFHeading">San Francisco</h1>
            <div className="row">
                <div className="column">
                    <img src={require("./Images/ghirardellisquare.png")} alt={"Ghiradelli Square in SF"}/>  
                    <img src={require("./goldengatebridge.png")} alt={"Golden Gate Bridge in SF"}/>
                </div>
                <div className="column">               
                    <img src={require("./washmonu.png")} alt={"Ghiradelli Square in SF"}/> 
                </div>
                <div className="column">
                    <img src={require("./nyc.png")} alt={"Ghiradelli Square in SF"}/> 
                </div>
                <div className="column">
                    <img src={require("./washmonu.png")} alt={"Ghiradelli Square in SF"}/> 
                </div>
            </div>  
            <Footer />
        </div>
    );
}