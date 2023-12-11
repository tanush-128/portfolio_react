import ExpertiseShowcase from "../components/expertise_showcase";


export default function Expertise(){
    return(
        <section id="expertise">
        <div id="title">Expertise Area</div>
        <div>
          The main area of my expertise is front-end development (client side of
          the web) and now expanding my knowledge in backend.
        </div>
        <ExpertiseShowcase />
        <div id="skill-scroll-bar">
          <div class="scroll"></div>
          <div class="scroll-active"></div>
          <div class="scroll"></div>
        </div>
      </section>
    )
}
