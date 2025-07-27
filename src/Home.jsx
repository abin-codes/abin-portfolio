import React from 'react';
import './home.css';
import './button.css';
import profilePic from './assets/profile.jpg'; // You can use any image

const Home = () => {
  return (
    <>

    {/* myself intro - Start */}  
    <section className="home-container">
      <div className="home-left">
        <h2 className="section-heading">Who am I?</h2>
        <p className="about-text">
          I'm Abin Shaju, a passionate web developer and creative technologist dedicated to building engaging, responsive, and performance-driven websites. I specialize in crafting intuitive user interfaces that deliver smooth digital experiences. My technical toolkit includes frontend development and automation testing using Selenium, ensuring both functionality and reliability.
  Beyond code, I channel my creativity into visual design — creating compelling posters, promotional banners, business cards, and digital branding assets. With a strong sense of design and attention to detail, I blend technology and creativity to deliver impactful results.
  <br></br>
  <button class="button2">More About Me</button>
        </p>
        
      </div>
      <div className="home-right">
        <img src={profilePic} alt="Abin Shaju" className="profile-image" />
      </div>
    </section>

    {/* myself intro - End */} 

{/* 3 PROJECT LIST - Start */}

    <section className="projects-section">
  <h2 className="projects-heading">Projects</h2>
  <div className="card-wrapper">

    {/* Project 1 - Crystal Cove Oasis */}
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src="/src/assets/Crystal cove oasis.png" alt="Crystal Cove" />
        </div>
        <div className="content">
          <p className="heading">Crystal Cove</p>
          <p>Website for a luxurious beachfront resort to showcase facilities and ambiance.</p>
        </div>
      </div>
      <p className="project-name">Crystal Cove Oasis</p>
    </div>

    {/* Project 2 - MetroGlo */}
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src="/src/assets/metroglo.jpg" alt="Metroglo" />
        </div>
        <div className="content">
          <p className="heading">MetroGlo</p>
          <p>Ad management platform for digital billboards, with approval-based publishing.</p>
        </div>
      </div>
      <p className="project-name">MetroGlo</p>
    </div>

    {/* Project 3 - CampusSpace */}
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src="/src/assets/campusspace.jpg" alt="CampusSpace" />
        </div>
        <div className="content">
          <p className="heading">CampusSpace</p>
          <p>Student portal to schedule and request approval for campus event venues.</p>
        </div>
      </div>
      <p className="project-name">CampusSpace</p>
    </div>

  </div>

  
</section>
<button className='button-style project-button'  style={{ display: 'block', margin: '2rem auto 0 auto', textAlign: 'center' }} >More Projects</button>

{/* 3 PROJECT LIST - End */}

{/* CONTACT SECTION - Start */}
<section className="contact-section">
  <div className="contact-container">
    <div className="contact-left">
      <h2 className="contact-heading">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number (Optional)" />
        <textarea placeholder="Your Message..." rows="5" required></textarea>
        <button className="button-style contact-button" type="submit">Submit</button>
      </form>

      <div className="contact-socials">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:abinshaju.tech@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>

    <div className="contact-right">
      <h3>Let’s Work Together</h3>
      <p className="expanded-text">
        I'm genuinely passionate about web design and development. Whether you have an idea,
        a project, or a dream website in mind, I’d love to help you bring it to life.
        Reach out through this form or message me on my socials below. I promise to handle
        your work with the same care and dedication as my own. Your vision deserves to shine
        online, and I am here to make that happen through clean code, modern design, and
        open communication. Let’s build something awesome together!
      </p>
    </div>
  </div>
</section>
{/* CONTACT SECTION - End */}


{/* FOOTER SECTION - Start */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <h4>© {new Date().getFullYear()} Abin Shaju</h4>
      <p>Designed and Developed with ❤️</p>
      <small className="credit">
        Toggle button UI inspired by designs from <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" >uiverse.io</a>
      </small>
    </div>

    <div className="footer-center">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-right">
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/abinshaju0526/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:yourmail@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

{/* FOOTER SECTION - End */}


   </> 
  ); 
};

export default Home;