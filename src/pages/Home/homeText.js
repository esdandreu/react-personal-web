import React from 'react';

const homeText = {
    objective: "Join a company in the I+D Aerospace sector with projects like the implementation of “AI” and “Computer Vision” to build autonomous drones. And to save the world, obviously.",
    strengths: "Self-learning skills and limited time problems resolution due to my experience in several hackathons and competitions; High English level because of my continuous studies in the “ARA” (High Academic Performance) group of Aerospace Engineering that is taught in English and my exchange experiences; Team management and social skills because of my sportive formation as a handball player and my participation in the Makers UPV association; Quick adaptation to any programming language or software tool due to my electronics, code developer and 3D design hobbies.",
    skills: () => (
        <div className="home_element-container">
            <div className="home_element-set">
                <h3>Programming</h3>
                <ul>
                    <li>C (raw and Arduino)</li>
                    <li>C++</li>
                    <li>Matlab</li>
                    <li>Python</li>
                    <li>Mathematica</li>
                    <li>VBA</li>
                    <li>Javascript</li>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CAD</h3>
                <ul>
                    <li>Fusion 360</li>
                    <li>SolidWorks</li>
                    <li>NX</li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CAM</h3>
                <ul>
                    <li>Fusion 360</li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CFD</h3>
                <ul>
                    <li>Ansys Fluent</li>
                    <li>Star-CCM+</li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>FEM</h3>
                <ul>
                    <li>Ansys Mechanical</li>
                </ul>
            </div>
        </div>
    ),
    languages: () => (
        <div className="home_element-container">
            <div className="home_element-set">
                <ul>
                    <li>Spanish (Native)</li>
                    <li>Catalonian (Native) C1 certificate</li>
                    <li>English (Working Knowledge)</li>
                    <li>German (Basic competence)</li>
                </ul>
            </div>
        </div>
    ),
    otherDetails: () => (
        <div className="home_element-container">
            <div className="home_element-set">
                <ul>
                    <li>Car Driving License since April 2015</li>
                    <li>Handball player in the Levante-Marni Team (12th team
                        in the Vezprem Cell Cup 2015 tournament (Hungary),
                        1st of the Spanish assistants; 2nd team in U-24 tournament
                        Generation Handball 2016 (Denmark))</li>
                </ul>
            </div>
        </div>
    ),
};

export default homeText;