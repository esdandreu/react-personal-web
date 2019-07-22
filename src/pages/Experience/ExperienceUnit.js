import React from 'react';

function ExperienceUnit(props) {
    const {company, company_url, period, image, position, highlights, description} = props.experience;

    return(
        <div>
            <div className="experience-image">
                <img src={image} alt={company} />
            </div>
            <div className="experience_container-title">
                <div className="experience-title">
                    <h2>
                        <a href={company_url} rel="noopener noreferrer" target="_blank">
                            {company}
                        </a>
                    </h2>
                    <span>
                        {period}
                    </span>
                    <h3>
                        {position}
                    </h3>
                </div>
            </div>
            <div className="experience-content">
                <h4>
                    {highlights}
                </h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ExperienceUnit;