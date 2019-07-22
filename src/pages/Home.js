import React from 'react';
import { withRouter } from 'react-router-dom';

import homeText from './Home/homeText';
import './Home/Home.css';

function Home() {
    return(
        <div className="home_container">
            <div id="objective">
                <h1>Objective</h1>
                <p>
                    {homeText.objective}
                </p>
                <h1>Strengths</h1>
                <p>
                    {homeText.strengths}
                </p>
            </div>
            <div id="skills">
                <h1>Skills</h1>
                <div>
                    {homeText.skills()}
                </div>
                <h1>Languages</h1>
                <div>
                    {homeText.languages()}
                </div>
                <h1>Other Details</h1>
                <div>
                    {homeText.otherDetails()}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);