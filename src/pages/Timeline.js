import React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Timeline/Timeline.css'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import education from './Timeline/education';
import qualifications from './Timeline/qualifications';

class Timeline extends Component {
  render() {
    const is_education = "#education".localeCompare(this.props.location.hash)+1;
    const enable_qualifications_hyperlinks = !(is_education && (window.innerWidth < 500));
    const enable_link_to_education = (!is_education && (window.innerWidth < 500));
    console.log(enable_link_to_education)
    return(
        <div className="timeline-container">
          <div className="grid-container" id={is_education ? "education-grid" : "qualifications-grid"}>
            <div className="timeline-year">2013</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2013() : <NavLink to='/timeline#qualifications'>{qualifications.y2013()}</NavLink>}
            </div>
            <div className="timeline_education-highschool" id={enable_link_to_education ? "qualifications-education_items" : ""}>
              {enable_link_to_education ? <NavLink to='/timeline#education'>{education.highschool()}</NavLink> : education.highschool()}
            </div>
            <div className="timeline-year">2014</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2014() : <NavLink to='/timeline#qualifications'>{qualifications.y2014()}</NavLink>}
            </div>
            <div className="timeline-year">2015</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2015() : <NavLink to='/timeline#qualifications'>{qualifications.y2015()}</NavLink>}
            </div>
            <div className="timeline_education-valencia" id={enable_link_to_education ? "qualifications-education_items" : ""}>
              {enable_link_to_education ? <NavLink to='/timeline#education'>{education.valencia()}</NavLink> : education.valencia()}
            </div>
            <div className="timeline-year">2016</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2016() : <NavLink to='/timeline#qualifications'>{qualifications.y2016_no_link()}</NavLink>}
            </div>
            <div className="timeline-year">2017</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2017() : <NavLink to='/timeline#qualifications'>{qualifications.y2017_no_link()}</NavLink>}
            </div>
            <div className="timeline_education-exchangeUSA" id={enable_link_to_education ? "qualifications-education_items" : ""}>
              {enable_link_to_education ? <NavLink to='/timeline#education'>{education.USA()}</NavLink> : education.USA()}
            </div>
            <div className="timeline-year">2018</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2018() : <NavLink to='/timeline#qualifications'>{qualifications.y2018_no_link()}</NavLink>}
            </div>
            <div className="timeline_education-exchangeAMS" id={enable_link_to_education ? "qualifications-education_items" : ""}>
              {enable_link_to_education ? <NavLink to='/timeline#education'>{education.amsterdam()}</NavLink> : education.amsterdam()}
            </div>
            <div className="timeline-year">2019</div>
            <div className="timeline_qualifications-container">
              {enable_qualifications_hyperlinks ? qualifications.y2019() : <NavLink to='/timeline#qualifications'>{qualifications.y2019_no_link()}</NavLink>}
            </div>
          </div>
        </div>
    )

  }
}

export default withRouter(Timeline);