// Create document or insert a document
const createDocument = async () => {
  try {
    const pj1 = new Projectmodel({
      key: 1,
      img: "../assets/project1.jpg",
      alt: "my_portfolio_project",
      title: "Portfolio Project",
      githubLink: "https://github.com/Wasikur/Fullstack_Portfolio.git",
      demoLink:"https://fullstack-portfolio-frontend.vercel.app/",
    });
    const pj2 = new Projectmodel({
      key: 2,
      img: "../assets/project2.jpg",
      alt: "fullstack_service_website",
      title: "Service Website Project with Admin Panel",
      githubLink: "https://github.com/Wasikur/fullstack-service.git",
      demoLink:"https://fullstack-service-client.vercel.app/",
    });
    const pj3 = new Projectmodel({
      key: 3,
      img: "../assets/project3.jpg",
      alt: "swm-project",
      title: "Solid Waste Management Plant Project",
      githubLink: "https://github.com/Wasikur/SWM_reactJS.git",
      demoLink:"https://swm-react-js.vercel.app/",
    });

    const result = await Projectmodel.insertMany([pj1, pj2, pj3]);
    console.log(result);
  } catch (error) {
    console.error("error", error);
  }
};

createDocument();
