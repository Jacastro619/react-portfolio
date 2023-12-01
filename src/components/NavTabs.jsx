import { Link, useLocation } from "react-router-dom";
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-link custom-nav active"
              : "nav-link custom-nav"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={
            currentPage === "/Projects"
              ? "nav-link custom-nav active"
              : "nav-link custom-nav"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link custom-nav active"
              : "nav-link custom-nav"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link custom-nav active"
              : "nav-link custom-nav"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
