import authImage from '../../assets/images/authImage.png'

function Login() {
  return (
    <div className='d-flex'>
      <div>
        <img src={logoName}/>
      </div>
      <div><img src={authImage}/></div>
    </div>
  )
}

export default Login