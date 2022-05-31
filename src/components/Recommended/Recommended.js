import './Recommended.scss'

function Recommended(props) {
    return (
    <section className='recommended'>
      <h2 className='recommended__title'>NEXT VIDEOS</h2>
      {props.videos.map((data) => {
        return (
          <section className='recommended__info'
            key={data.id}
            onClick={() => {
              props.clickHandler(data.id);
            }}
          >
            <img className='recommended__image' src={data.image} />
            <section className='recommended__name-channel'>
              <p className='recommended__name'>{data.title}</p>
              <p className='recommended__channel'>{data.channel}</p>
            </section>
          </section>
        );
      }
    )}
    </section>
    
    );
  }
  
  export default Recommended