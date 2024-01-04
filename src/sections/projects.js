import project1 from "../images/Student Welfare Group App.png";
import project2 from "../images/weather_app.png";
import project3 from "../images/flipkart_clone.png";
import React from "react";
import ReactLogo from "../images/react-logo.png";
import FlutterLogo from "../images/flutter-logo.png";
import DjangoLogo from "../images/Django-Logo.png";
import spotify_clone from "../images/spotify_clone.jpeg";
import htmlLogo from "../images/html.png";
import next from "../images/next-js.png";
import chat from "../images/chat.png";
import frippi_showcase from "../images/frippi_showcase.png";
import { MaxWidthWrapper } from "../components/maxWidthWrapper";
function Project(props) {
  const image = <img src={props.image} alt="" srcset="" />;
  const content = (
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

        <a href={props.projectLink} target="_blank">
          <button> VISIT PROJECT </button>
        </a>
      </div>
    </div>
  );
  return (
    <div className="project">
      {props.i % 2 === 0 ? image : content}
      {props.i % 2 === 0 ? content : image}
    </div>
  );
}

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <section id="projects">
        <div className="projects-body">
          <Project
            image={project1}
            title="Student Welfare Group app"
            description="Throughout the project, I encountered numerous challenges, each of which provided valuable learning opportunities in areas such
                as layout design, routing, theming, and more."
            logo={FlutterLogo}
            projectLink="https://github.com/tanush-128/SWG_app"
            i="1"
          />

          <Project
            image={frippi_showcase}
            title="Frippi landing page"
            description="After joining Frippi as Intern, I was assigned task to make minor changes in the landing page.Instead I choose to redesign the whole landing page to match with the service we provide at Frippi."
            logo={ReactLogo}
            projectLink="https://www.frippi.in/"
            i="3"
          />

          <Project
            image={project3}
            title="Flipkart Clone"
            description="I acquired fundamental knowledge in React JS, including state management. I also gained a foundational understanding of TypeScript. In addition, I delved into web scraping using BeautifulSoup to collect and manage data."
            logo={ReactLogo}
            projectLink="https://flipkart-clone-32867.web.app/"
            i="3"
          />
          <Project
            image={spotify_clone}
            title="Spotify Clone"
            description="This project was constructed utilizing foundational knowledge in HTML, CSS, and JavaScript. I am confident that it effectively showcases my expertise in CSS and DOM manipulation. Additionally, I explored web scraping using BeautifulSoup to gather and organize data."
            logo={htmlLogo}
            projectLink="https://tanush-128.github.io/spotify_clone/"
            i="4"
          />

          <Project
            image={chat}
            title="Chat App"
            description="
         This project has become my absolute favorite, providing an incredible learning experience with technologies like Next.js, NextAuth, Tailwind CSS, socket programming, and the utilization of ORMs such as Prisma. What stands out the most is the emphasis on backend development, fostering a significant enhancement in problem-solving skills.
          "
            logo={next}
            i="5"
          />
          <Project
            image={project2}
            title="Weather App"
            description="I gained valuable experience in working with APIs and handling JSON data while using the Weather Today API to fetch information. Additionally, I developed a strong understanding of how to deploy Flutter web applications, enhancing my overall knowledge of web development and deployment processes."
            logo={FlutterLogo}
            projectLink="https://ecell-25402.web.app/"
            i="2"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
