import { Component } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Recommended from './components/Recommended/Recommended';
import Video from './components/Video/Video'
import videos from './data/videos.json';
import details from './data/video-details.json';

class App extends Component {
  
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

  
  render() {
    return (
      <div> 
      
      <Header/>
      <Video details={this.state.selectedDetails} />
      <div className='container'>
        <div className='container-two'>
      <Info details={this.state.selectedDetails} />
      <Form details={this.state.selectedDetails} />
        </div>
      <Recommended videos={this.state.videos.filter((video) => video.id !== this.state.selectedDetails.id)}
      clickHandler={this.handleClick}
      />

      </div>
      </div>

    );
  }
}

export default App;
