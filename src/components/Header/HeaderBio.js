import React from 'react';
import './HeaderBio.css';
import { withRouter } from 'react-router-dom';

import profile_pic from '../../images/profile-pic.jpg';
import email_logo from '../../images/email.png';
import linkedin_logo from '../../images/linkedin.png';
import github_logo from '../../images/github.png';
import curriculum_logo from '../../images/curriculum.png';

function HeaderBio() {
    return(
        <div className="bio_container" id="header_bio">
            <div className="bio_pic">
                <img className="profile" src={profile_pic} alt="profile"/>
            </div>
            <div className="bio_info-container">
                <div className="bio_info">
                    <h1>Andreu Giménez Bolinches</h1>
                    <a href="mailto:angibo2@etsid.upv.es" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src={email_logo} alt="email"/>
                    </a>
                    <a href="https://www.linkedin.com/in/andreu-gimenez-bolinches-esdandreu/" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src={linkedin_logo} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/esdandreu" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src={github_logo} alt="github"/>
                    </a>
                    <a href="cv.esdandreu.es" rel="noopener noreferrer" target="_blank">
                       <img className="logo" src={curriculum_logo} alt="CV"/>
                    </a>
                    <h3>Aerospace Engineer | Programmer | Maker</h3>
                    <p>Self-learning skills and limited time problems resolution;
                        High English level;
                        Team management and social skills;
                        Quick adaptation to any programming language or software tool.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(HeaderBio);