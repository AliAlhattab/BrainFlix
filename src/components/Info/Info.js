import './Info.scss'

function Info(props) {
    
    const time = props.details.timestamp;
    const date = new Date(time);
    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getFullYear();
    let fullDate = (month + "/" + day + "/" + year)
    
    return (

        <section className='info'>
            <video className='info__video' controls width='400px' poster={props.details.image} alt={props.details.title} />
            <h1>{props.details.title}</h1>
            <h3>By: {props.details.channel}</h3>
            <h3>{fullDate}</h3>
            <h3>{props.details.views}</h3>
            <h3>{props.details.likes}</h3>
            <p>{props.details.description}</p>
        </section>
    
    );
  }
  
  export default Info