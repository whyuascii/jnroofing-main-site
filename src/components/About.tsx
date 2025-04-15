import { Heart, Shield, Target, Users } from "lucide-react";

const features = [
    {
        title: "Licensed & Insured",
        description:
            "#CCC1325941 - We are a licensed and fully insured company meaning you are in safe hands.",
        icon: Shield,
    },
    {
        title: "Expert Team",
        description:
            "Our qualified team evaluates your roof and assists in making the appropriate choice of materials and applications.",
        icon: Users,
    },
    {
        title: "Quality First",
        description:
            "We believe in doing it right the first time. Integrity and quality workmanship are our top priorities.",
        icon: Target,
    },
    {
        title: "People-Focused",
        description:
            "We put our people first and treat every project as if we owned it ourselves.",
        icon: Heart,
    },
];

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="./images/commercial.jpg"
                                alt="Roofing professionals at work"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="mb-4 text-verde-800">
                                About DuraVerde J&N Roofing and Construction
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                DuraVerde J&N Roofing and Construction is a
                                locally owned full-service Florida Contractor
                                providing commercial and residential Roofing
                                Service. We are dedicated to the evaluation,
                                installation and maintenance of your roof. Our
                                team are qualified to evaluate your roof and
                                will assist you in making the appropriate choice
                                of materials and applications.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                We service commercial and residential roofs with
                                complete knowledge and expertise. Our experience
                                and craftsmanship set us apart from our
                                competition. We specialize in new roofs,
                                re-roofs, tear offs, leaks repairs, and roof
                                decking replacement. We also offer roof
                                inspections, roof repairs, and variety of
                                roofing types including asphalt roofs, flat
                                roofs, hip roofs, and gable roofs.
                            </p>
                            <p className="text-lg text-gray-700">
                                In an industry known for cutting corners, we
                                strive to always be the company that puts our
                                people first! Every member of the DuraVerde team
                                treats the company and its clients as if they
                                owned it. Our core philosophy is that integrity
                                is longevity - we'd much rather do it right the
                                first time and never have to worry about it!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                                >
                                    <div className="mr-4 bg-verde-100 p-3 rounded-full">
                                        <feature.icon className="w-6 h-6 text-verde-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a href="#contact" className="btn-primary">
                                Request a Free Estimate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
