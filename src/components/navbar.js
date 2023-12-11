export default function Navbar() {
return(
    <div class="navbar">
    <div class="navbar-item" id="name">
      <div>TANUSH AGARWAL</div>
      <div id="ham">
        <a href="javascript:void(0);" class="icon" onclick="myFunction">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>

    <div id="navbar-links">
      <div class="navbar-item"><a href="#about">ABOUT ME</a></div>
      <div class="navbar-item"><a href="#skills">SKILLS</a></div>
      <div class="navbar-item"><a href="#resume">RESUME</a></div>

      <div class="navbar-item"><a>PROJECTS</a></div>
      <div class="navbar-item"><a href="#contact">CONTACT</a></div>
    </div>
  </div>
);
}