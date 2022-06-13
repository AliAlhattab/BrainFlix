import { Component } from 'react'
import axios from 'axios'
import Form from '../../components/Form/Form';
import Info from '../../components/Info/Info';
import Recommended from '../../components/Recommended/Recommended';
import Video from '../../components/Video/Video'
import './HomePage.scss'
import Comments from '../../components/Comments/Comments';

const API_URL = "http://localhost:9000";
const API_KEY_STRING = "?api_key=123";

class HomePage extends Component {

    state = {
       videos: [],
       selectedVideo: {}
      };
      
      componentDidMount() {
          axios
            .get(`${API_URL}/videos`)
                .then((response) => {

                    this.setState({
                        videos: response.data,
                    });

                    const videoId = this.props.match.params.videoId || response.data[0].id;

                    this.getSelectedVideo(videoId);
                })
                .catch(error => {
                  console.log(error)
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
            .get(`${API_URL}/videos/${videoId}`)
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
            <section className='home'>
                <Video details={this.state.selectedVideo} />
              <div className='home__container'>
                <div className='home__info-form'>
                  <Info details={this.state.selectedVideo} />
                  <Form details={this.state.selectedVideo} />
                  <Comments details={this.state.selectedVideo}/>
                </div>
                <Recommended videos={this.state.videos.filter((video) => video.id !== this.state.selectedVideo.id)} />
              </div>
            </section>
        )   
    }
}

export default HomePage