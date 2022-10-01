import nyc from './nyc.png';
import { useNavigate } from 'react-router-dom';

const content = "New York City always had me returning for more- the allure of the Big Apple had bewitched me. With its glimmering billboards and colossal yet amicable skyscrapers, New York City is an assault on the senses in the best way possible."

export function SecondSection() {
    let navigate = useNavigate();
      const routeChange = () => {
      let path=`/nyc`;
      navigate(path);
    }
    return(
        <section className='secondSection'>
         <div className='topSection-rigt'>
          <img src={nyc} alt="logo" height='480 px' width='640 px'/>
        </div>
        <div className='secondSection-left'>
        <h2>New York</h2>
        <p>
          {content}
        </p>
        <button onClick={routeChange} className='viewButton'>View More</button>
        </div>
       
      </section>
    )
}