const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
                
                <div className="bg-white rounded-lg p-10 border border-gray-200">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold text-blue-600">LM</span>
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Laiba Mumtaz</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                I'm a Software Engineering student passionate about web development and creating 
                                digital solutions. I enjoy building modern, user-friendly applications that 
                                solve real-world problems.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                My focus is on frontend development using React.js and modern CSS frameworks. 
                                I believe in writing clean, maintainable code and continuously learning new technologies.
                            </p>
                            <p className="text-lg text-gray-600">
                                Currently working on my portfolio to showcase my projects and growth as a developer. 
                                Excited to share my journey with you soon!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;