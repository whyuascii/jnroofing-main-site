import { Building, Home, Warehouse } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const galleryItems = [
    {
        title: "Shingle",
        image: "./images/shingle-roof.jpg",
        description:
            "Cost-effective • Durable • Variety of Colors and Styles • Suitable to Wide Range of Temperatures",
        alt: "A House with shingles type of roof",
        icon: Home,
    },
    {
        title: "Metal",
        image: "./images/metal-roof.jpg",
        description:
            "Low Maintenance • Environmentally Friendly • Energy Efficient • Can Be Repainted",
        alt: "Metal Roof",
        icon: Warehouse,
    },
    {
        title: "Tile",
        image: "./images/tile-roof.jpg",
        description:
            "Durable • Variety of Colors and Styles • Maintain Color • Limited Maintenance",
        alt: "Tile Roof",
        icon: Building,
    },
    {
        title: "Synthetic Tile",
        image: "./images/synthetic.jpg",
        description:
            "Natural Appearance • Fire Resistance • Low Maintenance • Long Life Expectancy",
        alt: "Slate Roof",
        icon: Home,
    },
    {
        title: "TPO",
        image: "./images/tpo.jpg",
        description:
            "Cost-effective • Durable • Energy Efficient • Corrosion and Mold Resistant",
        alt: "TPO Roof",
        icon: Building,
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="mb-4 text-verde-800">Our Roofing Types</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our comprehensive range of roofing solutions
                        tailored to meet your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {galleryItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card
                                key={index}
                                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-0 relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-white">
                                        <div className="flex items-center gap-2">
                                            <Icon className="w-6 h-6" />
                                            <h3 className="font-semibold text-xl">
                                                {item.title} Roof
                                            </h3>
                                        </div>
                                        <p className="text-sm text-white/90 mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="btn-primary">
                        Discuss Your Roofing Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
