import footerLogo from '../../assets/images/footerLogo.png'
import linkedIn from '../../assets/images/linkedIn.svg'
import faceBook from '../../assets/images/faceBook.svg'
import instagram from '../../assets/images/instagram.svg'
import x from '../../assets/images/x.svg'

function Footer() {
  return (
    <div>
      <div>
        <div><img src={footerLogo}/></div>
        <div>Awambe simplifies African-themed event planning with custom invitations, guest management, and a curated vendor marketplace.</div>
        <div>
          <img src={x} />
          <img src={faceBook} />
          <img src={instagram} />
          <img src={linkedIn} />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer