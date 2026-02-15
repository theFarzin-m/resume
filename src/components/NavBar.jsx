import { FaArrowsSpin } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function NavBar({ changetheme }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="p-3 fs-4 navbar-brand custom-change-Theme"
          onClick={changetheme}
        >
          <FaArrowsSpin />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="title"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className="btn nav-link"
              >
                Title
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboute"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className="btn nav-link"
              >
                Aboute Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className="btn nav-link"
              >
                Expert in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className="btn nav-link"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
