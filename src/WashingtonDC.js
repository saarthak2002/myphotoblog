import { NavBar } from "./Navbar";
import { Footer } from './Footer'
import './ImageGrid.css';
export function WashingtonDC() {
    return(
        <div>
            <NavBar />
            <h1 className="SFHeading">Washington, DC</h1>
            <div className="row">
                <div className="column">
                    <img src={require("./Images/DC/washmonunight.png")} alt={"Washinton Monument at night"}/>  
                    <img src={require("./Images/DC/dcwaterfront.png")} alt={"DC waterfront"}/>
                    <img src={require("./Images/DC/washmonureflectnight.png")} alt={"The Washington Monument reflected in water at night"}/>
                </div>
                <div className="column">               
                    <img src={require("./Images/DC/dcchinatown.png")} alt={"An archway in the DC Chinatown"}/>
                    <img src={require("./Images/DC/ustreasury.png")} alt={"US Treasury Building"}/>
                    <img src={require("./Images/DC/lincolnstatue.png")} alt={"A statue of Lincoln"}/>
                    <img src={require("./Images/DC/capitolevening.png")} alt={"The US Capitol Building"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/DC/lincolnmematsunset.png")} alt={"The Lincoln Memorial at sunset"}/>
                    <img src={require("./Images/DC/wwiimemorial.png")} alt={"World War 2 Memorial in DC"}/>
                    <img src={require("./Images/DC/whitehousenight.png")} alt={"The White House at night"}/>
                    <img src={require("./Images/DC/dcdinosaurs.png")} alt={"Dinosaur Skeletons in a DC museum"}/>
                </div>
                <div className="column">
                    <img src={require("./Images/DC/spaceshuttlediscoveryback.png")} alt={"US Space Shuttle Discovery"}/>
                    <img src={require("./Images/DC/africanamericanmusesum.png")} alt={"African-American History Museum in DC"}/>
                    <img src={require("./Images/DC/americanflagbeforewashmonu.png")} alt={"The American Flag waving in the wind in front of the Washington Monument"}/>
                    <img src={require("./Images/DC/redchruchdc.png")} alt={"A red chruch in DC"}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}