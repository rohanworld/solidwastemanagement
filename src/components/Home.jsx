// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaRecycle, FaHandsHelping, FaLeaf } from 'react-icons/fa';
// // import './Home.css'; // Include custom CSS for fine-tuned styling

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section bg-green-100 pt-12 pb-12">
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl font-bold text-green-800 text-center">
//             "Precaution is better than cure."
//           </h1>
//           <p className="text-lg text-gray-700 mt-4 text-center">
//             Build a platform to aggregate secondary resources and facilitate distribution to those in need while educating on waste management.
//           </p>
//           <div className="flex justify-center space-x-4 mt-8">
//             <Link to="/DonorLogin">
//               <motion.button
//                 className="cta-button bg-green-600 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Donate Now
//               </motion.button>
//             </Link>
//             <Link to="/ReceiverLogin">
//               <motion.button
//                 className="cta-button bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Receive Now
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Statistics Section */}
//       <div className="statistics-section bg-gray-100 py-16">
//         <h2 className="text-3xl font-bold text-center text-green-800">Making an Impact</h2>
//         <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
//           <motion.div
//             className="stat-card"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <FaRecycle className="text-green-600 text-5xl mx-auto" />
//             <h3 className="text-xl font-bold text-center mt-4">10,000+ Items Recycled</h3>
//             <p className="text-gray-700 text-center mt-2">
//               A community dedicated to keeping the environment clean and green.
//             </p>
//           </motion.div>
//           <motion.div
//             className="stat-card"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <FaHandsHelping className="text-green-600 text-5xl mx-auto" />
//             <h3 className="text-xl font-bold text-center mt-4">5,000+ Families Helped</h3>
//             <p className="text-gray-700 text-center mt-2">
//               Providing essential resources to those in need.
//             </p>
//           </motion.div>
//           <motion.div
//             className="stat-card"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <FaLeaf className="text-green-600 text-5xl mx-auto" />
//             <h3 className="text-xl font-bold text-center mt-4">100% Sustainable</h3>
//             <p className="text-gray-700 text-center mt-2">
//               Promoting eco-friendly and sustainable waste management practices.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="how-it-works-section bg-green-50 py-16">
//         <h2 className="text-3xl font-bold text-center text-green-800">How It Works</h2>
//         <p className="text-gray-700 text-center mt-4">
//           Learn more about how donors and receivers interact on our platform.
//         </p>
//         <div className="flex justify-center mt-8">
//           <Link to="/howitworks">
//             <motion.button
//               className="cta-button bg-green-600 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Learn More
//             </motion.button>
//           </Link>
//         </div>
//       </div>

//       {/* Quotes Section */}
//       <div className="quotes-section bg-gray-100 py-16">
//         <div className="max-w-3xl mx-auto text-center">
//           <p className="text-xl text-gray-800 italic">
//             "The greatest threat to our planet is the belief that someone else will save it." — Robert Swan
//           </p>
//           <p className="text-xl text-gray-800 italic mt-6">
//             "No act of kindness, no matter how small, is ever wasted." — Aesop
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;













import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRecycle, FaHandsHelping } from 'react-icons/fa';
import { GiGreenhouse } from "react-icons/gi";
import { FaDonate, FaHandHoldingUsd } from 'react-icons/fa';  // Import the necessary icons
import { FaLeaf, FaHandHoldingHeart, FaMobileAlt, FaLightbulb, FaWater, FaTrash, FaTshirt, FaUtensils } from "react-icons/fa";


const quotes = [
    "Donate goods, help the environment, and support those in need. Together, we can make a difference.",
    "Every small contribution can make a huge impact. Let’s build a better future together.",
    "Your donation helps not only the people but also the planet. Together, we can create change.",
    "Giving is not just about making a donation, it's about making a difference.",
    "Be part of a movement to reduce waste and help those in need. Every item counts.",
    "A cleaner world starts with you. Help us recycle and donate to those in need."
];

const TextSlider = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 4000); // Change quote every 4 seconds

        return () => clearInterval(quoteInterval); // Cleanup on unmount
    }, []);

    return (
        <motion.div
            className="text-lg md:text-2xl text-green text-center font-medium mb-24 mt-24"
            key={currentQuote} // Add key to trigger reanimation on each quote change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {quotes[currentQuote]}
        </motion.div>
    );
};


