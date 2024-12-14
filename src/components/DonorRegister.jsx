import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, storage, createUserWithEmailAndPassword, doc, setDoc, ref, uploadBytesResumable, getDownloadURL } from '../firebase.config';
import data from '../data.json';

const states = data.states;
const cities = data.cities;

const DonorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: '',
    address: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    profilePhoto: null,
  });

  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      // Upload profile photo to Firebase Storage
      const storageRef = ref(storage, `users/${user.uid}/profilePhoto`);
      const uploadTask = uploadBytesResumable(storageRef, formData.profilePhoto);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress
        },
        (error) => {
          console.error('Error uploading file:', error);
          setIsSubmitting(false);
        },
        async () => {
          const userType = formData.userType || "donor";
          // Get the URL of the uploaded photo
          const photoURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Store user details in Firestore
          await setDoc(doc(db, 'users', user.uid), {
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            gender: formData.gender,
            age: formData.age,
            address: formData.address,
            state: formData.state,
            city: formData.city,
            profilePhoto: photoURL,
            userType: userType 
          });

          // Redirect to profile page with user data
          navigate('/', { state: { userDetails: formData, photoURL } });
        }
      );
    } catch (error) {
      console.error('Error creating account:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Donor Registration</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Set your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              required
            />
          </div>

          {/* Profile Photo */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
            />
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
            >
              {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : "Create Account"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already a Donor? <Link to="/DonorLogin" className="text-green-600 hover:text-green-700">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default DonorRegister;
