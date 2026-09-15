import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';

function Main() {

  const cvLink =
    "https://drive.google.com/drive/folders/1aDFyDVDqK_K54rFG_NMBXduVYY8x-L6v?usp=sharing";

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AhmedTefa1" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-atef-7551a2205/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>

            {/* Download CV from Google Drive */}
            <a
              href={cvLink}
              target="_blank"
              rel="noreferrer"
              className="download-cv"
            >
              <DownloadIcon />
              <span>Download CV</span>
            </a>
          </div>

          <h1>Ahmed Atef</h1>
          <p>Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AhmedTefa1" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ahmed-atef-7551a2205/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href={cvLink} target="_blank" rel="noreferrer" className="download-cv">
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
