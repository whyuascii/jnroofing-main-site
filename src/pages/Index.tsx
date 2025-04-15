import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SEOHead from "../components/SEO/SEOHead";
import StructuredData from "../components/SEO/StructuredData";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Index = () => {
    const faqData = {
        questions: [
            {
                question: "How long does a typical roof replacement take?",
                answer: "Most residential roof replacements can be completed in 1-3 days, depending on the size of your home and complexity of the job.",
            },
            {
                question: "What types of roofing materials do you offer?",
                answer: "We offer a wide range of roofing materials including asphalt shingles, metal roofing, tile, and flat roof systems to suit your needs and budget.",
            },
            {
                question: "Do you offer free estimates?",
                answer: "Yes, we provide free, no-obligation estimates for all roofing projects throughout Florida.",
            },
            {
                question: "Are you licensed and insured?",
                answer: "Yes, DuraVerde Roofing is fully licensed (#CCC1325941) and insured in the state of Florida.",
            },
            {
                question: "How long should my roof last?",
                answer: "The lifespan of your roof depends on the material - asphalt shingles typically last 20-25 years, metal roofing 40-70 years, and tile roofing can last 50+ years with proper maintenance.",
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <SEOHead
                title="Professional Roofing Services in Florida"
                description="DuraVerde J&N Roofing provides top-quality residential and commercial roofing services throughout Florida. Get your free estimate today!"
                keywords="Florida roofing, roof repair, roof installation, commercial roofing, residential roofing"
                location="Florida"
            />

            {/* Structured Data */}
            <StructuredData
                type="LocalBusiness"
                data={{
                    sameAs: [
                        "https://www.facebook.com/duraverderoofing",
                        "https://www.instagram.com/duraverderoofing",
                    ],
                }}
            />

            <StructuredData type="FAQPage" data={faqData} />

            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Gallery />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
