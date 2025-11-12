const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-white flex items-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Portfolio Coming Soon
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    I'm working on something amazing. My portfolio website will be launched soon to showcase my projects and skills.
                </p>
                
                {/* Countdown without lines - just boxes */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { number: "14", label: "Days" },
                            { number: "06", label: "Hours" },
                            { number: "45", label: "Minutes" },
                            { number: "22", label: "Seconds" }
                        ].map((item, index) => (
                            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-blue-600">{item.number}</div>
                                <div className="text-sm text-gray-500">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                    Get Notified at Launch
                </button>
            </div>
        </section>
    );
};

export default Hero;