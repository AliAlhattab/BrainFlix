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
            <video className='info__video' controls poster={props.details.image} alt={props.details.title} />
            <h1 className='info__title'>{props.details.title}</h1>
            <section className='info__details'>
                <section className='info__post'>
                    <h3>By: {props.details.channel}</h3>
                    <h3>{fullDate}</h3>
                </section>
                <section className='info__detail'>
                    <h3>{props.details.views}</h3>
                    <h3>{props.details.likes}</h3>
                </section>
            </section>
            
            <p>{props.details.description}</p>
        </section>
    
    );
  }
  
  export default Info