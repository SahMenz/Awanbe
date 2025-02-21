import authImage from '../../../assets/images/authImage.png'
import logoName from '../../../assets/images/logoName.svg'
import email from '../../../assets/images/email.svg'
import CustomSvg from '../../customSvg/CustomSvg'

function RecoverAccount() {
  return (
    <div className='d-flex justify-content-center justify-content-xl-between m-4 m-xl-0'>
      {/* <div className=''> */}
        <div className='p-5 pt-5 d-flex flex-column  text-center'>
          <div>
            <img src={logoName}/>
            <div className='fw-700 fs-43 my-5'>Account Recovery</div>
            <div className='fs-19 fw-400'>Kindly follow the process to recover your account</div>
          </div>
          <div className=' text-start d-flex align-items-center bg-f3 fw-500 fs-16 p-3' style={{borderRadius:"25px", minWidth:"280px"}}>
            <img src={email} style={{backgroundColor:"#f3f3f3", marginRight:"8px"}}/>
            <input type="email" placeholder="Email" style={{width:"20vw", minWidth:"200px"}} className='bg-f3 txt-73 fs-17 fw-500'/>
          </div>
          <button className='mt-5 mb-3 fw-600 fs-23 py-3' style={{minWidth:"300px",borderRadius:"50px",backgroundColor:"#A04D07", color:"white"}}>Continue</button>
        </div>
      {/* </div> */}
      <img src={authImage} className='authImage d-none d-xl-flex'/>
    </div>
  )
}

export default RecoverAccount