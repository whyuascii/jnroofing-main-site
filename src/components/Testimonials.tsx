import { Star } from "lucide-react";
import StructuredData from "./SEO/StructuredData";

const testimonials = [
    {
        name: "June R",
        role: "Homeowner",
        content:
            "A very professional and reliable company. They showed up when promised and finished job in a timely fashion as scheduled. The owner was polite and knowledgeable. I would highly recommend this company to all!",
        rating: 5,
        location: "Orlando, FL",
    },
    {
        name: "Jennifer V.",
        role: "Homeowner",
        content:
            "Contacted DuraVerde J & N Roofing and Construction to replace the roof on my father's house and the did an amazing job. Not only did they give me a good price, but they were reliable and professional. I highly recommend them!",
        rating: 5,
        location: "Longwood, FL",
    },
    {
        name: "Lisa R.",
        role: "Homeowner",
        content: `They were very professional and responsive. It was a pleasure to work with them and I had a good choice of roof colors. They took care of everything and they said they were doing the job on a certain day the job was done on that day. I didn't have to chase them around a follow up on things. they took care of it all. Thank you Judy And Norm!`,
        rating: 5,
        location: "Tampa, FL",
    },
    {
        name: "Eddy V.",
        role: "Homeowner",
        content:
            "DuraVerde J&N Roofing and Construction did an outstanding job re-roofing my home with a new metal roof. Not only was the work completed quickly and professionally, but they went above and beyond by installing an exhaust vent for my future range hood, sealing and coating our sunroom, and thoroughly cleaning up all debris. To top it all off, they returned to install custom gutters, which really completed the look and helped protect the foundation. Their attention to detail and full-service approach made the entire experience smooth and stress-free. Highly recommended!",
        rating: 5,
        location: "Orlando, FL",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding bg-verde-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="mb-4 text-verde-800">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our
                        satisfied customers have to say about our roofing
                        services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-current text-yellow-500"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-verde-200 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-verde-700 font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role} •{" "}
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            {/* Add structured data for each review */}
                            <StructuredData
                                type="Review"
                                data={{
                                    author: testimonial.name,
                                    rating: testimonial.rating,
                                    content: testimonial.content,
                                    datePublished: "2024-04-01",
                                    publisher: {
                                        "@type": "Organization",
                                        name: "DuraVerde Roofing",
                                    },
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        Join our growing list of satisfied customers
                    </p>
                    <a href="#contact" className="btn-primary">
                        Get Your Free Estimate Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
