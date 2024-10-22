
// App.js
import React from 'react';
import './App.css';
import logo from './assets/rhenz.png'; 
import logo1 from './assets/CANVA1.png';
import logo2 from './assets/FIGMA1.png';
import logo3 from './assets/HTML1.png';
import logo4 from './assets/PS1.png';
import proj1 from './assets/FIGMAPROJ1.png'
import proj2 from './assets/CANVAPROJ1.png'
import proj3 from './assets/PSPROJ1.png'

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
<section id="home" className="hero">
  <div className="hero-text">
    <h1><b>I'M RHENZO DE JUAN</b></h1>
    <h2>GRAPHIC ARTIST/UI DESIGNER</h2>
    <p>
    A 20-year-old Graphic Artist and UI designer from the Western Institute of Technology.
     Currently pursuing a Bachelor of Science in Information Technology, combining creativity
      with technical skills to craft engaging and user-friendly designs. With a passion for visual
       storytelling and a keen eye for detail.
    </p>
  </div>
</section>


      <section id="skills" className="skills-section">
      <h2>MY SKILLS</h2>
      <div className="skills-content">
        <div className="skills-icons">
          <div className="skill-icon">
            <img src={logo1} alt="Skill 1" />
          </div>
          <div className="skill-icon">
            <img src={logo2} alt="Skill 2" />
          </div>
          <div className="skill-icon">
            <img src={logo3} alt="Skill 3" />
          </div>
          <div className="skill-icon">
            <img src={logo4} alt="Skill 4" />
            
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="projects">
      {/* Background box */}
      <div className="projects-box"></div>

      <h2>MY PROJECTS</h2>
      <div className="project-cards">
        {/* Project 1 */}
        <div className="card">
          <div className="card-image">
            <img src={proj1} alt="Figma Project" />
          </div>
          <p className="card-description">FIGMA</p>
        </div>

        {/* Project 2 */}
        <div className="card">
          <div className="card-image">
            <img src={proj2} alt="Canva Project" />
          </div>
          <p className="card-description">CANVA</p>
        </div>

        {/* Project 3 */}
        <div className="card">
          <div className="card-image">
            <img src={proj3} alt="Photoshop Project" />
          </div>
          <p className="card-description">PHOTOSHOP</p>
        </div>
      </div>
    </section>

      <section id="contact" class="contact-section">
    <h2>CONTACT ME</h2>
    <div class="description">
      <p>
       You can get in touch with me through.
      </p>
    </div>

    <div class="socials">
      <a href="https://www.facebook.com/itsmelanceburgos22.igoooooooop/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook Icon" 
        />
        Rhenz De Juan
      </a>

      <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmBFtvNsknQStpSJxVDlBJwDKvJdxpNCQMgqVhXFcVTScvXQhPtpnCqjxSbKmVPWzmgfRtQ" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="Email Icon" 
        />
        +63 931 766 2750
      </a>

      <a href="https://www.instagram.com/damnitslanxx/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
          alt="Instagram Icon" 
        />
        _rheenz
      </a>
      <a href="https://github.com/RhenzD" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
          alt="Github Icon" 
        />
        RhenzD
      </a>
    </div>
  </section>
    </div>
  );
};

export default App;
