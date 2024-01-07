import React from "react";
import git  from './git.jpg';

function Footer() {
  return (
      <footer className="page-footer blue-grey darken-1">
       <div className="footer-content">
       <img src={git} alt="git" /> 
      <p>https://github.com/gowthamselvaraj88/DLK-Tech</p>
       </div>
      </footer>
  );
}

export default Footer;
