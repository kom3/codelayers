import { Link } from "react-router-dom";
import "./Header.scss";

/**
 * Simple site header with a title that links back to home.
 * Additional navigation links could be added later.
 */
const Header = () => (
  <header className="site-header">
    <div className="container">
      <h1 className="logo">
        <Link to="/tutorialhub">Tutorials Hub</Link>
      </h1>
      {/* simple navigation: keep a home button for convenience */}
      <nav className="site-nav">
        <Link to="/tutorialhub" className="home-button">
          Home
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
