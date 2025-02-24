import logoInHero from '../../assets/images/logoInHero.svg'
import './hero.css'
function Hero() {
  return (
    <div className='bg-f5'>
        <div className="container-adjustment text-align-center">
            <img src={logoInHero}/>
            <div className='fs-63 fw-600'>
            New Bespoke African-Themed Solution For Party Planning
            </div>
        </div>
    </div>
  )
}

export default Hero