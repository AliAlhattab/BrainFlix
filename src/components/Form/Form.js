import './Form.scss'

function Form(props) {


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
        <section className='form__comments'>
          
           {props.details.comments.map(data => {

            const time = data.timestamp;
            const date = new Date(time);
            const month = date.getMonth()+1;
            const day = date.getDate();
            const year = date.getFullYear();
            let fullDate = (month + "/" + day + "/" + year)

            return(              
              <section className='form__container'>
                <section className='form__picture'>
                </section>
                <section className='form__comment-info'>
                  <section className='form__name-date'>
                    <p className='form__name'>{data.name}</p>
                    <p className='form__date'>{fullDate}</p>
                  </section>
                  <section className='form__comment-container'>
                    <p className='form__comment'>{data.comment}</p>
                  </section>
                </section>
              </section>
            )
          }
        )} 
        </section>
    </form>

    );
  }
  
  export default Form