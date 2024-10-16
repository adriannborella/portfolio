import React from 'react';

const ExperiencePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                My Experience
            </h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-lg text-gray-600 text-center">
                    I have over 6 years of experience in web development, primarily
                    focusing on Django and React. Below is an overview of my technical
                    skills and work history.
                </p>
            </section>

            {/* Skills Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">Django & Python</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">React & Next.js</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">PostgreSQL & MySQL</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">Docker & Nginx</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">API Development</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-700 font-medium">HTML & CSS</p>
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Work Experience
                </h2>
                <div className="space-y-8">
                    {/* Job 1 */}
                    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Senior Django Developer
                        </h3>
                        <p className="text-sm text-gray-500">Company XYZ | 2018 - 2023</p>
                        <ul className="list-disc list-inside text-gray-700 mt-4">
                            <li>Developed and maintained large-scale web applications.</li>
                            <li>
                                Implemented RESTful APIs and integrated microservices with Django.
                            </li>
                            <li>
                                Improved application performance by optimizing database queries
                                and reducing page load times.
                            </li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Full-Stack Developer
                        </h3>
                        <p className="text-sm text-gray-500">Company ABC | 2015 - 2018</p>
                        <ul className="list-disc list-inside text-gray-700 mt-4">
                            <li>
                                Built full-stack web applications using Django, React, and PostgreSQL.
                            </li>
                            <li>
                                Led the migration of legacy systems to modern web technologies.
                            </li>
                            <li>Worked closely with UI/UX teams to deliver a seamless user experience.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperiencePage;
