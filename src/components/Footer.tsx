import { ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Dura Verde Roofing
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Professional roofing services for residential and
                            commercial properties. Your trusted roofing partner
                            since 2008.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-white flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" /> Our
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" />{" "}
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-gray-400 hover:text-white flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" />{" "}
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="text-gray-400 hover:text-white flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" />{" "}
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-white flex items-center"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2" />{" "}
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-gray-800 text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-gray-500">
                        © {currentYear} Dura Verde Roofing. All rights reserved.
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-white mr-4"
                        >
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
