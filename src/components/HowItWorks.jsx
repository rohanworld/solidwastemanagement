
import React, { useState } from 'react';
import { FaHandHoldingHeart, FaRecycle, FaSmile } from 'react-icons/fa';
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('donor');

  return (
    <div className="bg-green-50 py-16 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">How EcoShare Works</h1>
        <p className="text-gray-700 mt-4">
          Empowering communities through meaningful donations. Learn how the platform works for you!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10">
        <button
          onClick={() => setActiveTab('donor')}
          className={`py-2 px-6 rounded-lg font-medium ${
            activeTab === 'donor' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          For Donors
        </button>
        <button
          onClick={() => setActiveTab('receiver')}
          className={`py-2 px-6 rounded-lg font-medium ${
            activeTab === 'receiver' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          For Receivers
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'donor' && (
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <FaHandHoldingHeart className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 1: Sign Up as a Donor</h2>
                <p className="text-gray-700">
                  Create an account and list the items you wish to donate. Give a second life to unused items while
                  making a difference.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <FaRecycle className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 2: List Your Products</h2>
                <p className="text-gray-700">
                  Upload images, set pickup locations, and provide item details. Every item counts in building a
                  sustainable future.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <GiTakeMyMoney className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 3: Wait for a Match</h2>
                <p className="text-gray-700">
                  Once a receiver expresses interest, you’ll be notified. A simple act of kindness can create
                  ripples of joy.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'receiver' && (
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <FaSmile className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 1: Sign Up as a Receiver</h2>
                <p className="text-gray-700">
                  Join the platform and explore a variety of items listed by generous donors. Your journey to
                  receiving starts here.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <FaHandHoldingHeart className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 2: Browse Items</h2>
                <p className="text-gray-700">
                  Filter items by category, condition, and location. Select what you need and request for pickup or
                  delivery.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center space-x-6 hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <GiReceiveMoney className="text-green-600 text-5xl" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-grow hover:shadow-2xl transition-all">
                <h2 className="text-xl font-bold text-green-700">Step 3: Receive with Gratitude</h2>
                <p className="text-gray-700">
                  Coordinate with donors for a seamless transfer. Your need is fulfilled, and the planet thanks you
                  for reusing!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quote */}
      <div className="mt-16 text-center">
        <p className="text-green-800 text-lg italic">
          "The smallest act of kindness is worth more than the grandest intention." — Oscar Wilde
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
