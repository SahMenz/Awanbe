import logoInHero from '../../assets/images/logoInHero.svg'
import './hero.css'
function Hero() {
  return (
    <div className='bg-f5'>
        <div className="container-adjustment text-align-center">
            <img src={logoInHero}/>
        </div>
    </div>
  )
}

export default Hero