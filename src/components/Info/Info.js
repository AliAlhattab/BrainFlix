import './Info.scss'
import views from '../../assets/Images/Icons/views.svg'
import likes from '../../assets/Images/Icons/likes.svg'

function Info({ details }) {
    
    const time = details.timestamp;
    const date = new Date(time);
    
    return (

        <section className='info'>
            <div className='info__container'>
                <h1 className='info__title'>{details.title}</h1>
                <div className='info__details'>
                    <div className='info__post'>
                        <p className='info__channel'>By: {details.channel}</p>
                        <p className='info__date'>{date.toLocaleDateString()}</p>
                    </div>
                    <div className='info__views-likes'>
                        <p className='info__views'> <img src={views}/> {details.views}</p>
                        <p className='info__likes'> <img src={likes}/> {details.likes}</p>
                    </div>
                </div>
                <p className='info__description'>{details.description}</p>
           </div>
        </section>
    
    );
  }
  
  export default Info