import './Form.scss'

function Form() {
    return (

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
    
    );
  }
  
  export default Form