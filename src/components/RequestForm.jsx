import React, { useState, useEffect } from "react";
import { FaRegClipboard, FaBoxes } from "react-icons/fa"; // React icons for product and category
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For navigation
import { getAuth } from "firebase/auth"; // Assuming you're using Firebase for authentication
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Firestore functions for adding data
import { FaSpinner } from "react-icons/fa"; // Spinner icon

// Import the data.json file
import data from '../data.json'; // Adjust the path if necessary

const RequestForm = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    condition: "",
    quantity: 1,
    description: "",
  });

  const [alert, setAlert] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false); // State for loading spinner

  useEffect(() => {
    // Check user authentication status
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      // User is logged in, get the user type
      setIsLoggedIn(true);
      const userTypeFromDb = currentUser?.displayName || "receiver"; // Replace with actual user type logic
      setUserType(userTypeFromDb);
      
      // If the user is not a receiver, redirect to the home page
      if (userTypeFromDb !== "receiver") {
        navigate("/");  // Redirect to home page (or any other appropriate page)
      }
    } else {
      // User is not logged in, redirect to login page
      navigate("/receiverlogin");
    }
  }, [navigate]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is being submitted

    try {
      // Add data to Firestore
      await addDoc(collection(db, "requested"), {
        ...formData,
        timestamp: new Date(), // Add a timestamp field for sorting or tracking
      });
      
      setAlert(`Product request for "${formData.productName}" submitted successfully!`);
    //   navigate("/requests")
      setFormData({
        productName: "",
        category: "",
        condition: "",
        quantity: 1,
        description: "",
      });
      setTimeout(() => {
      navigate("/requests");
    }, 4000); 
    } catch (error) {
      setAlert("Error submitting request. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the submission is complete
    }
  };

  // If user is not a receiver or not logged in, do not show the form
  if (!isLoggedIn || userType !== "receiver") {
    return null; // Do not render anything if user is not logged in or is not a receiver
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-semibold text-green-600">Product Request Form</h1>
        <p className="mt-2 text-lg text-gray-600">
          Fill out the details below to request a product that isn't listed yet!
        </p>
      </motion.div>

      {/* Alert if form is submitted */}
      {alert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white p-4 rounded-lg mb-4"
        >
          {alert}
        </motion.div>
      )}

      {/* Request Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="productName" className="text-gray-700 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-gray-700 font-semibold">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a category</option>
            {/* Dynamically load categories from data.json */}
            {data.categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="condition" className="text-gray-700 font-semibold">
            Condition
          </label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Refurbished">Refurbished</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-gray-700 font-semibold">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
            className="mt-2 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="description" className="text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          />
        </div>

        <div className="flex justify-center col-span-2">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? (
              <div className="flex items-center">
                <FaSpinner className="animate-spin mr-2" /> Submitting...
              </div>
            ) : (
              "Submit Request"
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default RequestForm;
