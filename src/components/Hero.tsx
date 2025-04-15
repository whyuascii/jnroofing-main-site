import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* Hero image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/roof-4125765_1920.jpg")',
                    filter: "brightness(40%)",
                }}
            />

            <div className="container-custom relative z-10 flex flex-col items-center text-center justify-center min-h-[85vh]">
                <div className="max-w-3xl space-y-6 py-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        DuraVerde J&N
                        <br />
                        Roofing and Construction
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-verde-400">
                        We Are Here To Help.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-8">
                        We are a full-service, professional roofing
                        installation, replacement and roof repair contractor
                        serving Central Florida Area. We offer free,
                        no-obligation roofing estimates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                        <a
                            href="#contact"
                            className="btn-primary flex items-center justify-center"
                        >
                            Request A Free Estimate Now!{" "}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 justify-center">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-verde-400">
                                8+
                            </span>
                            <span className="text-sm uppercase tracking-wider text-gray-300">
                                Years Experience
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-verde-400">
                                500+
                            </span>
                            <span className="text-sm uppercase tracking-wider text-gray-300">
                                Projects Completed
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Shield className="w-6 h-6 text-verde-400 mr-2" />
                            <span className="text-sm uppercase tracking-wider text-gray-300">
                                Licensed & Insured #CCC1325941
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Green CTA banner at bottom */}
            <div className="bg-verde-500 py-6 text-center w-full">
                <div className="container-custom">
                    <a
                        href="#contact"
                        className="text-xl md:text-2xl font-bold text-white hover:underline"
                    >
                        Request A Free Estimate Now!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
