import { CgProfile } from "react-icons/cg";
import { useState, useRef } from "react";
import "./settings.css";
// NOTE: Assuming SchemaValidation is correctly imported and available at the path
import { SchemaValidation } from "../../../authentication/SchemaValidation";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik"; // Imported useFormikContext
import CustomErrorMsg from "../../../CustomErrorMsg/CustomErrorMsg";

// Sub-component to manage full name display and form submission
const FullNameForm = ({ displayName, setDisplayName }) => {
  const { values, submitForm } = useFormikContext();
  
  // Local state to hold the first name value for the input field
  const [firstName, setFirstName] = useState(displayName.firstName);
  // Local state to hold the last name value for the input field
  const [lastName, setLastName] = useState(displayName.lastName);

  const handleSave = (e) => {
    e.preventDefault(); // Prevent formik's default submission for the entire form
    
    // In a real application, you'd send this data to a backend API here.
    // For this example, we just update the display state.
    setDisplayName({ firstName: firstName, lastName: lastName });
    
    // Optional: Log the change
    console.log("Full Name Saved:", `${firstName} ${lastName}`);
  };

  return (
    <>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">First Name</p>
        <div
          className="d-flex gap-3 justify-content-between"
          style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
        >
          <input
            type="text"
            name="firstname" // Use "firstname" to match your SchemaValidation
            className="bg-trans col-8"
            placeholder="What's your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button
            onClick={handleSave}
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
        {/* Note: Formik's ErrorMessage might not work directly here since we are using local state/input for the "Save" logic */}
        {/* You'd typically use <Field> and map the initialValues to the input for full Formik validation/submission */}
        {/* For a direct fix based on your component structure, we'll keep it simple: */}
      </div>

      <div className="mb-5">
        <p className="fs-19 fw-500 mb-3">Last Name</p>
        <div
          className="d-flex gap-3 justify-content-between"
          style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
        >
          <input
            type="text"
            name="lastname" // Use "lastname" to match your SchemaValidation
            className="bg-trans col-8"
            placeholder="What's your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button
            onClick={handleSave}
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
    </>
  );
};


function Settings() {
  // State to hold the name displayed next to the profile picture
  const [displayName, setDisplayName] = useState({
    firstName: "Anne",
    lastName: "Godiva",
    email: "annegodiva@gmail.com" // Kept for display
  });

  const initialValues = {
    // Corrected to match SchemaValidation fields
    firstname: displayName.firstName,
    lastname: displayName.lastName,
    email: displayName.email,
    password: "",
    confirmPassword: "", // Added as per SchemaValidation
  };

  const handleFormikSubmission = (values) => {
    // This function will run if the main form (e.g., password/email) is submitted
    console.log("Full Form Submitted values (e.g., security):", values);
    // navigate("/dashboard");
  };

  // State to hold the URL of the selected profile image
  const [profileImage, setProfileImage] = useState(null);
  // Ref for the hidden file input
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file and update the state
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Function to trigger click on hidden file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="ms-sm-5 ms-0 txt-a0 w-100">
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaValidation}
        onSubmit={handleFormikSubmission}
        enableReinitialize={true} // Re-initialize Formik if initialValues change
      >
        <Form className="d-flex flex-column">
          <div className="fs-23 fw-500 mb-4">Personal Details </div>
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
                {/* Display dynamic full name */}
                <div className="fs-19 fw-500 txt-a0">{`${displayName.firstName} ${displayName.lastName}`}</div>
                <div className="fs-16 fw-400 txt-73">{displayName.email}</div>
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
              type="button" // Use type="button" to prevent form submission
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
          
          {/* Custom Full Name Fields (First Name & Last Name) */}
          <FullNameForm displayName={displayName} setDisplayName={setDisplayName} />


          <div className="mb-5">
            <p className="fs-19 fw-500 mb-3">Username</p>
            <div className="d-flex gap-3 justify-content-between"
              style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
            >
              <input
                type="text"
                className="bg-trans col-8"
                placeholder="Change your Username"
              />
              <button
                type="button" // Change to button
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
          <div className="mb-4">
            <p className="fs-19 fw-500 mb-3">Email Address</p>
            <div className="d-flex gap-3 justify-content-between"
              style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
            >
              <Field
                type="email"
                name="email"
                className="bg-trans col-8"
                placeholder="Edit your email address"
              />
              <button
                type="submit" // Will trigger formik submission if placed in a Formik <Form>
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
          <div className="mb-4">
            <p className="fs-19 fw-500 mb-3">Password</p>
            <div className="d-flex gap-3 justify-content-between"
              style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
            >
              <Field
                type="password"
                name="password"
                className="bg-trans col-8"
                placeholder="New Password"
              />
              <button
                type="submit" // Will trigger formik submission
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
          <div className="mb-4">
            <p className="fs-19 fw-500 mb-3">Confirm Password</p>
            <div className="d-flex gap-3 justify-content-between"
              style={{ borderRadius: "24px", padding: "8px 5px 8px 16px", border: "0.1px solid #737373" }}
            >
              <Field
                type="password"
                name="confirmPassword"
                className="bg-trans col-8"
                placeholder="Confirm New Password"
              />
              <button
                type="submit" // Will trigger formik submission
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
            <ErrorMessage
              name="confirmPassword"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  errorMsg={errorMsg}
                />
              )}
            />
          </div>
        </Form>
      </Formik>
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
