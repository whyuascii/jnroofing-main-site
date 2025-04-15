import { Award, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import GoogleMap from "./GoogleMap";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Form submitted:", formData);
        toast.success(
            "Thank you for your message! We will get back to you soon."
        );
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="mb-4 text-verde-800">Contact Us</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get in touch with our team for a free consultation and
                        estimate. We're here to answer any questions you may
                        have about your roofing needs throughout Florida.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-verde-600 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-gray-600">
                                            Serving all of Florida
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-verde-600 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a
                                            href="tel:+14073000474"
                                            className="text-gray-600 hover:text-verde-600 transition-colors"
                                        >
                                            (407) 300-0474
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-5 h-5 text-verde-600 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a
                                            href="mailto:info@duraverderoofing.com"
                                            className="text-gray-600 hover:text-verde-600 transition-colors"
                                        >
                                            info@duraverderoofing.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-5 h-5 text-verde-600 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium">
                                            Working Hours
                                        </p>
                                        <p className="text-gray-600">
                                            Monday - Friday: 8AM - 6PM
                                        </p>
                                        <p className="text-gray-600">
                                            Saturday: 9AM - 3PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Award className="w-5 h-5 text-verde-600 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium">License</p>
                                        <p className="text-gray-600">
                                            #CCC1325941
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            Fully licensed and insured
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Get a Free Estimate
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Your Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde-600"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde-600"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Phone Number*
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde-600"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Service Needed
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde-600"
                                        >
                                            <option value="">
                                                Select a service
                                            </option>
                                            <option value="Residential Roofing">
                                                Residential Roofing
                                            </option>
                                            <option value="Commercial Roofing">
                                                Commercial Roofing
                                            </option>
                                            <option value="Roof Repairs">
                                                Roof Repairs
                                            </option>
                                            <option value="Roof Maintenance">
                                                Roof Maintenance
                                            </option>
                                            <option value="Roof Inspection">
                                                Roof Inspection
                                            </option>
                                            <option value="New Roofing">
                                                New Roofing
                                            </option>
                                            <option value="Re-Roofing">
                                                Re-Roofing
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verde-600"
                                        placeholder="Please share details about your project or questions..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center"
                                    >
                                        <Send className="w-4 h-4 mr-2" /> Submit
                                        Request
                                    </button>
                                </div>
                            </form>
                        </div>

                        <GoogleMap
                            title="Service Areas"
                            description="We provide roofing services throughout Central Florida"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
