const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                
                <div className="flex justify-center space-x-6 mb-8">
                    {[
                        { name: "Email", icon: "📧", link: "mailto:laiba@example.com" },
                        { name: "LinkedIn", icon: "🔗", link: "#" },
                        { name: "GitHub", icon: "💻", link: "#" },
                        { name: "Resume", icon: "📄", link: "#" }
                    ].map((item, index) => (
                        <a 
                            key={index}
                            href={item.link} 
                            className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition duration-300"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-xl mb-1">{item.icon}</span>
                                <span className="text-sm">{item.name}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-400">
                        &copy; 2024 Laiba Mumtaz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;