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
                    <img src={require("./Images/SF/alcatrazisland.png")} alt={"Alcatraz Island"}/>  
                    <img src={require("./Images/SF/californiamural.png")} alt={"A mural of the word California"}/>
                    <img src={require("./Images/SF/lombardstreet1.png")} alt={"Lombard Street in San Francisco"}/>
                    <img src={require("./Images/SF/torpedopoint.png")} alt={"A pier in the ocean with San Francisco in the background"}/>
                </div>
                <div className="column">               
                    <img src={require("./Images/SF/beachships.png")} alt={"Large ships near a beach"}/>
                    <img src={require("./Images/SF/ghirardellisquare.png")} alt={"Famous Ghirardelli Square in San Francisco"}/>
                    <img src={require("./Images/SF/pier39.png")} alt={"Pier 39 in San Francisco"}/>
                    <img src={require("./Images/SF/hookshop.png")} alt={"A shop at Pier 39 in San Francisco"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/SF/fishermanswharf.png")} alt={"Fisherman's Wharf in San Francisco"}/>
                    <img src={require("./Images/SF/blueredbuilding.png")} alt={"Red and blue builings in SF"}/>
                    <img src={require("./Images/SF/sffromsea.png")} alt={"View of San Francisco from the sea"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/SF/boatsinmarina.png")} alt={"Boats moored in a marina"}/>
                    <img src={require("./Images/SF/goldengateoverlook.png")} alt={"View overlooking the Golden Gate Bridge"}/>
                    <img src={require("./Images/SF/lombardstreetoverlook.png")} alt={"Sceneic view overlooking Lombard Street and San Francisco"}/>
                    <img src={require("./Images/SF/boatsinMarina2.png")} alt={"Boats in clear blue water"}/>
                </div>
            </div>  
            <Footer />
        </div>
    );
}