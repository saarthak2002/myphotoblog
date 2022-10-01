import treeImage from './goldengatebridge.png';
import { useNavigate } from 'react-router-dom';
const content = "Quaint, ocean-kissed San Francisco has an air of optimism about it. The picturesque city by the bay feels like a tenderly painted canvas with its pastel hues gently draped in sunlight. It fills you with the promise of many serendipitous moments.";



export function FirstSection() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path=`/sfo`;
    navigate(path);
  }

    return(
        <section className='topSection'>
        <div className='topSection-left'>
        <h2>San Francisco</h2>
        <p>
        {content}
        </p>
        <button className='viewButton' onClick={routeChange}>View More</button>
        </div>
        <div className='topSection-rigt'>
          <img src={treeImage} alt="logo" height='480 px' width='640 px'/>
        </div>
      </section>
    )
}