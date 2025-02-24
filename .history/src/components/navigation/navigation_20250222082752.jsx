import landingPageLogo from '../../assets/images/landingPageLogo.svg'

function Navigation() {
  return (
    // <div><Link to="/login">Home</Link></div>
    <div className='d-flex'>
      <img src={landingPageLogo} />
      <div></div>
      <div>
        <button className='txt-a0 bg-trans fw-500 fs-16' style={{borderRadius:""}}>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navigation