import { CgProfile } from "react-icons/cg";
import { useState, useRef, useEffect } from "react"; // Added useEffect
import "./settings.css";
import { useSelector, useDispatch } from "react-redux"; // Import Redux Hooks
import { setUsername, setProfileImage } from "../../../../redux/slices/userProfileSlice";
import { setUser } from "../../../../redux/slices/authSlice"; // Import setUser to update name/email in auth slice

function Settings() {
  const dispatch = useDispatch();

  // --- REDUX STATE ACCESS ---
  // Get primary user details from authSlice
  const user = useSelector((state) => state.auth.user);
  const userFullName = user ? `${user.name || user.firstname + ' ' + user.lastname}` : "Guest User";
  const userEmail = user ? user.email : "guest@example.com";
  
  // Get profile-specific details from userProfileSlice
  const username = useSelector((state) => state.userProfile.username);
  const profileImage = useSelector((state) => state.userProfile.profileImage);

  // --- Profile Image State and Handlers ---
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // Dispatch action to update profile image URL in Redux
      dispatch(setProfileImage(imageUrl)); 
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // --- END: Profile Image State and Handlers ---

  // --- Local Input States (for controlled inputs before saving) ---
  // Initialize local input states with values from Redux/derived Redux state
  const [inputFullName, setInputFullName] = useState(userFullName);
  const [inputUsername, setInputUsername] = useState(username);
  const [inputEmail, setInputEmail] = useState(userEmail);
  const [inputPassword, setInputPassword] = useState("");

  // Sync local input state with Redux state when Redux state changes (e.g., initial load or update)
  useEffect(() => {
    setInputFullName(userFullName);
    setInputEmail(userEmail);
  }, [userFullName, userEmail]);
  
  useEffect(() => {
    setInputUsername(username);
  }, [username]);

  // --- Save Handlers ---

  const handleSaveFullName = (e) => {
    e.preventDefault();
    const newFullName = inputFullName.trim();
    if (newFullName !== "") {
      // In a real app: call API to save full name
      
      // Update Redux state. Note: This updates the name property in the user object.
      // Assuming a simple name update:
      const nameParts = newFullName.split(' ');
      const newUserData = {
        ...user,
        name: newFullName,
        firstname: nameParts[0],
        lastname: nameParts.slice(1).join(' ') || nameParts[0], // simple split logic
      };
      dispatch(setUser(newUserData));
      
      alert(`Full Name updated to: ${newFullName}`);
    } else {
      alert("Full Name cannot be empty.");
    }
  };

  const handleSaveUsername = (e) => {
    e.preventDefault();
    const newUsername = inputUsername.trim();
    if (newUsername !== "") {
      // In a real app: call API to save username
      
      // Dispatch action to update username in Redux
      dispatch(setUsername(newUsername));
      
      alert(`Username updated to: ${newUsername}`);
    } else {
      alert("Username cannot be empty.");
    }
  };

  const handleSaveEmail = (e) => {
    e.preventDefault();
    const newEmail = inputEmail.trim();
    if (newEmail !== "" && newEmail.includes("@")) { // Simple email check
      // In a real app: call API to save email (often triggers verification)
      
      // Update Redux state. Note: This updates the email property in the user object.
      dispatch(setUser({ ...user, email: newEmail }));
      
      alert(`Email updated to: ${newEmail}`);
    } else {
      alert("Please enter a valid email.");
    }
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (inputPassword.length >= 8) { // Simple password length check
      // In a real app: Call API to change password (requires current password verification)
      alert("Password updated successfully.");
      setInputPassword(""); // Clear password field after successful update
    } else {
      alert("Password must be at least 8 characters.");
    }
  };

  return (
    <div className="ms-sm-5 ms-0 txt-a0 w-100">
      {/* Using a simple div block instead of <Formik> <Form> */}
      <div className="d-flex flex-column"> 
        <div className="fs-23 fw-500 mb-4">Personal Details </div>
        
        {/* Profile Card */}
        <div
          className="mb-5 d-flex justify-content-between flex-wrap align-items-center gap-4"
          style={{ border: "0.2px solid #737373", borderRadius: "24px", padding: "8px 16px" }}
        >
          <div className="d-flex align-items-center">
            <div style={{width: "60px", 
              height: "60px", 
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center" ,borderRadius: "50%" }}>
              {/* Display profile image from Redux state */}
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                // Default icon if no image is selected
                <CgProfile size={65} />
              )}
            </div>
            <div className="ms-2">
              {/* Display full name from Redux state */}
              <div className="fs-19 fw-500 txt-a0">{userFullName}</div> 
              {/* Display email from Redux state */}
              <div className="fs-16 fw-400 txt-73">{userEmail}</div> 
            </div>
          </div>

          {/* 1. Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />

          {/* 2. Custom Styled Button to Trigger File Input */}
          <button
            type="button" // Important: set type="button" to prevent form submission if this were inside a <form>
            onClick={handleButtonClick}
            className="cursor"
            style={{
              background: '#A04D07',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '18px',
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Change Photo
          </button>
        </div>
        
        {/* Full Name Field */}
        <div className="mb-4">
          <p className="fs-19 fw-500 mb-3">Full Name</p>
          <div className="d-flex gap-3 justify-content-between"
            style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
          >
            <input
              type="text"
              name="fullName"
              className="bg-trans col-8"
              placeholder="What's your full name"
              value={inputFullName}
              onChange={(e) => setInputFullName(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSaveFullName} 
              className="cursor"
              style={{
                background: '#A04D07',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '18px',
                padding: '10px 20px',
              }}
            >
              Save
            </button>
          </div>
        </div>
        
        {/* Username Field */}
        <div className="mb-5">
          <p className="fs-19 fw-500 mb-3">Username</p>
          <div className="d-flex gap-3 justify-content-between"
            style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
          >
            <input
              type="text"
              className="bg-trans col-8"
              placeholder="Change your Username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSaveUsername} 
              className="cursor"
              style={{
                background: '#A04D07',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '18px',
                padding: '10px 20px',
              }}
            >
              Save
            </button>
          </div>
        </div>

        <div className="fs-23 fw-500 mb-4">Password and Security</div>
        
        {/* Email Field */}
        <div className="mb-4">
          <p className="fs-19 fw-500 mb-3">Email Address</p>
          <div className="d-flex gap-3 justify-content-between"
            style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
          >
            <input
              type="email"
              className="bg-trans col-8"
              placeholder="Edit your email address"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSaveEmail} 
              className="cursor"
              style={{
                background: '#A04D07',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '18px',
                padding: '10px 20px',
              }}
            >
              Save
            </button>
          </div>
        </div>
        
        {/* Password Field */}
        <div className="mb-4">
          <p className="fs-19 fw-500 mb-3">Password</p>
          <div className="d-flex gap-3 justify-content-between"
            style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
          >
            <input
              type="password"
              className="bg-trans col-8"
              placeholder="*****"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSavePassword} 
              className="cursor"
              style={{
                background: '#A04D07',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '18px',
                padding: '10px 20px',
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;





// import { CgProfile } from "react-icons/cg";
// import { useState, useRef } from "react";
// import "./settings.css";

// // redux addition
// function Settings() {
//   // --- Profile Image State and Handlers ---
//   const [profileImage, setProfileImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };
//   // --- END: Profile Image State and Handlers ---

//   // --- Profile Details State ---
//   // These represent the *currently displayed* profile info
//   const [displayedFullName, setDisplayedFullName] = useState("Anne Godiva");
//   const [displayedEmail, setDisplayedEmail] = useState("annegodiva@gmail.com");

//   // These represent the *current input values* for each field
//   const [inputFullName, setInputFullName] = useState(displayedFullName);
//   const [inputUsername, setInputUsername] = useState("SahMenz");
//   const [inputEmail, setInputEmail] = useState(displayedEmail);
//   const [inputPassword, setInputPassword] = useState("");

//   // --- Save Handlers ---

//   const handleSaveFullName = (e) => {
//     e.preventDefault();
//     if (inputFullName.trim() !== "") {
//       setDisplayedFullName(inputFullName.trim());
//       alert(`Full Name updated to: ${inputFullName.trim()}`);
//       // In a real application, you would send this data to a server here.
//     } else {
//       alert("Full Name cannot be empty.");
//     }
//   };

//   const handleSaveUsername = (e) => {
//     e.preventDefault();
//     if (inputUsername.trim() !== "") {
//       // Logic for saving username
//       alert(`Username updated to: ${inputUsername.trim()}`);
//     } else {
//       alert("Username cannot be empty.");
//     }
//   };

//   const handleSaveEmail = (e) => {
//     e.preventDefault();
//     if (inputEmail.trim() !== "" && inputEmail.includes("@")) { // Simple email check
//       setDisplayedEmail(inputEmail.trim());
//       alert(`Email updated to: ${inputEmail.trim()}`);
//       // In a real application, this would trigger an email verification flow.
//     } else {
//       alert("Please enter a valid email.");
//     }
//   };

//   const handleSavePassword = (e) => {
//     e.preventDefault();
//     if (inputPassword.length >= 8) { // Simple password length check
//       alert("Password updated successfully.");
//       setInputPassword(""); // Clear password field after successful update
//       // In a real app, this requires current password verification, hashing, and server call.
//     } else {
//       alert("Password must be at least 8 characters.");
//     }
//   };

//   return (
//     <div className="ms-sm-5 ms-0 txt-a0 w-100">
//       {/* Using a simple div block instead of <Formik> <Form>
//         Each field will use a button with an onClick handler that calls e.preventDefault()
//       */}
//       <div className="d-flex flex-column"> 
//         <div className="fs-23 fw-500 mb-4">Personal Details </div>
        
//         {/* Profile Card */}
//         <div
//           className="mb-5 d-flex justify-content-between flex-wrap align-items-center gap-4"
//           style={{ border: "0.2px solid #737373", borderRadius: "24px", padding: "8px 16px" }}
//         >
//           <div className="d-flex align-items-center">
//             <div style={{ maxWidth: "65px", maxHeight: "65px", overflow: "hidden", borderRadius: "50%" }}>
//               {/* Conditional rendering for the profile image */}
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               ) : (
//                 // Default icon if no image is selected
//                 <CgProfile size={65} />
//               )}
//             </div>
//             <div className="ms-2">
//               <div className="fs-19 fw-500 txt-a0">{displayedFullName}</div> {/* Display saved full name */}
//               <div className="fs-16 fw-400 txt-73">{displayedEmail}</div> {/* Display saved email */}
//             </div>
//           </div>

//           {/* 1. Hidden File Input */}
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             accept="image/*"
//             style={{ display: 'none' }}
//           />

//           {/* 2. Custom Styled Button to Trigger File Input */}
//           <button
//             type="button" // Important: set type="button" to prevent form submission if this were inside a <form>
//             onClick={handleButtonClick}
//             className="cursor"
//             style={{
//               background: '#A04D07',
//               color: '#FFFFFF',
//               border: 'none',
//               borderRadius: '18px',
//               padding: '10px 20px',
//               fontSize: '16px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s',
//             }}
//           >
//             Change Photo
//           </button>
//         </div>
        
//         {/* Full Name Field */}
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Full Name</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="text"
//               name="fullName"
//               className="bg-trans col-8"
//               placeholder="What's your full name"
//               value={inputFullName}
//               onChange={(e) => setInputFullName(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={handleSaveFullName} // Changed to handleSaveFullName
//               className="cursor"
//               style={{
//                 background: '#A04D07',
//                 color: '#FFFFFF',
//                 border: 'none',
//                 borderRadius: '18px',
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//           {/* Removed ErrorMessage and CustomErrorMsg components */}
//         </div>
        
//         {/* Username Field */}
//         <div className="mb-5">
//           <p className="fs-19 fw-500 mb-3">Username</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="text"
//               className="bg-trans col-8"
//               placeholder="Change your Username"
//               value={inputUsername}
//               onChange={(e) => setInputUsername(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={handleSaveUsername} // Added handler
//               className="cursor"
//               style={{
//                 background: '#A04D07',
//                 color: '#FFFFFF',
//                 border: 'none',
//                 borderRadius: '18px',
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>

//         <div className="fs-23 fw-500 mb-4">Password and Security</div>
        
//         {/* Email Field */}
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Email Address</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="email"
//               className="bg-trans col-8"
//               placeholder="Edit your email address"
//               value={inputEmail}
//               onChange={(e) => setInputEmail(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={handleSaveEmail} // Changed to handleSaveEmail
//               className="cursor"
//               style={{
//                 background: '#A04D07',
//                 color: '#FFFFFF',
//                 border: 'none',
//                 borderRadius: '18px',
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
        
//         {/* Password Field */}
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Password</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="password"
//               className="bg-trans col-8"
//               placeholder="*****"
//               value={inputPassword}
//               onChange={(e) => setInputPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={handleSavePassword} // Added handler
//               className="cursor"
//               style={{
//                 background: '#A04D07',
//                 color: '#FFFFFF',
//                 border: 'none',
//                 borderRadius: '18px',
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;