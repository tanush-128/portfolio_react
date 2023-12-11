import SocialMediaLinks from "../components/social-media-links";

export default function Contact() {
    return(
        <section id="contact">
        <div id="left">
          <div id="hello">
            Let's make something new,different and more meaningful thing more
            visual or Conceptual? <br />
            <span> Just Say Hello!</span>
          </div>
        </div>
        <div id="right">
          <div id="form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Mail Address" />
            <input type="text" placeholder="Your Budget(optional)" />
            <textarea name="" id="" cols="30" rows="4" placeholder="Project Description"></textarea>
         
            <div style={{display:"flex", justifyContent: "flex-end", width:"100%", padding:"8px"}} >
              <button id="hire-me">HIRE ME</button>
            </div>
          </div>
        </div>
        <div id="footer" style={{width:"100%",fontWeight: "500", fontSize:"18px", textAlign:"left"}}>
          - +91 96799689833 <br />
          <br />
          - tanush@myyahoo.com <br />
          <br />
          - BC 208- Lal Bahadhur Shastri Hall of residence,<br />
          IIT Kharagpur, West Bengal, India
          <br />
          <br />
          <br />
       <SocialMediaLinks />
        </div>
  
        <div id="blue-bg"></div>
      </section>
    )
}
