import './Form.scss'

function Form({ details }) {


    return (
      <form className='form'>
          <p className='form__title'>3 Comments</p>
          <section className='form__add-comment'>
            <section className='form__text-container'>
              <article className='form__image'>
              </article>
              <section className='form__text'>
                <label className='form__label'>JOIN THE CONVERSATION</label>
                <textarea className='form__input' id="comment" name="comment" type="text" placeholder='Add a new comment' />
              </section>
            </section>
            
            <section className='form__submit'>
            <button className='form__button'>COMMENT</button>
            </section>
          </section>
          </form>

    );
  }
  
  export default Form