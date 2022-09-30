import treeImage from './goldengatebridge.png';
import { useNavigate } from 'react-router-dom';
const content = "Lorem ipsum dolor sit amet. Et ipsum cupiditate qui eligendi rerum et voluptatem esse et velit sunt eum provident cupiditate? Ut consequatur deserunt est quisquam quibusdam sed harum autem sit aliquam soluta et Quis tenetur eos sint possimus et error sunt.";



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