import React from "react";
import logo from "./img/sticky-note.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <a
            href="https://irfanshadikrishad.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
