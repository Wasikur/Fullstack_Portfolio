import "./profile_styles.css";
import Socials from "../socials/Socials";
import profile_pic from "../assets/profile_pic.png";

const Profile = () => {
  const navigateToContact = () => {
    window.location.href = "./#contact";
  };
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profile_pic}
          className="profile_pic"
          alt="Wasikur Rahman Khan profile"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Wasikur Rahman Khan</h1>
        <p className="section__text__p2">MERN full-stack developer</p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/16CrRZvxzfYF9BYp4pBT5-g0d3rsBVAh0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download="Wasikur_Rahman_Khan_CV.pdf"
          >
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <button className="btn btn-color-1" onClick={navigateToContact}>
            Contact Info
          </button>
        </div>
        <Socials />
      </div>
    </section>
  );
};

export default Profile;
