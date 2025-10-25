function Settings() {
  return (
    <div className="ms-4 txt-a0 w-100">
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">First Name</p>
        <input type="text" className="bg-trans col-12" placeholder="Anne" style={{borderRadius:"24px", padding:"8px 16px", border:"0.1px solid #737373"}}/>
      </div>
      <div className="mb-4">
        <p className="fs-19 fw-500 mb-3">Last Name</p>
        <input type="text" className="bg-trans col-12" placeholder="Godiva" style={{borderRadius:"24px", padding:"8px 16px", border:"0.1px solid #737373"}}/>
      </div>
      <div className="mb-5">
        <p className="fs-19 fw-500 mb-3">Username</p>
        <input type="text" className="bg-trans col-12" placeholder="SahMenz" style={{borderRadius:"24px", padding:"8px 16px", border:"0.1px solid #737373"}}/>
      </div>
      
      <div className="fs-23 fw-500">Password and Security</div>
    </div>
  )
}

export default Settings