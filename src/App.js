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
  };

  
  render() {
    return (
      <div> 
      
      <Header/>
      <Info details={this.state.selectedDetails} />
      <Form details={this.state.selectedDetails} />
      <Recommended />

      </div>

    );
  }
}

export default App;
