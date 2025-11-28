export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">LiveHindustan Clone</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
