import { Link } from 'react-scroll';
import './navbar.css';

const navItems = [
  'Home',
  'About',
  'Services',
  'Portfolio',
  'Tools',
  'Skills',
  'Contact'
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img
          src="/src/assets/photos/JC_Logo.png"
          alt="Jayden C Logo"
          className="home-logo"
        />
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
