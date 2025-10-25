import { CgProfile } from "react-icons/cg";
import { useState, useRef } from "react";
import "./settings.css";

// redux addition
function Settings() {
  // --- Profile Image State and Handlers ---
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // --- END: Profile Image State and Handlers ---

  // --- Profile Details State ---
  // These represent the *currently displayed* profile info
  const [displayedFullName, setDisplayedFullName] = useState("Anne Godiva");
  const [displayedEmail, setDisplayedEmail] = useState("annegodiva@gmail.com");

  // These represent the *current input values* for each field
  const [inputFullName, setInputFullName] = useState(displayedFullName);
  const [inputUsername, setInputUsername] = useState("SahMenz");
  const [inputEmail, setInputEmail] = useState(displayedEmail);
  const [inputPassword, setInputPassword] = useState("");

  // --- Save Handlers ---

  const handleSaveFullName = (e) => {
    e.preventDefault();
    if (inputFullName.trim() !== "") {
      setDisplayedFullName(inputFullName.trim());
      alert(`Full Name updated to: ${inputFullName.trim()}`);
      // In a real application, you would send this data to a server here.
    } else {
      alert("Full Name cannot be empty.");
    }
  };

  const handleSaveUsername = (e) => {
    e.preventDefault();
    if (inputUsername.trim() !== "") {
      // Logic for saving username
      alert(`Username updated to: ${inputUsername.trim()}`);
    } else {
      alert("Username cannot be empty.");
    }
  };

  const handleSaveEmail = (e) => {
    e.preventDefault();
    if (inputEmail.trim() !== "" && inputEmail.includes("@")) { // Simple email check
      setDisplayedEmail(inputEmail.trim());
      alert(`Email updated to: ${inputEmail.trim()}`);
      // In a real application, this would trigger an email verification flow.
    } else {
      alert("Please enter a valid email.");
    }
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (inputPassword.length >= 8) { // Simple password length check
      alert("Password updated successfully.");
      setInputPassword(""); // Clear password field after successful update
      // In a real app, this requires current password verification, hashing, and server call.
    } else {
      alert("Password must be at least 8 characters.");
    }
  };

  return (
    <div className="ms-sm-5 ms-0 txt-a0 w-100">
      {/* Using a simple div block instead of <Formik> <Form>
        Each field will use a button with an onClick handler that calls e.preventDefault()
      */}
      <div className="d-flex flex-column"> 
        <div className="fs-23 fw-500 mb-4">Personal Details </div>
        
        {/* Profile Card */}
        <div
          className="mb-5 d-flex justify-content-between flex-wrap align-items-center gap-4"
          style={{ border: "0.2px solid #737373", borderRadius: "24px", padding: "8px 16px" }}
        >
          <div className="d-flex align-items-center">
            <div style={{ maxWidth: "65px", maxHeight: "65px", overflow: "hidden", borderRadius: "50%" }}>
              {/* Conditional rendering for the profile image */}
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
              <div className="fs-19 fw-500 txt-a0">{displayedFullName}</div> {/* Display saved full name */}
              <div className="fs-16 fw-400 txt-73">{displayedEmail}</div> {/* Display saved email */}
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
              onClick={handleSaveFullName} // Changed to handleSaveFullName
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
          {/* Removed ErrorMessage and CustomErrorMsg components */}
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
              onClick={handleSaveUsername} // Added handler
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
              onClick={handleSaveEmail} // Changed to handleSaveEmail
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
              onClick={handleSavePassword} // Added handler
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
// import { useState, useRef } from "react"; // Import useRef for file input
// import "./settings.css";

// function Settings() {

//   const initialValues = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   };


//   // State to hold the URL of the selected profile image
//   const [profileImage, setProfileImage] = useState(null);
//   // Ref for the hidden file input
//   const fileInputRef = useRef(null);

//   // Function to handle file selection
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       // Create a URL for the selected file and update the state
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   // Function to trigger click on hidden file input
//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div className="ms-sm-5 ms-0 txt-a0 w-100">
//       {/* <Formik
//         initialValues={initialValues}
//         validationSchema={SchemaValidation}
//         onSubmit={handleSignUpSubmission}
//       > */}
//         <div className="fs-23 fw-500 mb-4">Personal Details </div>
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
//               <div className="fs-19 fw-500 txt-a0">Anne Godiva</div> {/* full name here */}
//               <div className="fs-16 fw-400 txt-73">annegodiva@gmail.com</div> {/* email here */}
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
//             onClick={handleButtonClick}
//             className="cursor"
//             style={{
//               background: '#A04D07', // Set background color
//               color: '#FFFFFF', // Set text color
//               border: 'none',
//               borderRadius: '18px', // Slightly smaller radius for the button
//               padding: '10px 20px',
//               fontSize: '16px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s',
//             }}
//           // You could add a hover effect here if using a CSS file or styled-components
//           >
//             Change Photo
//           </button>
//         </div>
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Full Name</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="text"
//               className="bg-trans col-8"
//               placeholder="Change your name"
//             />
//             <button
//               className="cursor"
//               style={{
//                 background: '#A04D07', // Set background color
//                 color: '#FFFFFF', // Set text color
//                 border: 'none',
//                 borderRadius: '18px', // Slightly smaller radius for the button
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//         {/* <div className="mb-4">
//         <p className="fs-19 fw-500 mb-3">Last Name</p>
//         <div className="d-flex gap-3 justify-content-between"
//           style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//         >
//           <input
//             type="text"
//             className="bg-trans col-8"
//             placeholder="Change your Last name"
//           />
//           <button
//             className="cursor"
//             style={{
//               background: '#A04D07', // Set background color
//               color: '#FFFFFF', // Set text color
//               border: 'none',
//               borderRadius: '18px', // Slightly smaller radius for the button
//               padding: '10px 20px',
//             }}
//           >
//             Save
//           </button>
//         </div>
//       </div> */}
//         <div className="mb-5">
//           <p className="fs-19 fw-500 mb-3">Username</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="text"
//               className="bg-trans col-8"
//               placeholder="Change your Username"
//             />
//             <button
//               className="cursor"
//               style={{
//                 background: '#A04D07', // Set background color
//                 color: '#FFFFFF', // Set text color
//                 border: 'none',
//                 borderRadius: '18px', // Slightly smaller radius for the button
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>

//         <div className="fs-23 fw-500 mb-4">Password and Security</div>
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Email Address</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="email"
//               className="bg-trans col-8"
//               placeholder="Edit your email address"
//             />
//             <button
//               className="cursor"
//               style={{
//                 background: '#A04D07', // Set background color
//                 color: '#FFFFFF', // Set text color
//                 border: 'none',
//                 borderRadius: '18px', // Slightly smaller radius for the button
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <p className="fs-19 fw-500 mb-3">Password</p>
//           <div className="d-flex gap-3 justify-content-between"
//             style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
//           >
//             <input
//               type="password"
//               className="bg-trans col-8"
//               placeholder="*****"
//             />
//             <button
//               className="cursor"
//               style={{
//                 background: '#A04D07', // Set background color
//                 color: '#FFFFFF', // Set text color
//                 border: 'none',
//                 borderRadius: '18px', // Slightly smaller radius for the button
//                 padding: '10px 20px',
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       {/* </Formik> */}
//     </div>
//   );
// }

// export default Settings;
