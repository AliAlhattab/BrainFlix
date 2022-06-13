import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Logo/BrainFlix-logo.svg'
import './Header.scss'

function Header() {
    return (

      <form className='header'>
        <article className='header__logo-container'>
          <Link className='header__logo'to='/'> <img className='header__logo' src={logo} alt='BrainFlix Logo'/></Link>
        </article>
        <div className='header__container'>
          <div className='header__input'>
            <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
            <article className='header__image'>
            </article>
          </div>
          <div className='header__submit'>
          <Link className='header__link' to="/upload"><button className='header__button'>UPLOAD</button></Link>
          </div>
          <article className='header__image header__image--tablet'>
            </article>
        </div>
      </form>
  
    );
  }
  
  export default Header