import img2 from "../images//person-half-image.png";
import signature from "../images/signature.png";
import Skills from "../components/skills";
export default function About() {
    return (
        <section id="about">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div id="about-left">
            <img src={img2} />
          </div>
          <div id="about-right">
            <div id="about-me">
              <span id="hr">
                <hr />
              </span>
              <span>About Me</span>
            </div>
            <p>
              My name is Tanush Agarwal - App Developer and Web Developer,
              currently pursuing B.Tech in Industrial and Systems Engineering
              from IIT Kharagpur. I am a passionate learner and a keen observer.
              I am always ready to learn new things and implement them in my
              work. I am a team player and I believe in working together to
              achieve a common goal. I am a quick learner and I am always ready
              to take up new challenges.
            </p>
            <p>Sixth grade: Started learning C, Java, and Oracle.</p>
            <p>
              Since then:
              <ul>
                <li>Worked on various projects.</li>
                <li>Explored IoT using Arduino and NodeMCU.</li>
                <li>
                  Got into game development using Unity and Unreal Engine.
                </li>
                <li>
                  Learned React, Flutter, Django, Python, C, C++, Java, HTML,
                  CSS, JavaScript, Firebase, Git, and GitHub.
                </li>
              </ul>
            </p>

            <p>Current: Still learning and exploring new technologies.</p>

            <img src={signature} alt="" />
            <div id="about-buttons">
              <button title="hire-me">HIRE ME</button>
            </div>
          </div>
        </div>

        <Skills />
      </section>
    )}