import React from 'react'
import './Comments.scss'

function Comments({ details }) {
  return (
    <section className='comments'>
    {details.comments?.map((data) => {

      const time = data.timestamp;
      const date = new Date(time);

      return(              
        <section className='comments__container' key={data.id}>
          <section className='comments__picture'>
          </section>
          <section className='comments__comment-info'>
            <section className='comments__name-date'>
              <p className='comments__name'>{data.name}</p>
              <p className='comments__date'>{date.toLocaleDateString()}</p>
            </section>
            <section className='comments__comment-container'>
              <p className='comments__comment'>{data.comment}</p>
            </section>
          </section>
        </section>
      )
    }
  )} 
  </section>
  )
}

export default Comments