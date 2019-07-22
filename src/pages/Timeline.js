import React from 'react';
import { withRouter } from 'react-router-dom';
import './Timeline/Timeline.css'

const TimelineContainer = ({children}) => (
    <div className="TimelineContainer">
      <div>
        {children}
      </div>
    </div>
  );

  const TimelineEventContainer = ({children}) => (
    <div className="TimelineEventContainer">
      <div>
        {children}
      </div>
    </div>
  );
  
const TimelinePeriodContainer = ({children}) => (
    <div className="TimelinePeriodContainer">
      <div>
        {children}
      </div>
    </div>
  );

function Timeline() {
    return(
        <div>
            <TimelineContainer>
                <TimelinePeriodContainer>
                    <p >Hola</p>
                </TimelinePeriodContainer>
                <TimelineEventContainer>
                    <p >Hola</p>
                </TimelineEventContainer>
            </TimelineContainer>
        </div>
    )
}

export default withRouter(Timeline);