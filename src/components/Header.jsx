import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Den4ik-Bro/learn_react_shop_project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
