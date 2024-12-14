// import React from "react";
// import { motion } from "framer-motion";
// import { FaRecycle, FaTrashAlt, FaHandHoldingHeart } from "react-icons/fa";

// const Resources = () => {
//     return (
//         <section className="py-16 bg-green-50" id="resources">
//             <div className="text-center mb-12">
//                 <motion.h2
//                     className="text-4xl font-bold text-green-700 mb-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     Resources to Help You Make a Difference
//                 </motion.h2>
//                 <motion.p
//                     className="text-lg text-gray-700 mb-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                 >
//                     Learn how you can reduce waste, reuse materials, and recycle to protect the planet.
//                 </motion.p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
//                 {/* Reduce Card */}
//                 <motion.div
//                     className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <FaTrashAlt className="text-4xl text-green-600 mb-4" />
//                     <h3 className="text-xl font-semibold text-green-700 mb-2">Reduce: What Can We Do?</h3>
//                     <p className="text-gray-700">
//                         Start by analyzing your waste, buy only what you need, and make mindful consumption choices. Reducing waste is the first step toward a cleaner environment.
//                     </p>
//                     <motion.button
//                         className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all"
//                         whileHover={{ scale: 1.1 }}
//                         onClick={() => window.scrollTo(0, document.getElementById("reduce").offsetTop)}
//                     >
//                         Learn More
//                     </motion.button>
//                 </motion.div>

//                 {/* Reuse Card */}
//                 <motion.div
//                     className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <FaHandHoldingHeart className="text-4xl text-green-600 mb-4" />
//                     <h3 className="text-xl font-semibold text-green-700 mb-2">Reuse: What Can We Do?</h3>
//                     <p className="text-gray-700">
//                         Reuse everyday items like containers, bags, and old furniture. By rethinking how we dispose of things, we can find creative ways to give them a second life.
//                     </p>
//                     <motion.button
//                         className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all"
//                         whileHover={{ scale: 1.1 }}
//                         onClick={() => window.scrollTo(0, document.getElementById("reuse").offsetTop)}
//                     >
//                         Learn More
//                     </motion.button>
//                 </motion.div>

//                 {/* Recycle Card */}
//                 <motion.div
//                     className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <FaRecycle className="text-4xl text-green-600 mb-4" />
//                     <h3 className="text-xl font-semibold text-green-700 mb-2">Recycle: What Can We Do?</h3>
//                     <p className="text-gray-700">
//                         Recycling materials like paper, plastic, and glass reduces the strain on landfills and gives these materials a new life. Learn what can be recycled in your area.
//                     </p>
//                     <motion.button
//                         className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all"
//                         whileHover={{ scale: 1.1 }}
//                         onClick={() => window.scrollTo(0, document.getElementById("recycle").offsetTop)}
//                     >
//                         Learn More
//                     </motion.button>
//                 </motion.div>
//             </div>

//             {/* Detailed Sections for Reduce, Reuse, Recycle with Tables */}
//             <div className="mt-16" id="reduce">
//                 <h3 className="text-3xl font-bold text-green-700 text-center mb-6">Reduce: What Can We Do?</h3>
//                 <p className="text-lg text-center text-gray-700 mb-6">
//                     Every small step counts. Here's how long it takes for various items to decompose.
//                 </p>

//                 <motion.table
//                     className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <thead className="bg-green-600 text-white">
//                         <tr>
//                             <th className="px-6 py-4 text-left">Item</th>
//                             <th className="px-6 py-4 text-left">Time to Decompose</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="hover:bg-green-100 transition-all">
//                             <td className="px-6 py-4">Paper towel</td>
//                             <td className="px-6 py-4">2–4 weeks</td>
//                         </tr>
//                         <tr className="hover:bg-green-100 transition-all">
//                             <td className="px-6 py-4">Plastic bag</td>
//                             <td className="px-6 py-4">10–20 years</td>
//                         </tr>
//                         <tr className="hover:bg-green-100 transition-all">
//                             <td className="px-6 py-4">Apple core</td>
//                             <td className="px-6 py-4">2 months</td>
//                         </tr>
//                         <tr className="hover:bg-green-100 transition-all">
//                             <td className="px-6 py-4">Cigarette butt</td>
//                             <td className="px-6 py-4">1–5 years</td>
//                         </tr>
//                         <tr className="hover:bg-green-100 transition-all">
//                             <td className="px-6 py-4">Glass bottle</td>
//                             <td className="px-6 py-4">1 million years</td>
//                         </tr>
//                     </tbody>
//                 </motion.table>
//             </div>


