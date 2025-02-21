import './login.css'
import authImage from '../../../assets/images/authImage.png'
import logoName from '../../../assets/images/logoName.svg'
import email from '../../../assets/images/email.svg'
import password from '../../../assets/images/password.svg'
import cancelledEyes from '../../../assets/images/cancelledEyes.svg'
import CustomSvg from '../../customSvg/CustomSvg'

function Login() {
  return (
    <div className='d-flex'>
      <div className='w-50'>
        <div className='w-50 d-flex flex-column justify-content-center text-center'>
          <div>
          <img src={logoName}/>
          <div className='fw-700 fs-43'>Let’s Get the Party Started!</div>
          <div className='d-flex align-items-center justify-content-center'>
          <button className='me-4'><CustomSvg name="google"/></button>
          <button className='ms-4'><CustomSvg name="apple"/></button>
          </div>
          <div>Or</div>
          </div>
          <div className='text-start bg-f3 fw-500 fs-16 p-3' style={{borderRadius:"25px"}}>
          <img src={email} style={{backgroundColor:"#f3f3f3", marginRight:"8px"}}/>
          <input type="email" placeholder="Email" className='bg-f3'/>
          </div>
          <div className='bg-f3 fw-500 fs-16 p-3 text-start' style={{borderRadius:"25px"}}>
          <img src={password} style={{backgroundColor:"#f3f3f3", marginRight:"8px"}}/>
          <input type="email" placeholder="Password" className='bg-f3 me-3'/>
          <img src={cancelledEyes} style={{display:"inline-flex", alignItems:"flex-end",backgroundColor:"#f3f3f3"}}/>
          </div>
          <div className='align-self-end'>
          Forgot password?
          </div>
          <button className='fw-600 fs-23 py-3' style={{borderRadius:"50px",backgroundColor:"#A04D07", color:"white"}}>Sign in </button>
          <div className='fs-16 fw-400'>Don’t have an Account? Sign up</div>
        </div>
      </div>
      <img src={authImage} className='w-50 authImage'/>
    </div>
  )
}

export default Login