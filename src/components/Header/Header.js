import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import './Header.scss'

function Header() {
    return (

      <form className='header'>
        <img className='header__logo' src={logo} alt='BrainFlix Logo'/>
        <section className='header__input'>
          <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
          <section className='header__image'>
          </section>
        </section>
        <section className='header__submit'>
        <button className='header__button'>UPLOAD</button>
        </section>
      </form>
  
    );
  }
  
  export default Header