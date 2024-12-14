// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { FaHandsHelping } from "react-icons/fa"; // Example of using a React Icon

// const ProductDetails = () => {
//     const { productId } = useParams(); // Get the product ID from the URL
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProductDetails = async () => {
//             const db = getFirestore();
//             const productRef = doc(db, "donations", productId);
//             const docSnap = await getDoc(productRef);
//             if (docSnap.exists()) {
//                 setProduct(docSnap.data());
//             } else {
//                 console.log("No such product!");
//             }
//         };
//         fetchProductDetails();
//     }, [productId]);

//     if (!product) return <div>Loading...</div>;

//     const handleReceiverButtonClick = () => {
//         alert("Thank you for Receiving");
//     };

//     return (
//         <div className="bg-green-50 min-h-screen p-8">
//             <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 border border-green-200">
//                 <div className="flex flex-col md:flex-row">
//                     {/* Product Image Section */}
//                     <div className="mb-6 md:mb-0 w-full flex justify-center items-center">
//                         <img
//                             src={product.image}
//                             alt={product.productName}
//                             className="w-auto h-full contain rounded-lg border-4 border-green-300 hover:scale-105 transition-all duration-300 ease-in-out"
//                         />
//                     </div>




//                     {/* Product Details Section */}
//                     <div className="md:ml-6 flex flex-col justify-between w-full">
//                         <h2 className="text-3xl font-extrabold text-green-600 hover:text-green-700 transition-colors duration-300">{product.productName}</h2>
//                         <p className="text-lg text-gray-700 mt-2">{product.description}</p>
//                         <div className="mt-6 space-y-4">
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Category:</span>
//                                 <span className="text-gray-700">{product.category}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Condition:</span>
//                                 <span className="text-gray-700">{product.condition}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Quantity:</span>
//                                 <span className="text-gray-700">{product.quantity}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Price:</span>
//                                 <span className="text-gray-700">{product.price} INR</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Location:</span>
//                                 <span className="text-gray-700">{product.location}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="font-semibold text-gray-700">Donated Date:</span>
//                                 <span className="text-gray-700">{product.donatedDate}</span>
//                             </div>
//                         </div>
//                         {/* Receiver Button Section */}
//                         <div className="mt-6">
//                             <button
//                                 onClick={handleReceiverButtonClick}
//                                 className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
//                             >
//                                 <FaHandsHelping className="mr-2" />
//                                 Receive Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;














































import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { FaHandsHelping } from "react-icons/fa"; // Example of using a React Icon
import { getAuth } from "firebase/auth";
import { Tooltip } from 'react-tooltip'; // Tooltip to show messages when disabled

const ProductDetails = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasReceived, setHasReceived] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid); // Assuming "users" is your collection name

      // Fetch userType from Firestore based on UID
      getDoc(userDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserType(userData.userType); // Set userType to state
          console.log(userData.userType)
        } else {
          console.log("No such user document!");
        }
      }).catch((error) => {
        console.error("Error getting user data:", error);
      });
    } else {
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const db = getFirestore();
      const productRef = doc(db, "donations", productId);
      const docSnap = await getDoc(productRef);
      if (docSnap.exists()) {
        const productData = docSnap.data();
        setProduct(productData);

        // Check if the receiver has already received this product
        if (currentUser && userType === "receiver") {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          const userData = userDocSnap.data();
          if (userData.myReceivings?.includes(productId)) {
            setHasReceived(true);
          }
        }
      } else {
        console.log("No such product!");
      }
    };
    if (productId && currentUser) {
      fetchProductDetails();
    }
  }, [productId, currentUser, userType]);

  const handleReceiverButtonClick = async () => {
    if (userType === "donor") {
      alert("Donators cannot receive.");
    } else if (userType === "receiver") {
      if (!hasReceived) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", currentUser.uid);

        // Update the receiver's 'myReceivings' array with the product ID
        await updateDoc(userDocRef, {
          myReceivings: arrayUnion(productId),
        });

        alert("Thank you for receiving!");
        setHasReceived(true); // Disable the button after the product is received
      } else {
        alert("You have already received this product.");
      }
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-green-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 border border-green-200">
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="mb-6 md:mb-0 w-full flex justify-center items-center">
            <img
              src={product.image}
              alt={product.productName}
              className="w-auto h-full contain rounded-lg border-4 border-green-300 hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Product Details Section */}
          <div className="md:ml-6 flex flex-col justify-between w-full">
            <h2 className="text-3xl font-extrabold text-green-600 hover:text-green-700 transition-colors duration-300">{product.productName}</h2>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Category:</span>
                <span className="text-gray-700">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Condition:</span>
                <span className="text-gray-700">{product.condition}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <span className="text-gray-700">{product.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Price:</span>
                <span className="text-gray-700">{product.price} INR</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Location:</span>
                <span className="text-gray-700">{product.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Donated Date:</span>
                <span className="text-gray-700">{product.donatedDate}</span>
              </div>
            </div>

            {/* Receiver Button Section */}
            <div className="mt-6">
              <button
                onClick={handleReceiverButtonClick}
                disabled={userType === 'donor' || hasReceived}
                className={`flex items-center justify-center px-6 py-3 ${
                  userType === 'donor' || hasReceived ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                } text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out`}
              >
                <FaHandsHelping className="mr-2" />
                {userType === 'donor' ? 'Donators Cannot Receive' : hasReceived ? 'Already Received' : 'Receive Now'}
              </button>
              {userType === 'donor' && (
                <Tooltip id="donor-tooltip" place="top" type="dark" effect="solid">
                  Donators cannot receive
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
