import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaChevronRight,
  FaTools,
  FaIndustry,
  FaShippingFast,
  FaCertificate,
} from "react-icons/fa";
import { MdSecurity, MdEngineering } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      name: "Joseph Mukasa",
      company: "Kampala Construction Ltd",
      text: "East African Chains has been our trusted supplier for over 5 years. Their products are durable and their service is exceptional.",
      role: "Project Manager",
    },
    {
      name: "Sarah Nantongo",
      company: "Uganda Industrial Group",
      text: "The quality of chains and industrial components we receive has always been top-notch. Highly recommended for all industrial needs.",
      role: "Procurement Director",
    },
    {
      name: "David Ochieng",
      company: "Mombasa Port Authority",
      text: "From marine-grade chains to specialized industrial components, they've never disappointed us with their quality and timely delivery.",
      role: "Operations Head",
    },
  ];

  // Products data
  const featuredProducts = [
    {
      name: "Industrial Lifting Chains",
      description:
        "High-tensile strength chains for heavy-duty lifting applications",
      image: "/chains.jpg",
    },
    {
      name: "Conveyor Chains",
      description:
        "Durable conveyor chains designed for continuous operation in harsh environments",
      image: "/empty-conveyor.jpg",
    },
    {
      name: "Marine Grade Chains",
      description:
        "Corrosion-resistant chains specifically designed for marine applications",
      image: "/image1.jpg",
    },
    {
      name: "Agricultural Chains",
      description: "Reliable chains for agricultural machinery and equipment",
      image: "/GalvanizedChain _ Princess Auto.jpg",
    },
  ];

  // Hero slide data
  const heroSlides = [
    {
      title: "East Africa's Premier Chain Supplier",
      subtitle:
        "Quality industrial chains and components for every application",
      image: "/women-together.jpg",
      cta: "Explore Our Products",
    },
    {
      title: "Built to Last",
      subtitle: "Engineered for durability in the toughest environments",
      image: "/empty-conveyor.jpg",
      cta: "Learn More",
    },
    {
      title: "Serving All Industries",
      subtitle: "From construction to agriculture, we have the right solutions",
      image: "/machines-industrial-building.jpg",
      cta: "View Industries",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="font-sans text-gray-800 montserrat">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-orange-400" />
              <span>+256 700 123456</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-400" />
              <span>info@eastafricanchains.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-orange-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Slider */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto h-full flex items-center px-4">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 raleway">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8">{slide.subtitle}</p>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  {slide.cta}
                  <FaChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide
                  ? "bg-orange-500"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 raleway">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing comprehensive chain solutions to meet your industrial
              needs across East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ">
              <div className="text-blue-700 text-4xl mb-4">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Maintenance & Repair
              </h3>
              <p className="text-gray-600">
                Expert maintenance and repair services for all types of
                industrial chains and components.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 mt-4 inline-flex items-center"
              >
                Learn More <FaChevronRight className="ml-1 text-sm" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-700 text-4xl mb-4">
                <MdEngineering />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Custom Engineering
              </h3>
              <p className="text-gray-600">
                Tailored chain solutions designed to meet specific requirements
                for your unique applications.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 mt-4 inline-flex items-center"
              >
                Learn More <FaChevronRight className="ml-1 text-sm" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-700 text-4xl mb-4">
                <FaIndustry />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Industrial Solutions
              </h3>
              <p className="text-gray-600">
                Comprehensive chain solutions for manufacturing, construction,
                and industrial operations.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 mt-4 inline-flex items-center"
              >
                Learn More <FaChevronRight className="ml-1 text-sm" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-700 text-4xl mb-4">
                <MdSecurity />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Safety Consulting
              </h3>
              <p className="text-gray-600">
                Professional assessment and consultation for optimal chain
                safety and efficiency.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 mt-4 inline-flex items-center"
              >
                Learn More <FaChevronRight className="ml-1 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 raleway">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality chains designed for durability
              and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href="#"
                    className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center"
                  >
                    View Details
                    <FaChevronRight className="ml-1 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              View All Products
              <FaChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 raleway">
              Why Choose East African Chains
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-blue-100">
              We are committed to providing the highest quality products and
              exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-700 bg-opacity-30 rounded-lg">
              <div className="text-5xl mb-4 text-orange-400 flex justify-center">
                <FaCertificate />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Quality Assured
              </h3>
              <p className="text-blue-100">
                All our products meet international standards and undergo
                rigorous quality testing.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-700 bg-opacity-30 rounded-lg">
              <div className="text-5xl mb-4 text-orange-400 flex justify-center">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Fast Delivery
              </h3>
              <p className="text-blue-100">
                Efficient logistics network ensuring timely delivery across East
                Africa.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-700 bg-opacity-30 rounded-lg">
              <div className="text-5xl mb-4 text-orange-400 flex justify-center">
                <MdEngineering />
              </div>
              <h3 className="text-xl font-semibold mb-3 raleway">
                Expert Support
              </h3>
              <p className="text-blue-100">
                Technical expertise and professional advice for all your chain
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 raleway">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our clients say about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
              >
                <div className="mb-4 text-orange-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 raleway">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industrial chain requirements
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
