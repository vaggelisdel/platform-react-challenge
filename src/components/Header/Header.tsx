
import { Link, useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky-top bg-white border-bottom">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <div className="position-relative" style={{ width: '32px', height: '32px' }}>
            <div className="position-absolute" style={{ top: '7px', left: '4px', right: '4px', bottom: '4px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="fs-3">😺</span>
            </div>
          </div>
          <span className="ms-2 fw-semibold fs-5">Purfect Gallery</span>
        </Link>

        <nav>
          <ul className="nav">
            <HeaderLink to="/" icon="grid" label="Discover" />
            <HeaderLink to="/breeds" icon="list" label="Breeds" />
            <HeaderLink to="/favorites" icon="heart" label="Favorites" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
