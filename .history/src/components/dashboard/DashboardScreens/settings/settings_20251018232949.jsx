import { CgProfile } from "react-icons/cg";
import { useState } from "react"; // Import useState to manage the profile image state
import "./settings.css";

function Settings() {
  // State to hold the URL of the selected profile image
  const [profileImage, setProfileImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file and update the state
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="ms-4 txt-a0 w-100">
      <div className="fs-23 fw-500 mb-4">Personal Details </div>
      <div
        className="mb-5 d-flex justify-content-between align-items-center gap-3"
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
            <div className="fs-19 fw-500 txt-a0">Anne Godiva</div>
            <div className="fs-16 fw-400 txt-73">annegodiva@gmail.com</div>
          </div>
        </div>
        {/* Modify the input to include the onChange handler */}
        <input type="file" className="cursor" onChange={handleFileChange} accept="image/*" />
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">First Name</p>
        <input
          type="text"
          className="bg-trans col-12"
          placeholder="Anne"
          style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }}
        />
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Last Name</p>
        <input
          type="text"
          className="bg-trans col-12"
          placeholder="Godiva"
          style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }}
        />
      </div>
      <div className="mb-5">
        <p className="fs-19 fw-500 mb-3">Username</p>
        <input
          type="text"
          className="bg-trans col-12"
          placeholder="SahMenz"
          style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }}
        />
      </div>

      <div className="fs-23 fw-500 mb-4">Password and Security</div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Email Address</p>
        <input
          type="email"
          className="bg-trans col-12"
          placeholder="favourmicheal47@gmail.com"
          style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }}
        />
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Password</p>
        <input
          type="password"
          className="bg-trans col-12"
          placeholder="*****"
          style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }}
        />
      </div>
    </div>
  );
}

export default Settings;







// import { CgProfile } from "react-icons/cg"
// import "./settings.css"

// function Settings() {
//   return (
//     <div className="ms-4 txt-a0 w-100">
//       <div className="fs-23 fw-500 mb-4">Personal Details </div>
//       <div className="mb-5 d-flex justify-content-between align-items-center gap-3" style={{border:"0.2px solid #737373", borderRadius:"24px", padding:"8px 16px"}}>
//         <div className="d-flex align-items-center">
//           <div style={{maxWidth:"65px", maxHeight:"65px"}}>
//             <CgProfile  size={65}/>
//           </div>
//           <div className="ms-2">
//             <div className="fs-19 fw-500 txt-a0">Anne Godiva</div>
//             <div className="fs-16 fw-400 txt-73">annegodiva@gmail.com</div>
//           </div>
//         </div>
//         <input type="file" className="cursor"/>
//       </div>
//       <div className="mb-4">
//         <p className="fs-19 fw-500 mb-3">First Name</p>
//         <input type="text" className="bg-trans col-12" placeholder="Anne" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
//       </div>
//       <div className="mb-4">
//         <p className="fs-19 fw-500 mb-3">Last Name</p>
//         <input type="text" className="bg-trans col-12" placeholder="Godiva" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
//       </div>
//       <div className="mb-5">
//         <p className="fs-19 fw-500 mb-3">Username</p>
//         <input type="text" className="bg-trans col-12" placeholder="SahMenz" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
//       </div>

//       <div className="fs-23 fw-500 mb-4">Password and Security</div>
//       <div className="mb-4">
//         <p className="fs-19 fw-500 mb-3">Email Address</p>
//         <input type="email" className="bg-trans col-12" placeholder="favourmicheal47@gmail.com" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
//       </div>
//       <div className="mb-4">
//         <p className="fs-19 fw-500 mb-3">Password</p>
//         <input type="password" className="bg-trans col-12" placeholder="*****" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
//       </div>
//     </div>
//   )
// }

// export default Settings