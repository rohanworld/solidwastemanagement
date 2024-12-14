// import React, { useState, useEffect } from 'react';
// import { getAuth, signOut } from 'firebase/auth'; 
// import { useNavigate, useLocation } from 'react-router-dom'; 
// import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

// const ReceiverProfile = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [activeTab, setActiveTab] = useState("details");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       setUserDetails(location.state?.userDetails || null); // This may be null if not passed

//       if (!location.state) {
//         const db = getFirestore();
//         const userDocRef = doc(db, "users", user.uid); 

//         getDoc(userDocRef).then((docSnap) => {
//           if (docSnap.exists()) {
//             setUserDetails(docSnap.data());
//           } else {
//             console.log("No such document!");
//           }
//         }).catch((error) => {
//           console.error("Error getting document:", error);
//         });
//       }
//     } else {
//       navigate("/getstarted"); // Redirect to get started if no user is logged in
//     }
//   }, [navigate, location]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleLogout = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         navigate("/getstarted");
//       })
//       .catch((error) => {
//         console.error("Error signing out: ", error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-green-50 py-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* Profile Info Section */}
//         <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//           <div className="flex items-center space-x-6">
//             <img
//               src={userDetails?.profilePhoto || "https://www.w3schools.com/howto/img_avatar.png"}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
//             />
//             <div>
//               <h2 className="text-3xl font-semibold text-gray-800">{userDetails?.fullName || "User Name"}</h2>
//               <p className="text-lg text-gray-600">{userDetails?.email || "user@example.com"}</p>
//             </div>
//           </div>
//         </div>

//         {/* Tabs & Content Section */}
//         <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//           <div className="border-b-2 border-gray-200 mb-6">
//             <button
//               className={`px-6 py-3 text-lg font-semibold ${activeTab === "details" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
//               onClick={() => handleTabChange("details")}
//             >
//               User Details
//             </button>
//             <button
//               className={`px-6 py-3 text-lg font-semibold ${activeTab === "Receives" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
//               onClick={() => handleTabChange("Receives")}
//             >
//               My Receives
//             </button>
//           </div>

//           {/* User Details Tab */}
//           {activeTab === "details" && (
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Info</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//                 {/* User Detail Cards */}
//                 {/* <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Full Name</h4>
//                   <p className="text-gray-600">{userDetails?.fullName || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Email</h4>
//                   <p className="text-gray-600">{userDetails?.email || "Not Provided"}</p>
//                 </div> */}
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Phone Number</h4>
//                   <p className="text-gray-600">{userDetails?.phoneNumber || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Address</h4>
//                   <p className="text-gray-600">{userDetails?.address || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Age</h4>
//                   <p className="text-gray-600">{userDetails?.age || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">City</h4>
//                   <p className="text-gray-600">{userDetails?.city || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">State</h4>
//                   <p className="text-gray-600">{userDetails?.state || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">Gender</h4>
//                   <p className="text-gray-600">{userDetails?.gender || "Not Provided"}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <h4 className="text-lg font-semibold text-gray-700">User Type</h4>
//                   <p className="text-gray-600">{userDetails?.userType || "Not Provided"}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Receives Tab (future functionality) */}
//           {activeTab === "Receives" && (
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Receives</h3>
//               {/* Receives data will be displayed here */}
//             </div>
//           )}

//           <div className="mt-6">
//             <button
//               onClick={handleLogout}
//               className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReceiverProfile;

































import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

const ReceiverProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [receivedProducts, setReceivedProducts] = useState([]); // To hold the received products
  const [activeTab, setActiveTab] = useState("details");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserDetails(location.state?.userDetails || null); // This may be null if not passed

      if (!location.state) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);

        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No such document!");
          }
        }).catch((error) => {
          console.error("Error getting document:", error);
        });
      }

      // Fetch received products for the current user
      const fetchReceivedProducts = async () => {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
      
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log("User Data:", userData); // Debugging log
      
          if (userData.myReceivings && userData.myReceivings.length > 0) {
            // Fetch the details of the products received using the product IDs
            const productIds = userData.myReceivings;
            const allProducts = [];
      
            // Fetch each product document directly by ID
            for (let productId of productIds) {
              const productDocRef = doc(db, "donations", productId); // Use productId as the document ID
              const productDocSnap = await getDoc(productDocRef);
      
              if (productDocSnap.exists()) {
                allProducts.push({ id: productDocSnap.id, ...productDocSnap.data() });
              } else {
                console.log(`No product found with ID: ${productId}`);
              }
            }
      
            console.log("Received Products Data:", allProducts); // Debugging log
            setReceivedProducts(allProducts);
          } else {
            console.log("No products received yet."); // Debugging log if no products received
            setReceivedProducts([]);
          }
        } else {
          console.log("No user data found!"); // Debugging log if user data does not exist
        }
      };
      

      fetchReceivedProducts();
    } else {
      navigate("/getstarted"); // Redirect to get started if no user is logged in
    }
  }, [navigate, location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/getstarted");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Profile Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center space-x-6">
            <img
              src={userDetails?.profilePhoto || "https://www.w3schools.com/howto/img_avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">{userDetails?.fullName || "User Name"}</h2>
              <p className="text-lg text-gray-600">{userDetails?.email || "user@example.com"}</p>
            </div>
          </div>
        </div>

        {/* Tabs & Content Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="border-b-2 border-gray-200 mb-6">
            <button
              className={`px-6 py-3 text-lg font-semibold ${activeTab === "details" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
              onClick={() => handleTabChange("details")}
            >
              User Details
            </button>
            <button
              className={`px-6 py-3 text-lg font-semibold ${activeTab === "Receives" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
              onClick={() => handleTabChange("Receives")}
            >
              My Receives
            </button>
          </div>

          {/* User Details Tab */}
          {activeTab === "details" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">Phone Number</h4>
                  <p className="text-gray-600">{userDetails?.phoneNumber || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">Address</h4>
                  <p className="text-gray-600">{userDetails?.address || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">Age</h4>
                  <p className="text-gray-600">{userDetails?.age || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">City</h4>
                  <p className="text-gray-600">{userDetails?.city || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">State</h4>
                  <p className="text-gray-600">{userDetails?.state || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">Gender</h4>
                  <p className="text-gray-600">{userDetails?.gender || "Not Provided"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-700">User Type</h4>
                  <p className="text-gray-600">{userDetails?.userType || "Not Provided"}</p>
                </div>
              </div>
            </div>
          )}

          {/* My Receives Tab */}
          {activeTab === "Receives" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Receives</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {receivedProducts.length > 0 ? receivedProducts.map((product) => (
                  <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300 h-64 w-64 flex flex-col justify-between border border-gray-300">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800">{product.productName}</h4>
                    <p className="text-lg text-gray-600">Condition: {product.condition}</p>
                    <p className="text-lg text-gray-600">Category:  {product.category}</p>
                  </div>
                )) : (
                  <p className="text-gray-600">You have not received any products yet.</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverProfile;
