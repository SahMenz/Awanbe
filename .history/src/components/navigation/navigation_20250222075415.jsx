import landingPageLogo from '../../assets/images/landingPageLogo.svg'

function Navigation() {
  return (
    // <div><Link to="/login">Home</Link></div>
    <div>
      <img src={landingPageLogo} />
      <div></div>
      <div>
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navigation