import "./footer_styles.css";
import Socials from "../socials/Socials";
import Navlinks from "../nav/navlinks/Navlinks";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <Navlinks />{" "}
        </div>
      </nav>
      <Socials />
      <p>Copyright &copy; 2023 Wasikur Rahman Khan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
