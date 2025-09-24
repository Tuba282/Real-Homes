
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = ['Home', 'Half Map Layout', 'Blog', 'List Layout', 'Grid Layout', 'Contact'];
const tags = ['awareness', 'contemporary', 'economy living', 'image post', 'interior', 'living rooms', 'studio', 'trendy'];

export default function Footer() {
    return (
        <footer className=" bg-[var(--blue)] text-white py-12 px-6 md:px-16">
            <div className="w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo & Tagline */}
                    <div>
                        <img src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/rh-footer-logo.png" alt="Real Homes" className="w-32 mb-4" />
                        <p className="text-xs text-blue-200">Simply #1 Real Estate Theme</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-blue-200">
                            {quickLinks.map((link, idx) => (
                                <li key={idx} className="hover:text-white text-xs cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-blue-200 text-xs">
                            <li className="flex text-xs items-start gap-2"><FaMapMarkerAlt className="mt-1" />3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</li>
                            <li className="flex text-xs items-center gap-2"><FaPhoneAlt />23-456-7890</li>
                            <li className="flex text-xs items-center gap-2"><FaEnvelope />robot@inspirythemes.com</li>
                        </ul>
                    </div>

                    {/* Tags */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, idx) => (
                                <span key={idx} className="hover:bg-[var(--blue)] text-shadow-xs text-xs px-3 py-1 rounded bg-blue-300 cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 flex justify-between items-center border-t border-blue-700 pt-6 text-center text-xs text-blue-300">
                    <p>© 2015. All rights reserved.</p>
                    <p>Designed by Tuba Jan</p>
                </div>
            </div>
        </footer>
    );
}