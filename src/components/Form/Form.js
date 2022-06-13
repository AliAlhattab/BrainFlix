import './Form.scss'

function Form({ details }) {


    return (
      <form className='form'>
          <p className='form__title'>3 Comments</p>
          <div className='form__add-comment'>
            <div className='form__text-container'>
              <article className='form__image'>
              </article>
              <div className='form__text'>
                <label className='form__label'>JOIN THE CONVERSATION</label>
                <textarea className='form__input' id="comment" name="comment" type="text" placeholder='Add a new comment' />
              </div>
            </div>
            
            <section className='form__submit'>
            <button className='form__button'>COMMENT</button>
            </section>
          </div>
          </form>

    );
  }
  
  export default Form