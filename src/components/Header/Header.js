import logo from '../../assets/Images/Logo/BrainFlix-logo.svg'
import './Header.scss'

function Header() {
    return (

      <form className='header'>
        <article className='header__logo-container'>
          <img className='header__logo' src={logo} alt='BrainFlix Logo'/>
        </article>
        <section className='header__container'>
          <section className='header__input'>
            <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
            <section className='header__image'>
            </section>
          </section>
          <section className='header__submit'>
          <button className='header__button'>UPLOAD</button>
          </section>
          <section className='header__image header__image--tablet'>
            </section>
        </section>
      </form>
  
    );
  }
  
  export default Header