import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a href="" className="navbar-brand">
            <img
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              alt=""
              className="weblogo"
            />
            <img
              src="https://pn-paul.netlify.app/image/logo-for-mobile.png"
              alt=""
              className="moblogo"
            />
          </a>

          {/* mobile view start */}
         
            <button className="navbar-toggler" data-bs-target="#pn" data-bs-toggle="collapse"  >
                <span className="navbar-toggler-icon" ></span>
            </button>

          {/* mobile view end */}
          
          {/* menu start */}
          <div className="menu navbar-collapse collapse " id="pn">
            <ul className="navbar-nav text-center ms-auto ">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="brand" className="nav-link">
                  Brand
                </Link>
              </li>
              <li>
                <Link to="ourteam" className="nav-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="pressrelease" className="nav-link">
                  Press Release
                </Link>
              </li>
              <li>
                <Link to="contact" className="nav-link">
                  contact
                </Link>
              </li>
              <li>
                <Link to="careers" className="nav-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* container-fluid end */}
      </nav>
    </>
  );
}

export default Header