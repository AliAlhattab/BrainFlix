import React from 'react'
import './Comments.scss'

function Comments({ details }) {
  return (
    <section className='comments'>
    {details.comments?.map((data) => {

      const time = data.timestamp;
      const date = new Date(time);

      return(              
        <section className='comments__container' key={data.timestamp}>
          <article className='comments__picture'>
          </article>
          <div className='comments__comment-info'>
            <div className='comments__name-date'>
              <p className='comments__name'>{data.name}</p>
              <p className='comments__date'>{date.toLocaleDateString()}</p>
            </div>
            <div className='comments__comment-container'>
              <p className='comments__comment'>{data.comment}</p>
            </div>
          </div>
        </section>
      )
    }
  )} 
  </section>
  )
}

export default Comments