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
              className="px-4 md:px-6 py-2 md:py-3 bg-bardum border-[2px] border-[#d70040] text-white rounded-md text-base md:text-lg font-medium hover:bg-red-800 transition"
            >
              Explore Our Solutions
            </Link>
            <a
              href="#get-started"
              className="px-4 md:px-6 py-2 md:py-3 bg-gray-800 text-white rounded-md text-base md:text-lg font-medium hover:bg-gray-900 transition"
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
            className="text-3xl md:text-4xl text-[#d70040] font-bold mb-8"
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
      <div class="lg:p-12 p-6 font-[sans-serif] bg-blue-50">
        <div class="max-w-6xl max-md:max-w-lg mx-auto">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="col-span-2">
              <h2 class="text-gray-800 text-2xl font-extrabold">
                What our happy client say
              </h2>
              <p class="text-sm text-gray-800 mt-4 leading-relaxed">
                Veniam proident aute magna anim excepteur et ex consectetur
                velit ullamco veniam minim aute sit. Elit occaecat officia et
                laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
              </p>
            </div>

            <div class="flex space-x-4 items-end justify-end">
      
      
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mt-12">
            <div class="p-6 rounded-lg bg-white shadow-md">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  class="w-10 h-10 rounded-full"
                />
                <div class="ml-4">
                  <h4 class="text-gray-800 text-sm font-extrabold">John Doe</h4>
                  <p class="mt-0.5 text-xs text-gray-400">Founder of Rubik</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>

              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-white shadow-md">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  class="w-10 h-10 rounded-full"
                />
                <div class="ml-4">
                  <h4 class="text-gray-800 text-sm font-extrabold">
                    Mark Adair
                  </h4>
                  <p class="mt-0.5 text-xs text-gray-400">Founder of Alpha</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>

              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-white shadow-md">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/profile_4.webp"
                  class="w-10 h-10 rounded-full"
                />
                <div class="ml-4">
                  <h4 class="text-gray-800 text-sm font-extrabold">
                    Simon Konecki
                  </h4>
                  <p class="mt-0.5 text-xs text-gray-400">Founder of Labar</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>

              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialSolutions;
