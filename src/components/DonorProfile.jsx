// import React, { useState, useEffect } from 'react';
// import { getAuth, signOut } from 'firebase/auth';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { FaDonate } from 'react-icons/fa';  // Import the donation icon from react-icons

// const Profile = () => {
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

//           {/* Donate Now Button */}
//           <div className="mt-6">
//             <button
//               onClick={() => navigate('/donationform')}  // Navigate to the donation form page
//               className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-200"
//             >
//               <FaDonate className="mr-3" /> {/* Add the donate icon */}
//               Donate Now
//             </button>
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
//               className={`px-6 py-3 text-lg font-semibold ${activeTab === "donations" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
//               onClick={() => handleTabChange("donations")}
//             >
//               My Donations
//             </button>
//           </div>

//           {/* User Details Tab */}
//           {activeTab === "details" && (
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Info</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//                 {/* User Detail Cards */}
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

//           {/* Donations Tab (future functionality) */}
//           {activeTab === "donations" && (
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Donations</h3>
//               {/* Donations data will be displayed here */}
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

// export default Profile;





















import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { FaDonate } from 'react-icons/fa'; // Import the donation icon from react-icons

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [donations, setDonations] = useState([]);  // State to hold donations
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

      // Fetch donations for the current user from Firestore
      const fetchDonations = async () => {
        const db = getFirestore();
        const donationsRef = collection(db, "donations");
        const q = query(donationsRef, where("donorId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const donationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonations(donationsData);
      };

      fetchDonations();

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

          {/* Donate Now Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate('/donationform')}  // Navigate to the donation form page
              className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-200"
            >
              <FaDonate className="mr-3" /> {/* Add the donate icon */}
              Donate Now
            </button>
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
              className={`px-6 py-3 text-lg font-semibold ${activeTab === "donations" ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"}`}
              onClick={() => handleTabChange("donations")}
            >
              My Donations
            </button>
          </div>

          {/* User Details Tab */}
          {activeTab === "details" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {/* User Detail Cards */}
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

          {/* Donations Tab */}
          {activeTab === "donations" && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">My Donations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {donations.length > 0 ? donations.map((donation) => (
                  <div key={donation.id} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300 h-64 w-64 flex flex-col justify-between border border-gray-300">
                    <img src={donation.image} alt={donation.productName} className="w-full h-32 object-cover rounded-md mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800">{donation.productName}</h4>
                    <p className="text-lg text-gray-600">₹ {donation.price}</p>
                    <p className="text-sm text-gray-500">Quantity: {donation.quantity}</p>
                  </div>
                )) : (
                  <p className="text-gray-600">You have not made any donations yet.</p>
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

export default Profile;
