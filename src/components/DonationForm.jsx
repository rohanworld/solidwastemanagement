// import React, { useState, useEffect } from 'react';
// import { getAuth } from 'firebase/auth';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getFirestore, doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUpload } from 'react-icons/fa';
// import categoriesData from '../data.json'; // Import data.json

// const DonationForm = () => {
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const db = getFirestore();
//   const storage = getStorage();

//   const [formData, setFormData] = useState({
//     productName: '',
//     price: '',
//     image: null,
//     condition: '',
//     quantity: '',
//     category: '',
//     location: '',
//     description: '',
//     donatedDate: new Date().toISOString().split('T')[0], // Get the current date automatically
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state for spinner

//   const [categories] = useState(categoriesData.categories);  // Categories from the data.json
//   const [states] = useState(categoriesData.states); // States from the data.json
//   const [cities] = useState(categoriesData.cities); // Cities from the data.json

//   useEffect(() => {
//     const currentUser = auth.currentUser;
//     if (currentUser) {
//       setUser(currentUser);
//     }
//   }, [auth]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevState) => ({
//         ...prevState,
//         image: file,
//       }));
//       const fileReader = new FileReader();
//       fileReader.onloadend = () => setImagePreview(fileReader.result);
//       fileReader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       console.log('Please log in to donate');
//       return;
//     }

//     const { productName, price, condition, quantity, category, location, description, donatedDate, image } = formData;

//     if (!productName || !price || !condition || !quantity || !category || !location || !description || !donatedDate || !image) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       setLoading(true); // Start loading spinner

//       // Upload Image to Firebase Storage
//       const imageRef = ref(storage, `donations/${Date.now()}_${image.name}`);
//       await uploadBytes(imageRef, image);
//       const imageUrl = await getDownloadURL(imageRef);

//       // Create donation data
//       const donationData = {
//         productName,
//         price,
//         image: imageUrl,
//         condition,
//         quantity,
//         category,
//         location,
//         description,
//         donatedDate,
//         donorId: user.uid,
//       };

//       // Save to Firestore under Donations collection
//       const donationDocRef = doc(db, 'donations', user.uid + '_' + Date.now());
//       await setDoc(donationDocRef, donationData);

//       // Update user's donations field with the donation ID
//       const userDocRef = doc(db, 'users', user.uid);
//       await updateDoc(userDocRef, {
//         donations: arrayUnion(donationDocRef.id),
//       });

//       alert('Donation Submitted Successfully!');
//       navigate('/profile');
//     } catch (error) {
//       console.error('Error submitting donation:', error);
//       alert('There was an error submitting your donation. Please try again.');
//     } finally {
//       setLoading(false); // Stop loading spinner
//     }
//   };

//   return (
//     <motion.div
//       className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-3xl font-bold text-green-600 mb-4">Donate for a Greener Tomorrow</h1>
//       <p className="text-lg text-gray-600 mb-6">Contribute to making the world a cleaner and better place</p>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Product Name */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Product Name</label>
//           <input
//             type="text"
//             name="productName"
//             value={formData.productName}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter product name"
//             required
//           />
//         </div>

//         {/* Price */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Price (₹)</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter price"
//             required
//           />
//         </div>

//         {/* Condition */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Condition</label>
//           <select
//             name="condition"
//             value={formData.condition}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           >
//             <option value="">Select condition</option>
//             <option value="New">New</option>
//             <option value="Used">Used</option>
//           </select>
//         </div>

//         {/* Quantity */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter quantity"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           >
//             <option value="">Select category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>

//         {/* Location */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Location</label>
//           <select
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           >
//             <option value="">Select location</option>
//             {states.map((state, index) => (
//               <option key={index} value={state}>{state}</option>
//             ))}
//           </select>
//         </div>

//         {/* Description */}
//         <div className="form-group col-span-2">
//           <label className="block text-sm font-semibold text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter description"
//             required
//           />
//         </div>

