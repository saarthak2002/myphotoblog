import {NavLink} from 'react-router-dom';



export function NavBar() {
    return(
    <div>
        <h1 className='title'>Saarthak Gupta</h1>
      <nav className="navbarmain">
        
        <NavLink to="/" className="nav_link">Home</NavLink>
        <NavLink to="/about" className="nav_link">About</NavLink>
        <NavLink to="/contact" className="nav_link">Contact</NavLink>

      </nav>
      </div>
    );
  }