import landingPageLogo from '../../assets/images/landingPageLogo.svg'

function Navigation() {
  return (
    // <div><Link to="/login">Home</Link></div>
    <div>
      <img src={landingPageLogo} />
      <div></div>
      <div>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navigation