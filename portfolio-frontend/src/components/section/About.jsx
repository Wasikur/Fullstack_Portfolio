import "./about_styles.css";
import about_me2 from "../assets/about-me2.jpg";
import arrow from "../assets/arrow.png";
import AboutCard from "./AboutTile/AboutCard";
import about from "./AboutTile/aboutCardDetails";

const About = () => {
const navigateToExperience = () => {
window.location.href = "./#experience";
};

function createCard(about) {
return (
<AboutCard id={about.id} key={about.id} icon={about.icon} title={about.title} details1={about.details1}
    details2={about.details2} details3={about.details3} />
);
}

return (
<section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
        <div className="section__pic-container">
            <img src={about_me2} alt="Portrait" className="about-pic" />
        </div>
        <div className="about-details-container">
            <div className="about-containers">{about.map(createCard)}</div>
            <div className="text-container">
                <p>
                    Enthusiastic FullStack Web Developer | MERN Stack Expert | ECE Fresher with Strong Python & Database
                    Skills
                </p>
              <br/>
                <p>
                    As a passionate and highly motivated FullStack Web Developer, I bring a unique blend of expertise in
                    both web development and Electronics and Communication Engineering (ECE). Proficient in MERN stack
                    technologies, including MongoDB, Express.js, React.js, and Node.js, I am eager to apply my skills in
                    real-world projects.
                </p>
                <p>
                    I thrive on solving complex problems and identifying opportunities for innovation. My analytical
                    mindset, attention to detail, and commitment to continuous learning drive me to deliver high-quality
                    solutions. I am excited to leverage my technical skills and passion for web development to
                    contribute effectively to a dynamic team.
                </p>
                <p>
                    In summary, as a fresher ECE Engineer with a focus on FullStack web development and proficiency in
                    MERN stack technologies, Python, and database management, I am prepared to make valuable
                    contributions to innovative projects and drive business success.
                </p>
            </div>
        </div>
    </div>
    <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={navigateToExperience} />
</section>
);
};

export default About;
