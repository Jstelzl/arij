import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>nav</nav>
  );
}

export default NavTabs;

{/* <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid bg-dark justify-content-center">
        <div className="bg-dark" id="navbarNav">
          <ul className="nav bg-dark">
            <li className="nav-item bg-dark">
              <a
                href="#aboutMe"
                onClick={() => handlePageChange("About Me")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About Me" ? "nav-link active text-info text-opacity-75 bg-dark" : "nav-link text-secondary"
                }
              >
                about me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio" ? "nav-link active text-info text-opacity-75 bg-dark" : "nav-link text-secondary"
                }
              >
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active text-info text-opacity-75 bg-dark" : "nav-link text-secondary"
                }
              >
                resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active text-info text-opacity-75 bg-dark" : "nav-link text-secondary"
                }
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}