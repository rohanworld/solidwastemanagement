import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-600 mb-12">Who Are You?</h1>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {/* Donor Box */}
        <Link
          to="/DonorLogin" // Link to DonorLogin page
          className="bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 p-12 text-center w-full h-full"
        >
          <img
            src="https://w7.pngwing.com/pngs/860/165/png-transparent-donation-charitable-organization-computer-icons-others-miscellaneous-donation-sign-thumbnail.png"
            alt="Donor"
            className="w-40 h-40 mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">I am a Donor</h2>
          <p className="text-lg text-gray-500">Contribute and make a difference!</p>
        </Link>

        {/* Receiver Box */}
        <Link
          to="/ReceiverLogin" // Link to ReceiverLogin page
          className="bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 p-12 text-center w-full h-full"
        >
          <img
            src="https://abilityschoolnj.org/wp-content/uploads/2023/02/donate-icon.png"
            alt="Receiver"
            className="w-40 h-40 mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">I am a Receiver</h2>
          <p className="text-lg text-gray-500">Find what you need here.</p>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
