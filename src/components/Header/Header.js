import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import './Header.scss'

function Header() {
    return (

      <header className='header'>
        <img className='header__logo' src={logo} alt='BrainFlix Logo'/>
        <section className='header__input'>
          <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
          <section className='header__image'>
          </section>
        </section>
        <button className='header__button'>UPLOAD</button>
      </header>
  
    );
  }
  
  export default Header