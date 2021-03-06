import React from "react";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#!"> Start Bootstrap</a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" > <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
             
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home </a>
              </li>
              
              <li className="nav-item"> 
                <a className="nav-link" href="#!">About</a>
              </li>

              <li className="nav-item dropdown">
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                  <li>
                    <a className="dropdown-item" href="#!"> All Products</a>
                  </li>
                  <li> 
                  <hr className="dropdown-divider" />{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">Popular Items</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">New Arrivals</a>
                  </li>
               
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <header className="bg-dark py-3">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0"></p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
