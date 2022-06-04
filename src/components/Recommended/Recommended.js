import './Recommended.scss'
import { Link } from 'react-router-dom';

function Recommended({ videos }) {
    return (
    <section className='recommended'>
      <h2 className='recommended__title'>NEXT VIDEOS</h2>
      {videos.map((data) => {
        return (
          <Link className='recommended__link' to={`/videos/${data.id}`} key={data.id}>
            <section className='recommended__info'>
              <img className='recommended__image' src={data.image} />
              <section className='recommended__name-channel'>
                <p className='recommended__name'>{data.title}</p>
                <p className='recommended__channel'>{data.channel}</p>
              </section>
            </section>
          </Link>
        );
      }
    )}
    </section>
    
    );
  }
  
  export default Recommended