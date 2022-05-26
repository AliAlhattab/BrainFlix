import './App.scss';
import logo from './assets/images/logo/BrainFlix-logo.svg'
import videos from './data/videos.json'
import videoDetails from './data/video-details.json'

function App() {
  return (
    <>
    {/* Start of header  */}
    <header className='header'>
      <img className='header__logo' src={logo} />
      <section className='header__input'>
        <input className='header__search' id="search" name="search" type='text' placeholder='Search'/>
        <section className='header__image'>
        </section>
      </section>
      <button className='header__button'>UPLOAD</button>
    </header>

    {/* Start of video */}
    <video className='video'>
    </video>
    
    {/* Start of info */}
    <section className='info'>

    </section>

    {/* Start of form  */}
    <form className='form'>
      <h3 className='form__title'>Comments</h3>
      <section className='form__info'>
        <article className='form__image'>
        </article>
        <label className='form__label'>JOIN THE CONVERSATION</label>
        <textarea className='form__input' id="comment" name="comment" type="text" placeholder='Add a new comment' />
      </section>
      <section className='form__submit'>
        <button className='form__button'>COMMENT</button>
      </section>
      <section className='form__comments'>
        </section>
    </form>
    
    {/* Start of recommended */}
    <section className='recommended'>
      <h2>Next Video</h2>
    </section>
    </>

  );
}

export default App;
