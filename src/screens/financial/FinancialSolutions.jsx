import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Personal Loans",
    description:
      "Flexible loan options with competitive rates to meet your personal financial needs.",
    icon: "💸",
  },
  {
    title: "Business Loans",
    description:
      "Empowering businesses with the capital they need to grow and thrive.",
    icon: "🏢",
  },
  {
    title: "Investment Planning",
    description:
      "Customized investment strategies designed to help you grow and protect your wealth.",
    icon: "📈",
  },
  {
    title: "Retirement Planning",
    description:
      "Secure your future with expert retirement planning that aligns with your long-term goals.",
    icon: "🏖️",
  },
  {
    title: "Debt Management",
    description:
      "Effective solutions to help you manage and reduce your debt burden.",
    icon: "💼",
  },
  {
    title: "Credit Counseling",
    description:
      "Personalized advice to help you improve your credit score and financial standing.",
    icon: "📊",
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The service was excellent! I was able to secure a loan quickly and with favorable terms. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "Their expertise in financial planning helped me secure my future. I couldn’t be happier with the service.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    feedback:
      "Great support and friendly staff. They made the process of getting a business loan straightforward and stress-free.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
  },
];

const FinancialSolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="font-sans relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxvYW58ZW58MHx8fHwxNjA5MTc1MjYw&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Loan Consultation"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Trusted Partner in Financial Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Empowering your financial journey with tailored solutions that meet
            your unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Link
              to="/HomeEquity"
              className="px-4 md:px-6 py-2 md:py-3 bg-red-700 border-[2px] border-red-700 text-white rounded-md text-base md:text-lg font-medium hover:bg-red-600 transition"
            >
              Explore Our Solutions
            </Link>
            <a
              href="#get-started"
              className="px-4 md:px-6 py-2 md:py-3 bg-red-700 text-white rounded-md text-base md:text-lg font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
      <br />
      <br />

      {/* Services Section */}
      <section id="explore" className="font-sans py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl text-red-500 font-bold mb-8"
          >
            Comprehensive Financial Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            From loans to investment planning, we have the expertise to guide
            you through every financial decision.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <br />
      <br />
      {/* Banners Section */}
      <div className="my-4 font-[sans-serif]">
        <div className="max-w-[1050px] max-md:max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 items-center lg:gap-24 md:gap-16 gap-8">
            <div className="space-y-6 bg-blue-50 rounded-lg p-4 md:p-6">
              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    John Doe
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>

              <div className="flex sm:items-center max-sm:flex-col-reverse p-4 md:p-6 relative md:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-lg">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    Mark Adair
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>

              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    Olivia Thomson
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_1.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>
            </div>

            <div className="space-y-6 bg-red-50 rounded-lg p-4 md:p-6">
              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    Alec Whittaker
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>

              <div className="flex sm:items-center max-sm:flex-col-reverse p-4 md:p-6 relative md:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-lg">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    Alisha Jone
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>

              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-gray-800 text-sm md:text-base font-bold">
                    Nicole Anne
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://readymadeui.com/profile_1.webp"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full max-sm:mb-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Testimonials Section */}
      <section className="font-sans py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl text-blue-900 font-bold mb-8"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <div className="text-yellow-500 flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.feedback}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialSolutions;
