import authImage from '../../assets/images/authImage.png'
import logoName from '../../assets/images/logoName.svg'

function Login() {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-direction-column align-items-center justify-content-center'>
        <img src={logoName}/>
        <div className='fw-700 ff-43'>Let’s Get the Party Started!</div>
        <div>
          <button></button>
        </div>
      </div>
      <div><img src={authImage}/></div>
    </div>
  )
}

export default Login