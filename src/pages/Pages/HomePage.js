import { Component } from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form';
import Info from '../../components/Info/Info';
import Recommended from '../../components/Recommended/Recommended';
import Video from '../../components/Video/Video'
import './HomePage.scss'

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY_STRING = "?api_key=123";

class HomePage extends Component {

    state = {
       videos: [],
       selectedVideo: []
      };
      
      componentDidMount() {

          axios
            .get(`${API_URL}/videos${API_KEY_STRING}`)
                .then((response) => {

                    this.setState({
                        videos: response.data,
                    });

                    const videoId = this.props.match.params.videoId || response.data[0].id;

                    this.getSelectedVideo(videoId);
                })

      }

      componentDidUpdate(previousProps){

        const previousVideoId = previousProps.match.params.videoId;
        const currentVideoId = this.props.match.params.videoId;

        if(previousVideoId !== currentVideoId) {
          this.getSelectedVideo(currentVideoId);
        }

      }

      getSelectedVideo = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}${API_KEY_STRING}`)
                .then((response) => {
                    this.setState({
                        selectedVideo: response.data,
                    });
                }) 
                .catch((error) => {
                    console.error("cant GET selectedVideo");
                })
      };

    
    render(){
        return (
            <div className='home'>
                <Video details={this.state.selectedVideo} />
              <section className='home__container'>
                <section className='home__info-form'>
                  <Info details={this.state.selectedVideo} />
                  <Form details={this.state.selectedVideo} />
                </section>
                <Recommended videos={this.state.videos} />
              </section>
            </div>
        )   
    }
}

export default HomePage