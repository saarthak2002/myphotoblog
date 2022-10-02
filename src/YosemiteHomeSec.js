import { useNavigate } from 'react-router-dom';

export function YosemiteHomeSection() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path=`/yosemite`;
    navigate(path);
  }

    return(
        <section className='yoseMite'>
        <div className='topSectionYosemite'>
        <h2>Yosemite National Park</h2>
        <button className='viewButton' onClick={routeChange}>View More</button>
        </div>
        </section>
    )
}