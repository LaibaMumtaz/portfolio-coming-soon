const Navigation = () => {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold text-gray-800">
                        Portfolio
                    </div>
                    
                    <div className="flex space-x-6">
                        <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;