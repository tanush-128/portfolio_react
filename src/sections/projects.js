import project1 from "../images/Student Welfare Group App.png";
import project2 from "../images/weather_app.png";
import project3 from "../images/flipkart_clone.png";
import React from "react";
import ReactLogo from "../images/react-logo.png";
import FlutterLogo from "../images/flutter-logo.png";
import DjangoLogo from "../images/Django-Logo.png";

function Project(props) {
  return (
    <div className="project">
      <img src={props.image} alt="" srcset="" />
      <div className="content">
        <div className="content-top">
          <div className="title">{props.title}</div>
          <div>{props.description}</div>
        </div>
        <div className="content-bottom">
          <div>
            <div className="title">Tech Stack :</div>
            <div>
              <img src={props.logo} width="32" alt="" />
            </div>
          </div>
          <button> VISIT PROJECT </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-body">
        <Project
          image={project1}
          title="Student Welfare Group app"
          description="Throughout the project, I encountered numerous challenges, each of which provided valuable learning opportunities in areas such
                as layout design, routing, theming, and more."
          logo={FlutterLogo}
        />

        <Project
          image={project2}
          title="Weather App"
          description="I gained valuable experience in working with APIs and handling JSON data while using the Weather Today API to fetch information. Additionally, I developed a strong understanding of how to deploy Flutter web applications, enhancing my overall knowledge of web development and deployment processes."
          logo={FlutterLogo}
        />

        <Project
          image={project3}
          title="Flipkart Clone"
          description="I acquired fundamental knowledge in React JS, including state management. I also gained a foundational understanding of TypeScript. In addition, I delved into web scraping using BeautifulSoup to collect and manage data."
          logo={ReactLogo}
        />
      </div>
    </section>
  );
}