//             {/* Reuse Section */}
//             <div className="mt-16" id="reuse">
//                 <motion.div
//                     className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-8 rounded-lg shadow-lg mb-12"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <h3 className="text-4xl font-semibold text-white text-center mb-6">
//                         Reuse: What Can We Do?
//                     </h3>
//                     <p className="text-lg text-white text-center mb-6 max-w-3xl mx-auto">
//                         Reusing is a simple and effective way to cut down on waste. Here are some creative and practical ideas to help you reuse common items and minimize your environmental footprint.
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-green-700 mb-4">Reuse containers for storage or craft projects</h4>
//                             <p className="text-gray-700">Old containers can be repurposed for various storage solutions or creative craft projects around the home.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-green-700 mb-4">Give away clothes or donate items to charity</h4>
//                             <p className="text-gray-700">Instead of throwing away clothes, consider donating them to local charities or passing them on to others who may need them.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-green-700 mb-4">Repurpose old furniture by reupholstering or reusing parts</h4>
//                             <p className="text-gray-700">Rather than throwing away old furniture, get creative by reupholstering or repurposing the materials into something new.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-green-700 mb-4">Use old newspapers for packing or as pet bedding</h4>
//                             <p className="text-gray-700">Old newspapers can be reused as packing material or as bedding for pets, which helps reduce waste and costs.</p>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>



//             {/* Recycle Section */}
//             <div className="mt-16" id="recycle">
//                 <motion.div
//                     className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-8 rounded-lg shadow-lg mb-12"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <h3 className="text-4xl font-semibold text-white text-center mb-6">
//                         Recycle: What Can We Do?
//                     </h3>
//                     <p className="text-lg text-white text-center mb-6 max-w-3xl mx-auto">
//                         Recycling is one of the most impactful ways to conserve natural resources and reduce waste. Here's how you can do your part in keeping our planet clean.
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-blue-700 mb-4">Recycle paper, plastic, and glass</h4>
//                             <p className="text-gray-700">Separate your recyclables and ensure you’re recycling the right materials such as paper, plastic, and glass.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-blue-700 mb-4">Separate your recyclables from regular waste</h4>
//                             <p className="text-gray-700">Make sure you segregate recyclable materials from your regular waste, making recycling easier and more effective.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-blue-700 mb-4">Check local recycling rules</h4>
//                             <p className="text-gray-700">Be aware of local recycling rules to ensure you're recycling in the most efficient way possible.</p>
//                         </motion.div>

//                         <motion.div
//                             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <h4 className="text-2xl font-semibold text-blue-700 mb-4">Encourage your community to participate</h4>
//                             <p className="text-gray-700">Encourage your neighbors, community, and local businesses to participate in recycling programs for a greater impact.</p>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>


//         </section>
//     );
// };

// export default Resources;

































































































// import React from "react";
// import { motion } from "framer-motion";
// import { FaRecycle, FaHandHoldingHeart, FaLeaf, FaTrash, FaChartLine } from "react-icons/fa";
// import { MdReduceCapacity, MdReplay } from "react-icons/md";

// const Resources = () => {
//   const stats = [
//     { id: 1, value: "40%", label: "Waste Reduction" },
//     { id: 2, value: "2.5M", label: "Items Donated" },
//     { id: 3, value: "60%", label: "Recycling Rate" },
//   ];

