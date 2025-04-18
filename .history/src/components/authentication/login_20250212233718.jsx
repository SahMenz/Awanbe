import authImage from '../../assets/images/authImage.png'
import logoName from '../../assets/images/logoName.svg'
import email from '../../assets/images/email.svg'
import password from '../../assets/images/password.svg'
import cancelledEyes from '../../assets/images/cancelledEyes.svg'
import CustomSvg from '../customSvg/CustomSvg'

function Login() {
  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex flex-column align-items- justify-content-center'>
        <div>
          <img src={logoName}/>
          <div className='fw-700 fs-43'>Let’s Get the Party Started!</div>
          <div className='d-flex align-items-center justify-content-center'>
            <button className='me-4'><CustomSvg name="google"/></button>
            <button className='ms-4'><CustomSvg name="apple"/></button>
          </div>
          <div>Or</div>
        </div>
        <div className='bg-f3 fw-500 fs-16 p-3' style={{borderRadius:"25px"}}>
          <img src={email} style={{backgroundColor:"#f3f3f3", marginRight:"8px"}}/>
          <input type="email" placeholder="Email" className='bg-f3'/>
        </div>
        <div className='bg-f3 fw-500 fs-16 p-3' style={{borderRadius:"25px"}}>
          <img src={password} style={{backgroundColor:"#f3f3f3", marginRight:"8px"}}/>
          <input type="email" placeholder="Password" className='bg-f3 me-3'/>
          <img src={cancelledEyes}/>
        </div>
        <div className='align-self-end'>
          Forgot password?
        </div>
        <button className='fw-600 fs-23' style={{borderRadius:"50px",backgroundColor:"#A04D07", padding:"18px 120px", color:"white"}}>Sign in </button>
        <div className='fs-16 fw-400'>Don’t have an Account? Sign up</div>
      </div>
      <div><img src={authImage}/></div>
    </div>
  )
}

export default Login