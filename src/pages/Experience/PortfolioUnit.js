import React from 'react';

function PortfolioUnit(props) {
    const {title, project_url, period, image, highlights, description} = props.project;

    return(
        <div className="project">
            <div className="poject-image">
                <img src={image} alt={title} />
            </div>
            <div className="poject_container">
                <div>
                    <div className="poject-title">
                        <h2>
                            <a href={project_url} rel="noopener noreferrer" target="_blank">
                                {title}
                            </a>
                        </h2>
                        <span>
                            {period}
                        </span>
                    </div>
                </div>
                <div className="poject-content">
                    <h4>
                        {highlights}
                    </h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioUnit;