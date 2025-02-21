import authImage from '../../assets/images/authImage.png'
import logoName from '../../assets/images/logoName.svg'

function Login() {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-direction-column align-items-center justify-content-center'>
        <img src={logoName}/>
      </div>
      <div><img src={authImage}/></div>
    </div>
  )
}

export default Login