const Home = () => {

    const resources = [
        {
            id: 1,
            title: "Used Clothing",
            image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3",
            icon: <FaHandHoldingHeart />
        },
        {
            id: 2,
            title: "Electronic Waste",
            image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3",
            icon: <FaRecycle />
        },
        {
            id: 3,
            title: "Food Surplus",
            image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3",
            icon: <FaHandsHelping />
        },
        {
            id: 4,
            title: "Books",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3",
            icon: <FaLeaf />
        },
        {
            id: 5,
            title: "Furniture",
            image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3",
            icon: <FaHandHoldingHeart />
        },
        {
            id: 6,
            title: "Sports Equipment",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3",
            icon: <FaHandsHelping />
        }
    ];


    const educationalTips = [
        {
            id: 1,
            title: "Reduce & Reuse",
            description: "Start by reducing your consumption and reusing items whenever possible.",
            icon: <FaLeaf className="text-4xl text-green-500" />
        },
        {
            id: 2,
            title: "Proper Segregation",
            description: "Segregate waste into recyclable and non-recyclable categories.",
            icon: <FaRecycle className="text-4xl text-green-500" />
        },
        {
            id: 3,
            title: "Community Impact",
            description: "Your donations can make a significant difference in someone's life.",
            icon: <FaHandsHelping className="text-4xl text-green-500" />
        },
        {
            id: 4,
            title: "Energy Conservation",
            description: "Proper disposal of e-waste helps conserve energy and resources.",
            icon: <FaLightbulb className="text-4xl text-green-500" />
        }
    ];
    const impactedAreas = [
        {
          id: 1,
          title: "Clothing Donation",
          image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3",
          icon: <FaTshirt className="text-4xl" />
        },
        {
          id: 2,
          title: "Electronics Recycling",
          image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3",
          icon: <FaMobileAlt className="text-4xl" />
        },
        {
          id: 3,
          title: "Food Distribution",
          image: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3",
          icon: <FaUtensils className="text-4xl" />
        },
        {
          id: 4,
          title: "Community Support",
          image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3",
          icon: <FaHandHoldingHeart className="text-4xl" />
        },
        {
          id: 5,
          title: "Waste Management",
          image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3",
          icon: <FaRecycle className="text-4xl" />
        },
        {
          id: 6,
          title: "Volunteer Network",
          image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3",
          icon: <FaHandsHelping className="text-4xl" />
        }
      ];


    return (
        <div className="bg-white text-green-800">
            {/* Hero Section */}
            {/* <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/031/707/531/non_2x/fundraising-charity-and-donation-illustration-with-volunteers-putting-coins-or-money-in-donation-box-in-financial-support-cartoon-background-vector.jpg')" }}> */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3')" }}>
                <div className="absolute inset-0 bg-green-800 opacity-50"></div>
                <motion.div
                    className="relative z-10 text-center text-white p-8 md:p-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
                        Make the World a Better Place
                    </h1>

                    <TextSlider />
                    <div className="flex justify-center space-x-8">

                        <Link to="/DonationForm">
                            <button className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                                <FaDonate className="text-xl" />
                                <span>Donate Now</span>
                            </button>
                        </Link>

                        <Link to="/ReceiverLogin">
                            <button className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                                <FaHandHoldingUsd className="text-xl" />
                                <span>Receive Now</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </section>


            {/* How It Works Section */}
            <section className="py-16 px-6 bg-green-50">
                <motion.h2
                    className="text-3xl font-bold text-center text-green-700 mb-6"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    How It Works
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <FaRecycle className="text-5xl text-green-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-4">Donate Items</h3>
                        <p>List used items to help others. Whether clothes, electronics, or food, your donation makes a difference!</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <FaHandsHelping className="text-5xl text-green-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-4">Receive Assistance</h3>
                        <p>Choose from available items donated by others, all for free. A simple way to support your needs!</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                        <GiGreenhouse className="text-5xl text-green-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-4">Environmental Impact</h3>
                        <p>By donating and receiving items, you're helping reduce waste and contributing to a cleaner planet.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link to="/howitworks">
                        <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">Learn More</button>
                    </Link>
                </div>
            </section>


            {/* Resources Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
                >
                    Available Resources
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48 cursor-pointer">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 p-2 rounded-full text-white">
                                    {resource.icon}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800 mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600">
                                    Help us redistribute {resource.title.toLowerCase()} to those in need.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Educational Tips Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="bg-gray-100 py-16"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Waste Management Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {educationalTips.map((tip) => (
                            <motion.div
                                key={tip.id}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="flex justify-center mb-4">{tip.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                                <p className="text-gray-600">{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

<div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactedAreas.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 cursor-pointer">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="text-white">
                      {resource.icon}
                      <h3 className="text-xl font-semibold mt-2">{resource.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-green-100">
                <motion.h2
                    className="text-3xl font-bold text-center text-green-700 mb-6"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Testimonials
                </motion.h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 md:mb-0 w-full md:w-1/3 mx-2">
                        <blockquote className="text-lg mb-4">"This platform helped me donate clothes I no longer needed. It feels great to give back."</blockquote>
                        <p className="font-semibold">- John Doe</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 md:mb-0 w-full md:w-1/3 mx-2">
                        <blockquote className="text-lg mb-4">"This platform helped me donate clothes I no longer needed. It feels great to give back."</blockquote>
                        <p className="font-semibold">- John Doe</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 md:mb-0 w-full md:w-1/3 mx-2">
                        <blockquote className="text-lg mb-4">"I was able to receive food and clothes when I needed them the most. Thank you for this platform!"</blockquote>
                        <p className="font-semibold">- Jane Smith</p>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Home;
