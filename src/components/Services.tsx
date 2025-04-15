import { Building2, Droplet, Home, Shield, Wrench } from "lucide-react";

const services = [
    {
        title: "Re-Roof",
        description:
            "While all roofs have limited lifespans, DuraVerde Roofing will always work to ensure you get the most out of your current roof. Should damage or wear be extensive or beyond repair, a replacement will be proposed. Our team can guide you in selecting the best roof type for your home or business.",
        icon: Home,
        image: "/images/shingle-roof.jpg",
        altText: "Roof with shingles on it that has been replaced",
    },
    {
        title: "New Roof",
        description:
            "DuraVerde knows that you want your new roof to be durable as well as beautiful. With our expertise and quality roofing products, you can rest assured that your residential roofing project will be all you hope for and more! We have the organization, tools, and knowledge to ensure your new roof is completed on time and within budget.",
        icon: Building2,
        image: "/images/newroof.jpg",
        altText: "A brand new roof",
    },
    {
        title: "Repairs",
        description:
            "Leaks, holes, and missing shingles can happen especially after a strong Florida storm. DuraVerde is here to help ensure you stay dry. We'll get the job done efficiently and correctly, ensuring your roofing problems are taken care of with precision for long-lasting results.",
        icon: Wrench,
        image: "/images/repairshome.jpg",
        altText: "Roof undergoing repairs",
    },
    {
        title: "Gutters",
        description:
            "Properly installed gutters keep damaging water away from your roof, house, and foundation. DuraVerde has a full-service, custom-made rain gutter and downspout team offering hand-crafted, seamless and pre-painted aluminum including custom flashings and various gutter profiles.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1470&auto=format&fit=crop",
        altText: "Gutters attached to a home",
    },
    {
        title: "Roof Coating & Sealing",
        description:
            "Extend the life of your existing roof with protective coatings that reflect heat, resist water, and improve energy efficiency. Ideal for flat or low-slope commercial roofs.",
        icon: Droplet,
        altText: "Worker applying white roof sealant",
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="mb-4 text-verde-800">
                        Our Roofing Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer a comprehensive range of roofing services
                        throughout Florida. Our experienced team ensures quality
                        workmanship and customer satisfaction on every project,
                        whether residential or commercial.
                    </p>
                </div>

                {/* Main featured services with optimized images */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {services.slice(0, 3).map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {service.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.altText}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                        width="470"
                                        height="352"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <service.icon className="w-6 h-6 text-verde-600 mr-2" />
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.slice(3).map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-verde-100 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="w-8 h-8 text-verde-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="btn-primary inline-block">
                        Request a Free Estimate
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
