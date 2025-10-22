import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navber.css';

const Navber = () => {
  return (
    <div className="navber">
      <img src={assets.logo} className="logo" alt="Logo" />
      
      <ul className="navber-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/mobile-app" className={({ isActive }) => isActive ? 'active' : ''}>Mobile-app</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        </li>
      </ul>

      <div className="navber-right flex gap-10 cursor-pointer">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navber-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
      </div>

      <button className="navber-btn">Sign in</button>
    </div>
  );
};

export default Navber;
