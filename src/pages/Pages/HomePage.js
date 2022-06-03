import { Component } from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form';
import Info from '../../components/Info/Info';
import Recommended from '../../components/Recommended/Recommended';
import Video from '../../components/Video/Video'
import videos from '../../data/videos.json';
import details from '../../data/video-details.json';

class HomePage extends Component {

    state = {
        details,
        selectedDetails:details[0],
    
        videos,
      };
    
      handleClick = (id) => {
        let chosenVideo = this.state.details.find((video) => video.id === id)
    
        this.setState({
          selectedDetails: chosenVideo,
        });
      }


    render(){
        return (
            <div>
                <Video details={this.state.selectedDetails} />
              <section className='app__container'>
                <section className='app__info-form'>
                  <Info details={this.state.selectedDetails} />
                  <Form details={this.state.selectedDetails} />
                </section>
                <Recommended videos={this.state.videos.filter((video) => video.id !== this.state.selectedDetails.id)}
                clickHandler={this.handleClick}
                />
              </section>
            </div>
        )   
    }
}

export default HomePage