import logo from "../assets/logo-removebg-preview.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex bg-black flex-shrink-0 items-center">
        <img src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
      </div>
      <div className="space-x-4">
      <button
          onClick={() => scrollToSection('about')}
          className="px-4 py-2 bg-transparent transition duration-300"
        >
          About Me
        </button>

        <button
          onClick={() => scrollToSection('technologies')}
          className="px-4 py-2 bg-transparent transition duration-300"
        >
          Technologies
        </button>

        <button
          onClick={() => scrollToSection('experience')}
          className="px-4 py-2 bg-transparent transition duration-300"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="px-4 py-2 bg-transparent transition duration-300"
        >
          Projects
        </button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a href="https://www.linkedin.com/in/ruba-vijayan-199ab2281" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/RubaVijayan" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
</div>

    </nav>
  );
}

export default Navbar;
