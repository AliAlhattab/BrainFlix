import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/Logo/BrainFlix-logo.svg'
import './Header.scss'

function Header() {
    return (

      <form className='header'>
        <article className='header__logo-container'>
          <NavLink to='/'> <img className='header__logo' src={logo} alt='BrainFlix Logo'/></NavLink>
        </article>
        <section className='header__container'>
          <section className='header__input'>
            <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
            <section className='header__image'>
            </section>
          </section>
          <section className='header__submit'>
          <NavLink to="/upload"><button className='header__button'>UPLOAD</button></NavLink>
          </section>
          <section className='header__image header__image--tablet'>
            </section>
        </section>
      </form>
  
    );
  }
  
  export default Header