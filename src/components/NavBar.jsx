// import { Link } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Listen for changes in the authentication state
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If the user is logged in, set the currentUser state
//         setCurrentUser(user);
//       } else {
//         // If no user is logged in, set currentUser to null
//         setCurrentUser(null);
//       }
//     });

//     // Cleanup the listener when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4590/4590171.png"
//             alt="Logo"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="text-lg font-bold text-green-600 cursor-pointer">EcoConnect</span>
//         </div>

//         {/* Center Links */}
//         <ul className="hidden md:flex space-x-8 text-gray-600">
//           <li>
//             <Link to="/" className="hover:text-green-600 transition active">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:text-green-600 transition">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/howitworks" className="hover:text-green-600 transition">
//               How It Works
//             </Link>
//           </li>
//           <li>
//             <Link to="/requests" className="hover:text-green-600 transition">
//               Requests
//             </Link>
//           </li>
//           <li>
//             <Link to="/resources" className="hover:text-green-600 transition">
//               Resources
//             </Link>
//           </li>
//         </ul>

//         {/* Profile or Get Started Button */}
//         <div>
//           {currentUser ? (
//             <Link to="/profile">
//               <img
//                 src={currentUser.profilePhoto || "https://www.w3schools.com/howto/img_avatar.png"} // Default photo if not set
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//               />
//             </Link>
//           ) : (
//             <Link
//               to="/getstarted"
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Get Started
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;














 








// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useState, useEffect } from 'react';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// const Navbar = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userType, setUserType] = useState(null); // State to hold userType
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Listen for changes in the authentication state
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If the user is logged in, set the currentUser state
//         setCurrentUser(user);
        
//         // Fetch userType from Firestore based on UID
//         const db = getFirestore();
//         const userDocRef = doc(db, "users", user.uid); // Assuming "users" is your collection name

//         getDoc(userDocRef).then((docSnap) => {
//           if (docSnap.exists()) {
//             const userData = docSnap.data();
//             setUserType(userData.userType); // Set userType to state
//           } else {
//             console.log("No such document!");
//           }
//         }).catch((error) => {
//           console.error("Error getting document:", error);
//         });
//       } else {
//         // If no user is logged in, reset states
//         setCurrentUser(null);
//         setUserType(null);
//       }
//     });

//     // Cleanup the listener when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   // Check if the user is logged in and render links accordingly
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4590/4590171.png"
//             alt="Logo"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="text-lg font-bold text-green-600 cursor-pointer">EcoConnect</span>
//         </div>

//         {/* Center Links */}
//         <ul className="hidden md:flex space-x-8 text-gray-600">
//           <li>
//             <Link to="/" className="hover:text-green-600 transition">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:text-green-600 transition">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/howitworks" className="hover:text-green-600 transition">
//               How It Works
//             </Link>
//           </li>
//           <li>
//             <Link to="/requests" className="hover:text-green-600 transition">
//               Requests
//             </Link>
//           </li>
//           <li>
//             <Link to="/resources" className="hover:text-green-600 transition">
//               Resources
//             </Link>
//           </li>
//         </ul>

//         {/* Profile or Get Started Button */}
//         <div>
//           {currentUser ? (
//             <Link to={userType === 'donor' ? '/DonorProfile' : userType === 'receiver' ? '/ReceiverProfile' : '#'}>
//               <img
//                 src={currentUser.photoURL || "https://www.w3schools.com/howto/img_avatar.png"} // Default photo if not set
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//               />
//             </Link>
//           ) : (
//             <Link
//               to="/getstarted"
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Get Started
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null); // State to hold userType
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in the authentication state
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, set the currentUser state
        setCurrentUser(user);
        
        // Fetch userType from Firestore based on UID
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid); // Assuming "users" is your collection name

        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserType(userData.userType); // Set userType to state
          } else {
            console.log("No such document!");
          }
        }).catch((error) => {
          console.error("Error getting document:", error);
        });
      } else {
        // If no user is logged in, reset states
        setCurrentUser(null);
        setUserType(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Check if the user is logged in and render links accordingly
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4590/4590171.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold text-green-600 cursor-pointer">Solid Waste Management</span>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600">
          <li>
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/howitworks" className="hover:text-green-600 transition">
              The Process
            </Link>
          </li>
          <li>
            <Link to="/requests" className="hover:text-green-600 transition">
              Requests
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-green-600 transition">
              Resources
            </Link>
          </li>
        </ul>

        {/* Profile or Get Started Button */}
        <div>
          {currentUser ? (
            userType === 'donor' ? (
              <Link to="/DonorProfile">
                <img
                  src={currentUser.photoURL || "https://www.w3schools.com/howto/img_avatar.png"} // Default photo if not set
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </Link>
            ) : userType === 'receiver' ? (
              <Link to="/ReceiverProfile">
                <img
                  src={currentUser.photoURL || "https://www.w3schools.com/howto/img_avatar.png"} // Default photo if not set
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </Link>
            ) : null
          ) : (
            <Link
              to="/getstarted"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
