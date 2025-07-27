import './header.css';
import './toggle.css';
import { useEffect, useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {/* THUMBNAIL */}
      <div className="thumbnail">
        <div className="thumbnail-content">
          <div className="thumbnail-left">
            <img src="/src/assets/Profile.jpg" alt="Abin" className="profile-pic" />
          </div>
          <div className="thumbnail-right">
            <h1>Welcome to My Portfolio</h1>
          </div>
        </div>

        <div className="thumbnail-bg">
          <div className="circle-3d"></div>
          <div className="square-3d"></div>
          <div className="triangle-3d"></div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav>
        <div className="nav-left">
          <span className="brand">Brainwaves in Progress</span>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-right ${menuOpen ? 'show' : ''}`}>
          <a href="/">Home</a>
          <a href="#projects">Projects</a>
          <a href="#designs">Designs</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

          {/* TOGGLE BUTTON */}
          <label className="switch">
            <input
              id="input"
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <div className="slider round">
              <svg className="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                <circle fill="#FFDA44" cx="248" cy="248" r="92"/>
                <g fill="#FFDA44">
                  <path d="M248 152c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 176c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
                  <path d="M248 0h-16v96h16V0zm0 400h-16v96h16v-96zM0 232v16h96v-16H0zm400 0v16h96v-16h-96zM80.5 80.5l-11.3 11.3L160 183.6l11.3-11.3L80.5 80.5zM334.7 334.7l-11.3 11.3 91.8 91.8 11.3-11.3-91.8-91.8zM80.5 415.5l91.8-91.8-11.3-11.3L69.2 404.2l11.3 11.3zM334.7 161.3L426.5 69.5l-11.3-11.3-91.8 91.8 11.3 11.3z"/>
                </g>
              </svg>
              <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#f4f4f4" d="M279.135 512c-49.33 0-97.276-14.854-137.803-42.946C79.958 434.952 44.447 386.788 28.78 331.264c-15.667-55.525-6.44-114.508 25.876-162.46 27.964-41.445 68.946-72.386 117.542-87.87 8.383-2.654 17.155 1.232 21.028 9.18 3.873 7.948 1.626 17.462-5.422 23.39-44.374 36.885-63.845 95.79-50.534 150.292 13.31 54.501 56.257 97.663 111.331 110.802 55.074 13.139 112.779-4.624 150.994-46.259 5.944-6.397 15.494-8.372 23.282-4.812 7.788 3.561 12.418 11.586 11.584 20.044-7.173 73.286-51.923 137.883-120.069 168.36C331.883 506.51 305.746 512 279.135 512z"/>
              </svg>
            </div>
          </label>
        </div>
      </nav>
    </>
  );
}

export default Header;
