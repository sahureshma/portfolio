import React from 'react';
import  './Footer.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Footer() {
  return (
    <div className="footer_main">

     
      <div className="footer_icon"> <a href="https://www.linkedin.com/in/reshma-sahu-17b741280/" target="_LinkdIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/sahureshma" target="_GitHub">
            {" "}
            <GitHubIcon />
          </a>
           </div>
    </div>
  )
}