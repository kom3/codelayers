import "./Footer.scss";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Tutorial Site. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
