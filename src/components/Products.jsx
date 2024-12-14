// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";

// // Sample data from data.json
// const data = {
//     categories: ["All Categories", "Used Clothes", "E-waste", "Food", "Furniture", "Other"],
//     conditions: ["All Conditions", "Used", "New", "Refurbished", "Second Hand"],
// };
// const products = [
//     {
//         id: 1,
//         name: "Winter Jacket",
//         category: "Used Clothes",
//         condition: "Used",
//         quantity: 2,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 2,
//         name: "Laptop",
//         category: "E-waste",
//         condition: "Refurbished",
//         quantity: 1,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 3,
//         name: "Furniture Set",
//         category: "Furniture",
//         condition: "Second Hand",
//         quantity: 5,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 4,
//         name: "Smartphone",
//         category: "Electronics",
//         condition: "Used",
//         quantity: 3,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 5,
//         name: "Office Chair",
//         category: "Furniture",
//         condition: "Used",
//         quantity: 2,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 6,
//         name: "Refrigerator",
//         category: "Home Appliances",
//         condition: "Refurbished",
//         quantity: 1,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 7,
//         name: "Microwave Oven",
//         category: "Home Appliances",
//         condition: "Used",
//         quantity: 4,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 8,
//         name: "Washing Machine",
//         category: "Home Appliances",
//         condition: "Second Hand",
//         quantity: 3,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 9,
//         name: "Gaming Console",
//         category: "Electronics",
//         condition: "Refurbished",
//         quantity: 2,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 10,
//         name: "Bicycle",
//         category: "Sports Equipment",
//         condition: "Used",
//         quantity: 6,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 11,
//         name: "Kitchen Table",
//         category: "Furniture",
//         condition: "Second Hand",
//         quantity: 3,
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 12,
//         name: "Electric Fan",
//         category: "Home Appliances",
//         condition: "Used",
//         quantity: 7,
//         image: "https://via.placeholder.com/150",
//     },
// ];

// const Products = () => {
//     const [search, setSearch] = useState("");
//     const [selectedCategory, setSelectedCategory] = useState("All Categories");
//     const [selectedCondition, setSelectedCondition] = useState("All Conditions");

//     const filteredProducts = products.filter((product) => {
//         return (
//             product.name.toLowerCase().includes(search.toLowerCase()) &&
//             (selectedCategory === "All Categories" || product.category === selectedCategory) &&
//             (selectedCondition === "All Conditions" || product.condition === selectedCondition)
//         );
//     });

//     return (
//         <div className="bg-green-50 min-h-screen p-8 flex flex-col items-center">
//             <h1 className="text-3xl font-bold text-green-600 mb-6">Donated Products</h1>

//             {/* Search Bar */}
//             <div className="flex items-center bg-white shadow-md rounded-full w-3/4 max-w-xl p-4 mb-8">
//                 <FaSearch className="text-green-500 mr-3" />
//                 <input
//                     type="text"
//                     placeholder="Search for products..."
//                     className="w-full outline-none text-gray-700"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             <div className="flex w-full max-w-7xl">
//                 {/* Filters */}
//                 <div className="w-1/4 pr-6">
//                     <h2 className="text-lg font-semibold text-green-600 mb-2">Categories</h2>
//                     <ul>
//                         {data.categories.map((category) => (
//                             <li
//                                 key={category}
//                                 className={`cursor-pointer p-2 rounded-lg ${selectedCategory === category
//                                         ? "bg-green-500 text-white"
//                                         : "text-green-600 hover:bg-green-100"
//                                     }`}
//                                 onClick={() => setSelectedCategory(category)}
//                             >
//                                 {category}
//                             </li>
//                         ))}
//                     </ul>

//                     <h2 className="text-lg font-semibold text-green-600 mt-4 mb-2">Conditions</h2>
//                     <ul>
//                         {data.conditions.map((condition) => (
//                             <li
//                                 key={condition}
//                                 className={`cursor-pointer p-2 rounded-lg ${selectedCondition === condition
//                                         ? "bg-green-500 text-white"
//                                         : "text-green-600 hover:bg-green-100"
//                                     }`}
//                                 onClick={() => setSelectedCondition(condition)}
//                             >
//                                 {condition}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {filteredProducts.map((product) => (
//                         <motion.div
//                             key={product.id}
//                             className="bg-white shadow-lg rounded-lg overflow-hidden p-4 relative cursor-pointer"
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
//                                 {product.category}
//                             </span>
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-full h-40 object-cover mb-4"
//                             />
//                             <h3 className="text-center text-lg font-medium text-gray-700 mb-2">{product.name}</h3>
//                             <div className="flex justify-between items-center mb-2">
//                                 <span className="text-sm font-medium text-gray-700">
//                                     Qty: {product.quantity}
//                                 </span>
//                                 <span className="text-sm font-medium text-gray-700">
//                                     {product.condition}
//                                 </span>
//                             </div>
//                             <button
//                                 onClick={() => alert(`Viewing ${product.name}`)}
//                                 className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//                             >
//                                 View
//                             </button>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Products;



















































import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Sample data for categories and conditions
const data = {
  categories: ["All Categories", "Used Clothes", "E-waste", "Food", "Furniture", "Other"],
  conditions: ["All Conditions", "Used", "New", "Refurbished", "Second Hand"],
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const navigate = useNavigate();

  // Fetch products from Firebase Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const donationsRef = collection(db, "donations");
      const querySnapshot = await getDocs(donationsRef);
      const productList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  // Filter products based on search, category, and condition
  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All Categories" || product.category === selectedCategory) &&
      (selectedCondition === "All Conditions" || product.condition === selectedCondition)
    );
  });

  return (
    <div className="bg-green-50 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Donated Products</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-white shadow-md rounded-full w-3/4 max-w-xl p-4 mb-8">
        <FaSearch className="text-green-500 mr-3" />
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex w-full max-w-7xl">
        {/* Filters */}
        <div className="w-1/4 pr-6">
          <h2 className="text-lg font-semibold text-green-600 mb-2">Categories</h2>
          <ul>
            {data.categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 rounded-lg ${selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "text-green-600 hover:bg-green-100"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold text-green-600 mt-4 mb-2">Conditions</h2>
          <ul>
            {data.conditions.map((condition) => (
              <li
                key={condition}
                className={`cursor-pointer p-2 rounded-lg ${selectedCondition === condition
                    ? "bg-green-500 text-white"
                    : "text-green-600 hover:bg-green-100"
                  }`}
                onClick={() => setSelectedCondition(condition)}
              >
                {condition}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                {product.category}
              </span>
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-center text-lg font-medium text-gray-700 mb-2">{product.productName}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Qty: {product.quantity}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {product.condition}
                </span>
              </div>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                View
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
