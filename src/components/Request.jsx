// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaSearch } from 'react-icons/fa';
// import data from '../data.json'; // Importing the data.json for categories
// import { Link, useNavigate } from 'react-router-dom';

// const Request = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('');
//   const [requests, setRequests] = useState([]);
//   const [sortedRequests, setSortedRequests] = useState([]);

//   useEffect(() => {
//     // Simulate fetching data from the backend or Firebase
//     const dummyRequests = [
//       { name: 'Old T-shirt', category: 'Used Clothes', condition: 'Good', id: 1 },
//       { name: 'Old Phone', category: 'E-waste', condition: 'Fair', id: 2 },
//       { name: 'Sofa Set', category: 'Furniture', condition: 'New', id: 3 },
//       { name: 'Leftover Food', category: 'Food', condition: 'Fresh', id: 4 },
//       { name: 'Old Microwave', category: 'E-waste', condition: 'Poor', id: 5 },
//     ];
//     setRequests(dummyRequests);
//     setSortedRequests(dummyRequests);
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     filterRequests(e.target.value, filterCategory);
//   };

//   const handleFilterCategory = (e) => {
//     setFilterCategory(e.target.value);
//     filterRequests(searchTerm, e.target.value);
//   };

//   const filterRequests = (search, category) => {
//     let filtered = requests.filter((request) =>
//       request.name.toLowerCase().includes(search.toLowerCase())
//     );
//     if (category) {
//       filtered = filtered.filter((request) => request.category === category);
//     }
//     setSortedRequests(filtered);
//   };

//   const handleSortByName = () => {
//     const sorted = [...sortedRequests].sort((a, b) => a.name.localeCompare(b.name));
//     setSortedRequests(sorted);
//   };

//   const handleSortByCondition = () => {
//     const conditionOrder = { 'New': 0, 'Good': 1, 'Fair': 2, 'Poor': 3 };
//     const sorted = [...sortedRequests].sort(
//       (a, b) => conditionOrder[a.condition] - conditionOrder[b.condition]
//     );
//     setSortedRequests(sorted);
//   };

//   return (
//     <div className="container mx-auto p-6">
//     <div className="flex justify-center items-center mb-4 text-center">
//       <motion.h1 className="text-2xl font-bold text-green-700">
//         Requested Donations
//       </motion.h1>
//     </div>
    
//     <div className="mb-4 text-center">
//       <input
//         autoFocus
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder="Search requested products..."
//         className="p-2 border-2 border-green-500 rounded-md w-1/3"
//       />
//     </div>

//     {/* Request Button aligned to the right */}
//     <div className="flex justify-end mt-4">
//       <Link to="/requestform">
//         <motion.button
//           className="text-white bg-green-500 px-4 py-2 rounded-md"
//           whileHover={{ scale: 1.1 }}
//         >
//           Request
//         </motion.button>
//       </Link>
//     </div>
//       <div className="mb-4 ">
//         <select
//           value={filterCategory}
//           onChange={handleFilterCategory}
//           className="p-2 border rounded-md border-2 border-green-500"
//         >
//           <option value="">All Categories</option>
//           {data.categories.map((category, index) => (
//             <option key={index} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>

//       <table className="min-w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-green-200 text-left text-center">
//             <th className="px-4 py-2 cursor-pointer" onClick={handleSortByName}>Product Name</th>
//             <th className="px-4 py-2">Category</th>
//             <th className="px-4 py-2 cursor-pointer" onClick={handleSortByCondition}>Condition</th>
//             <th className="px-4 py-2">Donate Now</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedRequests.map((request) => (
//             <tr key={request.id} className="hover:bg-green-50 text-center">
//               <td className="px-4 py-2">{request.name}</td>
//               <td className="px-4 py-2">{request.category}</td>
//               <td className="px-4 py-2">{request.condition}</td>
//               <td className="px-4 py-2">
//                 <Link to="/donationform">
//                   <button className="text-white bg-green-500 px-4 py-2 rounded-md">Donate Now</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Request;





