//   const sections = [
//     {
//       id: 1,
//       title: "The Power of Donation",
//       content: "Transform lives through meaningful donations. Every item you donate helps reduce waste and supports communities in need.",
//       icon: <FaHandHoldingHeart className="text-4xl text-green-600" />,
//       image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
//     },
//     {
//       id: 2,
//       title: "Reduce",
//       content: "Minimize waste generation through conscious consumption and smart choices in daily life.",
//       icon: <MdReduceCapacity className="text-4xl text-green-600" />,
//       image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
//     },
//     {
//       id: 3,
//       title: "Reuse",
//       content: "Give items a second life by finding creative ways to reuse them instead of disposing.",
//       icon: <MdReplay className="text-4xl text-green-600" />,
//       image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
//     },
//     {
//       id: 4,
//       title: "Recycle",
//       content: "Convert waste materials into new products, reducing environmental impact and conserving resources.",
//       icon: <FaRecycle className="text-4xl text-green-600" />,
//       image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
//     }
//   ];

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Waste Management <span className="text-green-600">Insights</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover how your actions today can create a sustainable tomorrow through responsible waste management and generous donations.
//           </p>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {stats.map((stat) => (
//             <motion.div
//               key={stat.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-green-50 rounded-lg p-8 text-center"
//             >
//               <div className="text-4xl font-bold text-green-600">{stat.value}</div>
//               <div className="mt-2 text-gray-600">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 grid gap-12 lg:grid-cols-2">
//           {sections.map((section) => (
//             <motion.div
//               key={section.id}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col md:flex-row gap-8 items-center"
//             >
//               <div className="w-full md:w-1/2">
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="w-full h-64 object-cover rounded-lg shadow-lg"
//                   onError={(e) => {
//                     e.target.src = "https://images.unsplash.com/photo-1605600659908-0ef719419d41";
//                   }}
//                 />
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="mb-4">{section.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
//                 <p className="text-gray-600">{section.content}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="mt-20 bg-green-600 text-white rounded-lg p-8 text-center"
//         >
//           <FaLeaf className="text-5xl mx-auto mb-6" />
//           <blockquote className="text-2xl font-medium italic mb-4">
//             "The greatest threat to our planet is the belief that someone else will save it."
//           </blockquote>
//           <p className="text-lg">- Robert Swan</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Resources;





















import React from "react";
import { motion } from "framer-motion";
import { FaRecycle, FaHandHoldingHeart, FaLeaf, FaChartLine, FaQuoteLeft } from "react-icons/fa";
import { MdReduceCapacity, MdReplay } from "react-icons/md";

const ResourcesComponent = () => {
    const stats = [
        { id: 1, value: "40%", label: "of landfill waste could be recycled" },
        { id: 2, value: "8M", label: "tons of donations processed annually" },
        { id: 3, value: "60%", label: "energy saved through recycling" },
        { id: 4, value: "27M", label: "trees saved annually through recycling" }
    ];

    const quotes = [
        { id: 1, text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
        { id: 2, text: "We do not inherit the Earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" }
    ];
    const sections = [
        {
            id: 1,
            title: "The Power of Donation",
            content: "Transform lives through meaningful donations. Every item you donate helps reduce waste and supports communities in need.",
            icon: <FaHandHoldingHeart className="text-4xl text-green-600" />,
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
        },
        {
            id: 2,
            title: "Reduce",
            content: "Minimize waste generation through conscious consumption and smart choices in daily life.",
            icon: <MdReduceCapacity className="text-4xl text-green-600" />,
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
        },
        {
            id: 3,
            title: "Reuse",
            content: "Give items a second life by finding creative ways to reuse them instead of disposing.",
            icon: <MdReplay className="text-4xl text-green-600" />,
            image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
        },
        {
            id: 4,
            title: "Recycle",
            content: "Convert waste materials into new products, reducing environmental impact and conserving resources.",
            icon: <FaRecycle className="text-4xl text-green-600" />,
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
        }
    ];



    return (
        <div className="bg-white min-h-screen p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Donation Management Resources</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    Learn how you can make a difference through sustainable practices and mindful consumption.
                </p>

                {/* Donation Section */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
                                    alt="Donation Center"
                                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-semibold text-green-600 mb-4 flex items-center gap-3">
                                <FaHandHoldingHeart className="text-4xl" /> Importance of Donation
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Donating items plays a crucial role in supporting communities while reducing waste. Your donations can give new life to items that might otherwise end up in landfills, helping both people and the planet.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* RRR Section */}
                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 bg-green-50 p-8 rounded-xl"
                >
                    <h2 className="text-3xl font-semibold text-green-600 mb-8 flex items-center gap-3">
                        <FaRecycle className="text-4xl" /> Reduce, Reuse, Recycle
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-green-500 mb-3">Reduce</h3>
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                                alt="Reduce Waste"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-600">Minimize waste by making conscious choices about consumption.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-green-500 mb-3">Reuse</h3>
                            <img
                                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18"
                                alt="Reuse Items"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-600">Find creative ways to reuse items instead of disposing them.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-green-500 mb-3">Recycle</h3>
                            <img
                                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
                                alt="Recycling Process"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-600">Transform waste materials into new products through recycling.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Statistics Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-green-600 mb-8 flex items-center gap-3">
                        <FaChartLine className="text-4xl" /> Impact Statistics
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="bg-green-600 text-white p-6 rounded-lg text-center hover:bg-green-700 transition-colors duration-300">
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <div className="mt-20 grid gap-12 lg:grid-cols-2">
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="w-full md:w-1/2">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1605600659908-0ef719419d41";
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="mb-4">{section.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                <p className="text-gray-600">{section.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Quotes Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 mt-12"
                >
                    <h2 className="text-3xl font-semibold text-green-600 mb-8 flex items-center gap-3">
                        <FaQuoteLeft className="text-4xl" /> What our Ancestors say about Donation
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {quotes.map((quote) => (
                            <div key={quote.id} className="bg-green-50 p-6 rounded-lg">
                                <p className="text-xl text-gray-700 italic mb-4">{quote.text}</p>
                                <p className="text-green-600 font-semibold">- {quote.author}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Long-term Impact */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-semibold text-green-600 mb-4 flex items-center gap-3">
                                <FaLeaf className="text-4xl" /> Long-term Impact
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your contributions to recycling and donation create lasting positive changes in communities. From supporting local industries to reducing environmental impact, every action counts towards a sustainable future.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa"
                                    alt="Community Impact"
                                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default ResourcesComponent;