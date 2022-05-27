import './Info.scss'

function Info(props) {
    return (

        <section className='info'>
            <img className='info__image' src={props.details.image} alt={props.details.title} />
            <h1>{props.details.title}</h1>
            <h3>By: {props.details.channel}</h3>
            <h3>{props.details.timestamp}</h3>
            <h3>{props.details.views}</h3>
            <h3>{props.details.likes}</h3>
            <p>{props.details.description}</p>
        </section>
    
    );
  }
  
  export default Info