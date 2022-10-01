import { NavBar } from "./Navbar";
import { Footer } from './Footer';
import './ImageGrid.css';
export function NewYorkCity(){
    return(
        <div>
            <NavBar />
            <h1 className="SFHeading">New York City</h1>
            <div className="row">
                <div className="column">
                    <img src={require("./Images/NYC/nycwaterfrontviewfromdumbo.png")} alt={"NYC view from DUMBO"}/>  
                    <img src={require("./Images/NYC/cityviewfrombridgenight.png")} alt={"Night view of Manhattan from Brooklyn Bridge"}/>
                    <img src={require("./Images/NYC/rockerfellerchristmastreenight.png")} alt={"Rockerfeller Center Christmas Tree"}/>
                    <img src={require("./Images/NYC/onewtcmorningclouds.png")} alt={"One world trade center on a sunny day"}/>
                    <img src={require("./Images/NYC/nycstreetmoviebillboard.png")} alt={"A billboard for a movie on a sunny NYC day"}/>
                    <img src={require("./Images/NYC/tramwaysunsetview.png")} alt={"A sunset view from a Aerial Tram"}/>
                </div>
                <div className="column">     
                    <img src={require("./Images/NYC/dumbomanhattanbridgeview.png")} alt={"View of Manhattan Bridge through buildings"}/>          
                    <img src={require("./Images/NYC/timessquareatnight.png")} alt={"Times Square at night"}/>
                    <img src={require("./Images/NYC/madisonavesnow.png")} alt={"Madison Avenue on a snowy night"}/>
                    <img src={require("./Images/NYC/christmaslightsathudsonyards.png")} alt={"Christmas lights at Hudson Yards"}/>
                    <img src={require("./Images/NYC/wtcnight.png")} alt={"One Word Trade Center at night"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/NYC/empirestatebuildingtopnight.png")} alt={"View of Manhattan from top of Empire State Building"}/>
                    <img src={require("./Images/NYC/centralparkbuildingsview.png")} alt={"View of Manhattan Skyline from Central Park"}/>
                    <img src={require("./Images/NYC/statueofliberty.png")} alt={"The Statue of Libery viewed from a boat"}/>
                    <img src={require("./Images/NYC/macysinthesnow.png")} alt={"Macy's storefront in the snow"}/>
                    <img src={require("./Images/NYC/vangoghstarrynightmoma.png")} alt={"Vincent Van Gogh's Starry Niight"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/NYC/radiocityinrain.png")} alt={"Radio city music hall on a rainy evening with neon lights reflected on wet roads"}/>
                    <img src={require("./Images/NYC/vesselfuturisticshot.png")} alt={"A metallic life-size sculpture called the Vessel"}/>
                    <img src={require("./Images/NYC/empirestatebuidlingdaytimefromstreet.png")} alt={"A view of the Empire State Building from the street"}/>
                    <img src={require("./Images/NYC/centralparkfountain.png")} alt={"A fountain in Central Park"}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}