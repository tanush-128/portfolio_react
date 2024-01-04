import Kcard from "../components/kcard";
import { MaxWidthWrapper } from "../components/maxWidthWrapper";

export default function Resume() {
  return (
    <section id="resume">
        <MaxWidthWrapper>
        <div id="title">Resume</div>
        <div id="description">
          From A small town named Adoni to Hydrebad for JEE coaching and now at
          IIT Kharagpur. I have learned a lot in this journey.
        </div>
        <div id="resume-container">
          <div id="education">
            <div id="title">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/dotty/80/university.png"
                alt="university"
              />
              Education:
            </div>
            <Kcard
              time="June 2023 - Present"
              title="B.Tech Industrial and Systems Eng"
              description="Secured 3751 rank in JEE Advanced 2023. Initially, I aspired to secure a spot in the P&I at IIT Delhi, renowned for its thriving entrepreneurial ecosystem. However, I was admitted to the ISE at IIT Kharagpur, and upon reflection, I realized that this choice aligns better with my career aspirations."
              institution="IIT Kharagpur"
            />
            <Kcard
              time="June 2021 - April 2023"
              title="11th-12th class + JEE coaching"
              description="11th was completely online due to the pandemic. I was enrolled in the 2-year classroom program at Fiitjee Hyderabad. Struggled a lot in my first year as I was from State Board, had no idea about the JEE syllabus slowly I got used to it and started to perform well."
              institution="Fiitjee Hydrebad (Miyapur)"
            />
            <Kcard
              time="2010 -2020"
              title="Primary Education"
              description="Quite good at studies, but I was more interested in technology and computers. My schooling was done in Akshara Sree School, Adoni. Nothing much that I learn here cause it was a very small school, very less exposure to non-academics"
              institution="Akshara Sree School, Adoni"
            />
          </div>
          <div id="experience">
            <div id="title">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios/50/business--v1.png"
                alt="business--v1"
              />
              Experience:
            </div>
            <div>
              {/* <Kcard
                time="June 2021 - Present"
                title="Web Developer"
                description="I am currently working as a web developer at E-cell IIT Kharagpur. I am working on the website of E-cell IIT Kharagpur. I am working on the frontend using React and backend using Django."
                institution="E-cell IIT Kharagpur"
              /> */}
              <Kcard
                time="June 2023 - Present"
                title="App Developer"
                description="I am currently working as an app developer at Student Welfare Group, Technology Students Gymkhana, IIT Kharagpur. I am working on the SWG app which is used by the students of IIT Kharagpur. I am working on the frontend using Flutter and backend using Django."
                institution="Student Welfare Group,Technology Students Gymkhana, IIT Kharagpur"
              />
              <Kcard
                time="December 2023 - Present"
                title="Intern at Frippi"
                description="Frippi is a startup that aims to help people - Form, Nurture and Strengthen Friendships. One can find personalized plans and compatible companions, right in their neighborhood. As Frippi is an early-stage startup, I am getting to work on a variety of tasks, including Frontend development, Backend development , Content Management and Marketing ."
                institution={<a href="https://frippi.in/">Frippi</a>}
              />
            </div>
          </div>
        </div>
    </MaxWidthWrapper>
      </section>
  );
}
