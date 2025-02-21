import authImage from '../../assets/images/authImage.png'
import logoName from '../../assets/images/logoName.svg'
import CustomSvg from '../customSvg/CustomSvg'

function Login() {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div>
          <img src={logoName}/>
          <div className='fw-700 ff-43'>Let’s Get the Party Started!</div>
          <div className='d-flex align-items-center justify-content-center'>
            <button className='me-4'><CustomSvg name="google"/></button>
            <button className='ms-4'><CustomSvg name="apple"/></button>
          </div>
          <div>Or</div>
        </div>
        <div className='bg-f3 fw-500 fs-16 p-3' style={{borderRadius:"25px"}}>
          <CustomSvg name="email" color="#f3f3f3"/>
          <input type="email" placeholder="" className='bg-f3'/>
        </div>
      </div>
      <div><img src={authImage}/></div>
    </div>
  )
}

export default Login