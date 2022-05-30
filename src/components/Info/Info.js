import './Info.scss'
import views from '../../assets/images/icons/views.svg'
import likes from '../../assets/images/icons/likes.svg'

function Info(props) {
    
    const time = props.details.timestamp;
    const date = new Date(time);
    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getFullYear();
    let fullDate = (month + "/" + day + "/" + year)
    
    return (

        <section className='info'>
            <video className='info__video' controls poster={props.details.image} alt={props.details.title} />
            <section className='info__container'>
                <h1 className='info__title'>{props.details.title}</h1>
                <section className='info__details'>
                    <section className='info__post'>
                        <p className='info__channel'>By: {props.details.channel}</p>
                        <p className='info__date'>{fullDate}</p>
                    </section>
                    <section className='info__views-likes'>
                        <p className='info__views'> <img src={views}/> {props.details.views}</p>
                        <p className='info__likes'> <img src={likes}/> {props.details.likes}</p>
                    </section>
                </section>
                <p className='info__description'>{props.details.description}</p>
           </section>
        </section>
    
    );
  }
  
  export default Info