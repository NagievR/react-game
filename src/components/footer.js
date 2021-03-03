import React from "react";
import logoGit from "../assets/icons/git.svg";

const Footer = () => {
  return(
    <footer className='footer'>
      <a rel="noreferrer" href="https://rs.school/react/" target="_blank">
        <img 
          className='link-icon' 
          src='https://rs.school/images/rs_school_js.svg' 
          alt='rs-school'
        />
      </a>
      <span className='prj-year'>2021</span>
      <a rel="noreferrer" href="https://github.com/NagievR" target="_blank">
        <img 
          className='link-icon' 
          src={logoGit} 
          alt='my-git'
        />
      </a>
    </footer>
  );
};

export default Footer;