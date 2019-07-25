import React from 'react';

const education = {
    highschool: () => (
        <div>
            <h3>Highschool</h3>
            <h4>2013-2015</h4>
            <p>I.E.S. Sivera Font, Canals, with honors</p>
        </div>
    ),
    valencia: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>2015-2019</h4>
            <h4>BSc degree in the ARA group</h4>
            <p>Universitat Politècnica de Valencia</p>
            <p>Spain</p>
        </div>
    ),
    USA: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>Spring 2018</h4>
            <h4>Exchange Student</h4>
            <p>Embry-Riddle Aeronautical University</p>
            <p>USA</p>
        </div>
    ),
    amsterdam: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>Spring 2019</h4>
            <h4>Exchange Student</h4>
            <p>Amsterdam Univesity of Applied Sciences</p>
            <p>Netherlands</p>
        </div>
    ),
};

export default education;