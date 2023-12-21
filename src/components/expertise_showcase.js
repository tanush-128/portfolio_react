import React from "react";
import ReactLogo from "../images/react-logo.png";
import FlutterLogo from "../images/flutter-logo.png";
import DjangoLogo from "../images/Django-Logo.png";
import next from "../images/next-js.png";
class Expertise {
  constructor(title, description, logo) {
    this.title = title;
    this.description = description;
    this.logo = logo;
  }
}

const expertise_list = [
  new Expertise(
    "React Js",
    "I had started learning React through the project of cloning flipkart for the Kodien KGP's task round, but for unfairly rejected(as people with dumb portfolio site got In ). But in the way I also got in using TypeScript,",
    ReactLogo
  ),
  new Expertise(
    "Flutter",
    "I had started to learn app development using Java but when I found out about Flutter - Multiple devices using single codebase, I was amazed and started learning it. I have made a few projects using Flutter.",
    FlutterLogo
  ),
  new Expertise(
    "Django",
    "Django become the framework of my choice for backend development cause of it has batteries included and Django Rest Framework is also very easy to use.",
    DjangoLogo
  ),

  new Expertise("Next Js", "It is just amazing and I love it.", next),
];

function ExpertiseCard(props) {
  return (
    <div className="card">
      <div className="logo">
        <img id="flutter-logo" src={props.logo} alt="" />
      </div>

      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default function ExpertiseShowcase() {
  return (
    <div id="card-container">
      {expertise_list.map((expertise) => (
        <ExpertiseCard
          title={expertise.title}
          description={expertise.description}
          logo={expertise.logo}
        />
      ))}
    </div>
  );
}
