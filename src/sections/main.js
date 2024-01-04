import { MaxWidthWrapper } from "../components/maxWidthWrapper";
import SocialMediaLinks from "../components/social-media-links";
import img1 from "../images/person.png";
export default function Main() {
    return (
      <MaxWidthWrapper>
        <section id="main">
          <div id="main-left">
            <div id="greet">
              <span id="hr">
                <hr />
              </span>
              Hello
            </div>
            <div id="intro-head">
              I'm <span>Tanush</span> Agarwal
            </div>
            <div id="intro-body">
              App Developer and Full stack Web Developer, currently pursuing
              B.Tech in Industrial and Systems Engineering from IIT Kharagpur.
            </div>
            <SocialMediaLinks />
          </div>
          <div id="main-right">
            <img src={img1} alt="" srcset="" />
          </div>
        </section>
      </MaxWidthWrapper>
    );
}