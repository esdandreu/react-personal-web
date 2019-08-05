import React, {Component} from 'react';
import './HeaderBio.css';
import { withRouter } from 'react-router-dom';

import pic_1 from '../../images/profile-pic.jpg';
import pic_2 from '../../images/profile-bike.jpg';
import pic_3 from '../../images/profile-graduate.jpg';
import pic_4 from '../../images/profile-NY.jpg';
import pic_5 from '../../images/profile-radio.jpg';

import email_logo from '../../images/email.png';
import linkedin_logo from '../../images/linkedin.png';
import github_logo from '../../images/github.png';
import curriculum_logo from '../../images/curriculum.png';

const IMGS = [
    pic_1,
    pic_2,
    pic_3,
    pic_4,
    pic_5,
  ];

class HeaderBio extends Component {
    state = { imgIndex: 0, fadeIn: true };
    fade_duration = 700;
    image_duration = 6*1000;

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), this.image_duration-this.fade_duration);
        this.animateImages();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateImages = () => {
        this.titleInterval = setInterval(() => {
            const imgIndex = (this.state.imgIndex + 1) % IMGS.length;
            this.setState({ imgIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), this.image_duration-this.fade_duration);
        }, this.image_duration);
    }

    render(){
        const { fadeIn, imgIndex } = this.state;
        const profile_pic = IMGS[imgIndex];
        return(
            <div className="bio_container" id="header_bio">
                <div className="bio_pic">
                    <img className={fadeIn ? 'img-fade-in' : 'img-fade-out'} src={profile_pic} alt="profile"/>
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
                        <a href="http://cv.esdandreu.es" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src={curriculum_logo} alt="CV"/>
                        </a>
                        <h3>Aerospace Engineer | Programmer | Maker</h3>
                        <p>Self-learning skills and limited time problem solving;
                            High English level;
                            Team management and social skills;
                            Quick adaptation to any programming language or software tool.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderBio);