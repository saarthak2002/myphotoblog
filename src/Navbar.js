import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export function NavBar() {
  let navigate = useNavigate();
  const routeChange = () => {
    console.log('clicked');
    let path=`/`;
    navigate(path);
  }
    return(
    <div>
      <div className='titleContainer'>
        <h1 className='title' onClick={routeChange}>Saarthak Gupta</h1>
      </div>
        
      <nav className="navbarmain">
        
        <NavLink to="/" className="nav_link">Home</NavLink>
        <NavLink to="/about" className="nav_link">About</NavLink>
        <NavLink to="/contact" className="nav_link">Contact</NavLink>

      </nav>
      </div>
    );
  }