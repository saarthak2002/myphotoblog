import monumentImage from './washmonu.png';
import { useNavigate } from 'react-router-dom';

const content = "Lorem ipsum dolor sit amet. Et ipsum cupiditate qui eligendi rerum et voluptatem esse et velit sunt eum provident cupiditate? Ut consequatur deserunt est quisquam quibusdam sed harum autem sit aliquam soluta et Quis tenetur eos sint possimus et error sunt.";


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