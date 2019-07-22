import React from 'react';
import { withRouter } from 'react-router-dom';
import './Timeline/Timeline.css'

import education from './Timeline/education';
import qualifications from './Timeline/qualifications';

function Timeline() {
    return(
        <div className="timeline-container">
           <div className="grid-container" >
            <div className="timeline-year">2013</div>
            <div className="timeline_qualifications-container">{qualifications.y2013()}</div>
            <div className="timeline_education-highschool">{education.highschool()}</div>
            <div className="timeline-year">2014</div>
            <div className="timeline_qualifications-container">{qualifications.y2014()}</div>
            <div className="timeline-year">2015</div>
            <div className="timeline_qualifications-container">{qualifications.y2015()}</div>
            <div className="timeline_education-valencia">{education.valencia()}</div>
            <div className="timeline-year">2016</div>
            <div className="timeline_qualifications-container">{qualifications.y2016()}</div>
            <div className="timeline-year">2017</div>
            <div className="timeline_qualifications-container">{qualifications.y2017()}</div>
            <div className="timeline_education-exchange">{education.USA()}</div>
            <div> </div>
            <div className="timeline-year">2018</div>
            <div className="timeline_qualifications-container">{qualifications.y2018()}</div>
            <div> </div>
            <div className="timeline_education-exchange">{education.amsterdam()}</div>
            <div className="timeline-year">2019</div>
            <div className="timeline_qualifications-container">{qualifications.y2019()}</div>
          </div> 
        </div>
    )
}

export default withRouter(Timeline);