function Settings() {
  return (
    <div className="ms-4 txt-a0 w-100">
      <div className="fs-23 fw-500 mb-4">Personal Details </div>
      <div className="mb-4" style={{border:"0.2px solid #737373", borderRadius:"24px", padding:"8px 16px"}}>
        <div className="mb-4">
          <div style={{}}>

          </div>
          <div className="ms-3">
            <div className="fs-19 fw-500 txt-a0">Anne Godiva</div>
            <div className="fs-16 fw-400 txt-73">annegodiva@gmail.com</div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">First Name</p>
        <input type="text" className="bg-trans col-12" placeholder="Anne" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Last Name</p>
        <input type="text" className="bg-trans col-12" placeholder="Godiva" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
      </div>
      <div className="mb-5">
        <p className="fs-19 fw-500 mb-3">Username</p>
        <input type="text" className="bg-trans col-12" placeholder="SahMenz" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
      </div>

      <div className="fs-23 fw-500 mb-4">Password and Security</div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Email Address</p>
        <input type="email" className="bg-trans col-12" placeholder="favourmicheal47@gmail.com" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Password</p>
        <input type="password" className="bg-trans col-12" placeholder="*****" style={{ borderRadius: "24px", padding: "8px 16px", border: "0.1px solid #737373" }} />
      </div>
    </div>
  )
}

export default Settings