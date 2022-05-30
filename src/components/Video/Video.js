import './Video.scss'

function Video(props) {
    
    return (
            <section className='video'>
                <video className='video__image' controls poster={props.details.image} alt={props.details.title} />
            </section>
    
    );
  }
  
  export default Video;