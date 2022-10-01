import monumentImage from './washmonu.png';
import { useNavigate } from 'react-router-dom';

const content = "Washington, D.C. is a city of many mysteries- a metropolis that you can mold by your perspective. The museums of Washington, D.C. house many wonders like dinosuars, a sarcophagus, and even a space shuttle. At night, it transforms into a display of zestful delight.";


export function ThirdSection() {
      let navigate = useNavigate();
      const routeChange = () => {
      let path=`/dc`;
      navigate(path);
    }
    return(
        <section className='lastSection'>
        <div className='topSection-left'>
        <h2>Washington DC</h2>
        <p>
        {content}
        </p>
        <button className='viewButton' onClick={routeChange}>View More</button>
        </div>
        <div className='topSection-rigt'>
          <img src={monumentImage} alt="logo" height='640 px' width='480 px'/>
        </div>
      </section>
    )
}