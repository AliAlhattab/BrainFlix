import './Form.scss'

function Form(props) {


    return (

    <form className='form'>
        <h3 className='form__title'>Comments</h3>
        <section className='form__comment' >

          <section className='form__text'>
          <article className='form__image'>
          </article>
          <label className='form__label'>JOIN THE CONVERSATION</label>
          <textarea className='form__input' id="comment" name="comment" type="text" placeholder='Add a new comment' />
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
                <section className='form__name-date'>
                  <p className='form__name'>{data.name}</p>
                  <p className='form__date'>{fullDate}</p>
                </section>
                <section className='form__text-container'>
                  <p className='form__text'>{data.comment}</p>
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