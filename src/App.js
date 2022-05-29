import { Component } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Recommended from './components/Recommended/Recommended';
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
      <Info details={this.state.selectedDetails}/>
      <Form details={this.state.selectedDetails} />
      <Recommended videos={this.state.videos}
      clickHandler={this.handleClick}
      />

      </div>

    );
  }
}

export default App;