//         {/* Donated Date (Auto set to current date) */}
//         <div className="form-group">
//           <label className="block text-sm font-semibold text-gray-700">Donated Date</label>
//           <input
//             type="date"
//             name="donatedDate"
//             value={formData.donatedDate}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Image Upload */}
//         <div className="form-group col-span-2">
//           <label className="block text-sm font-semibold text-gray-700">Upload Image</label>
//           <div className="flex items-center gap-3">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="w-full p-3 border border-gray-300 rounded-md"
//               required
//             />
//             <div className="text-xl text-green-600">
//               <FaUpload />
//             </div>
//           </div>
//           {imagePreview && (
//             <img src={imagePreview} alt="Image Preview" className="mt-3 max-w-full h-auto rounded-lg" />
//           )}
//         </div>

//         {/* Loading Spinner */}
//         {loading && (
//           <div className="col-span-2 flex justify-center py-4">
//             <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-green-600 rounded-full" role="status">
//               <span className="visually-hidden">.</span>
//             </div>
//           </div>
//         )}

//         <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-6">
//           Submit Donation
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default DonationForm;









import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUpload } from 'react-icons/fa';
import categoriesData from '../data.json'; // Import data.json



const DonationForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage(); // Initialize Firebase Storage

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    image: null,
    condition: '',
    quantity: '',
    category: '',
    location: '',
    description: '',
    donatedDate: new Date().toISOString().split('T')[0], // Get the current date automatically
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState(null); // Store userType

  const [categories] = useState(categoriesData.categories);  // Categories from the data.json
  const [states] = useState(categoriesData.states); // States from the data.json
  const [cities] = useState(categoriesData.cities); // Cities from the data.json

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);

      // Fetch user data from Firestore to check the userType
      const userDocRef = doc(db, 'users', currentUser.uid);
      getDoc(userDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserType(userData.userType);

          if (userData.userType !== 'donor') {
            // If user is not a donor, redirect to donor login page
            navigate('/donorlogin');
          }
        } else {
          console.log('No such user document!');
          navigate('/donorlogin'); // If no user data is found, redirect to login
        }
      }).catch((error) => {
        console.error('Error fetching user data:', error);
        navigate('/donorlogin'); // Redirect if there is an error fetching user data
      });
    } else {
      navigate('/donorlogin'); // Redirect to login page if no user is logged in
    }
  }, [auth, db, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      const fileReader = new FileReader();
      fileReader.onloadend = () => setImagePreview(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.log('Please log in to donate');
      return;
    }

    const { productName, price, condition, quantity, category, location, description, donatedDate, image } = formData;

    if (!productName || !price || !condition || !quantity || !category || !location || !description || !donatedDate || !image) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setLoading(true); // Start loading spinner

      // Upload Image to Firebase Storage
      const imageRef = ref(storage, `donations/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Create donation data
      const donationData = {
        productName,
        price,
        image: imageUrl,
        condition,
        quantity,
        category,
        location,
        description,
        donatedDate,
        donorId: user.uid,
      };

      // Save to Firestore under Donations collection
      const donationDocRef = doc(db, 'donations', user.uid + '_' + Date.now());
      await setDoc(donationDocRef, donationData);

      // Update user's donations field with the donation ID
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        donations: arrayUnion(donationDocRef.id),
      });

      alert('Thank you for your donation! We will pass it on to those in need.');
      navigate('/requests');
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('There was an error submitting your donation. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };


  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-green-600 mb-4">Donate for a Greener Tomorrow</h1>
      <p className="text-lg text-gray-600 mb-6">Contribute to making the world a cleaner and better place</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Product Name */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Condition */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select location</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Donated Date (Auto set to current date) */}
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700">Donated Date</label>
          <input
            type="date"
            name="donatedDate"
            value={formData.donatedDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-semibold text-gray-700">Upload Image</label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <div className="text-xl text-green-600">
              <FaUpload />
            </div>
          </div>
          {imagePreview && (
            <img src={imagePreview} alt="Image Preview" className="mt-3 max-w-full h-auto rounded-lg" />
          )}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="col-span-2 flex justify-center py-4">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-green-600 rounded-full" role="status">
              <span className="visually-hidden">.</span>
            </div>
          </div>
        )}

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-6">
          Submit Donation
        </button>
      </form>
    </motion.div>
  );
};

export default DonationForm;
