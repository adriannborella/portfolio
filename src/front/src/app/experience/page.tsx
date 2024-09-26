import React from 'react';

const ExperiencePage: React.FC = () => {
    return (
        <main>
            <h1>My Experience</h1>
            <p>
                I have over 6 years of experience as a Django developer, working on a variety of
                projects that include web applications, APIs, and more.
            </p>
            <h2>Technical Skills</h2>
            <ul>
                <li>Django & Python</li>
                <li>React & Next.js</li>
                <li>PostgreSQL & MySQL</li>
                <li>Docker, Nginx</li>
                <li>API Development</li>
            </ul>

            <h2>Work Experience</h2>
            <p>
                <strong>Company XYZ</strong> (2018-2023) - Senior Django Developer
                <br />
                Responsibilities included developing RESTful APIs, building microservices, and
                optimizing performance.
            </p>

            <p>
                <strong>Company ABC</strong> (2015-2018) - Full-Stack Developer
                <br />
                Built full-stack web applications using Django and React.
            </p>
        </main>
    );
};

export default ExperiencePage;
