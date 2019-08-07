import React from 'react';
import stadler_image from './images/Stadler.jpg';

const EXPERIENCES = [
    {
        id: "experience-stadler",
        company: "Stadler",
        company_url: "https://www.stadlerrail.com/es/sobre-nosotros/centros/stadler-valencia-su/179/",
        period: "Sept 2018 - Feb 2019",
        image: stadler_image,
        position: "Software Engineer",
        highlights: "Matlab software development",
        description: () => (
            <p>I worked on my own in the recovery and improvement of an abandoned software tool
                that was not working since the original developer left the project. Therefore my
                task was primarily to identify and solve the problems that made the app crash as
                soon as it was initialized. After that I repaired the app functionalities that were
                not working properly and finally I added more functionalities while I made the app UI
                intuitive for inexperienced users.
                <br />
                This software tool is used in predictive train wheel maintenance. The disassembly of
                the train wheels is expensive and therefore the required inspections for the predictive
                maintenance are not economically viable. The software I worked on is connected to a hardware
                installed in the train that allows the inspection of the wheels without disassembling them.
            </p>
        ),
    },
];

export default EXPERIENCES