import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Request = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [requests, setRequests] = useState([]);
  const [sortedRequests, setSortedRequests] = useState([]);

  // Fetch requested donations from Firestore
  useEffect(() => {
    const fetchRequests = async () => {
      const db = getFirestore();
      const requestsRef = collection(db, "requested");
      const querySnapshot = await getDocs(requestsRef);
      const requestList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRequests(requestList);
      setSortedRequests(requestList); // Initially display all requests
    };

    fetchRequests();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRequests(e.target.value, filterCategory, filterCondition);
  };

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
    filterRequests(searchTerm, e.target.value, filterCondition);
  };

  const handleFilterCondition = (e) => {
    setFilterCondition(e.target.value);
    filterRequests(searchTerm, filterCategory, e.target.value);
  };

  const filterRequests = (search, category, condition) => {
    let filtered = requests.filter((request) =>
      request.productName.toLowerCase().includes(search.toLowerCase())
    );
    if (category) {
      filtered = filtered.filter((request) => request.category === category);
    }
    if (condition) {
      filtered = filtered.filter((request) => request.condition === condition);
    }
    setSortedRequests(filtered);
  };

  const handleSortByName = () => {
    const sorted = [...sortedRequests].sort((a, b) => a.productName.localeCompare(b.productName));
    setSortedRequests(sorted);
  };

  const handleSortByCondition = () => {
    const conditionOrder = { 'New': 0, 'Good': 1, 'Fair': 2, 'Poor': 3 };
    const sorted = [...sortedRequests].sort(
      (a, b) => conditionOrder[a.condition] - conditionOrder[b.condition]
    );
    setSortedRequests(sorted);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center mb-4 text-center">
        <motion.h1 className="text-2xl font-bold text-green-700">
          Requested Donations
        </motion.h1>
      </div>
      
      <div className="mb-4 text-center">
        <input
          autoFocus
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search requested products..."
          className="p-2 border-2 border-green-500 rounded-md w-1/3"
        />
      </div>

      {/* Request Button aligned to the right */}
      <div className="flex justify-end mt-4">
        <Link to="/requestform">
          <motion.button
            className="text-white bg-green-500 px-4 py-2 rounded-md"
            whileHover={{ scale: 1.1 }}
          >
            Request
          </motion.button>
        </Link>
      </div>

{/* Category and Condition Filters */}
<div className="flex space-x-4 mb-4 justify-start">
  {/* Category Filter */}
  <select
    value={filterCategory}
    onChange={handleFilterCategory}
    className="p-2 border rounded-md border-2 border-green-500"
  >
    <option value="">All Categories</option>
    <option value="Used Clothes">Used Clothes</option>
    <option value="E-waste">E-waste</option>
    <option value="Food">Food</option>
    <option value="Furniture">Furniture</option>
    <option value="Other">Other</option>
  </select>

  {/* Condition Filter */}
  <select
    value={filterCondition}
    onChange={handleFilterCondition}
    className="p-2 border rounded-md border-2 border-green-500"
  >
    <option value="">All Conditions</option>
    <option value="New">New</option>
    <option value="Good">Good</option>
    <option value="Fair">Fair</option>
    <option value="Poor">Poor</option>
  </select>
</div>


      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-200 text-left text-center">
            <th className="px-4 py-2 cursor-pointer" onClick={handleSortByName}>Product Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2 cursor-pointer" onClick={handleSortByCondition}>Condition</th>
            <th className="px-4 py-2">Donate Now</th>
          </tr>
        </thead>
        <tbody>
          {sortedRequests.map((request) => (
            <tr key={request.id} className="hover:bg-green-50 text-center">
              <td className="px-4 py-2">{request.productName}</td>
              <td className="px-4 py-2">{request.category}</td>
              <td className="px-4 py-2">{request.condition}</td>
              <td className="px-4 py-2">
                <Link to="/donationform">
                  <button className="text-white bg-green-500 px-4 py-2 rounded-md">Donate Now</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Request;
