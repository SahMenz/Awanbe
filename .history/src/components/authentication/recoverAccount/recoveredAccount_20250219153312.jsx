import authImage from '../../../assets/images/authImage.png'
import logoName from '../../../assets/images/logoName.svg'

function RecoveredAccount() {
  return (
    <div className="d-flex align-items-center m-4 m-xl-0">
      {/* <div className=''> */}
      <div className="p-5 pt-5 d-flex flex-column col-12 col-xl-6 text-center">
        <div className="mb-3">
          <img src={logoName} />
          <div className="fw-700 fs-43 mt-5">Account Recovered</div>
          <div className="fs-19 fw-400 txt-73">
            Your account has been recovered
          </div>
        </div>
        <button
          className="mt-5 mb-3 fw-600 fs-23 py-3"
          style={{
            minWidth: "300px",
            borderRadius: "50px",
            backgroundColor: "#A04D07",
            color: "white",
          }}
        >
          Sign in
        </button>
      </div>
      {/* </div> */}
      <img src={authImage} className="col-xl-6 d-none d-xl-flex" />
    </div>
  );
}

export default RecoveredAccount;
