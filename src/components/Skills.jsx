const Skills = () => {
    const mainSkills = [
        "HTML5", "CSS3", "JavaScript", "React.js", 
        "Tailwind CSS", "Git & GitHub", "Responsive Design", "Web Development"
    ];

    const additionalSkills = [
        "Problem Solving", "UI/UX Basics", "VS Code", "Web Performance"
    ];

    return (
        <section id="skills" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
                
                {/* Main Skills */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Technologies I Use</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {mainSkills.map((skill, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                <span className="font-medium text-gray-800">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Skills */}
                <div>
                    <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Additional Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {additionalSkills.map((skill, index) => (
                            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                                <span className="font-medium text-blue-800">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;