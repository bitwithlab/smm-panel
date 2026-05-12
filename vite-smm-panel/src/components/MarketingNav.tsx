import { Link, NavLink } from 'react-router-dom';

export default function MarketingNav() {
  return (
    <nav className="m-nav">
      <Link to="/" className="logo">
        <span className="logo-mark"></span>EngageFlow
      </Link>
      <div className="m-nav-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : '')}>
          Features
        </NavLink>
        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>
      <div className="m-nav-right">
        <Link to="/login" className="btn sm ghost">
          Sign in
        </Link>
        <Link to="/signup" className="btn sm primary">
          Start trial
        </Link>
      </div>
    </nav>
  );
}
