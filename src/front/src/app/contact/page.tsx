import React from 'react';
import RootLayout from '../layout';

const ContactPage: React.FC = () => {
    return (
        <main>
            <h1>Contact Me</h1>
            <p>
                Feel free to reach out if you'd like to connect with me for potential job
                opportunities or collaborations!
            </p>
            <p>
                <strong>Email:</strong> your-email@example.com
            </p>
            <p>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
            </p>
            <p>
                <strong>GitHub:</strong> <a href="https://github.com/yourusername">github.com/yourusername</a>
            </p>
        </main>
    );
};

export default ContactPage;
