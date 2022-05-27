import './Recommended.scss'

function Recommended(props) {
    return (

    <section className='recommended'>
      <h2>Next Video</h2>
      {props.videos.map(data => {
        return(
          <section>
          <img width="400px" src={data.image} />
          <p>{data.title}</p>
          <p>{data.channel}</p>
          </section>
        )
      }
    )}
    </section>
    
    );
  }
  
  export default Recommended