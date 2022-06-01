import { Component } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Recommended from './components/Recommended/Recommended';
import Video from './components/Video/Video'
import videos from './data/videos.json';
import details from './data/video-details.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './pages/Pages/Pages';

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
      <Router>
        <section className='app'> 
          <Header/>
          <Switch>
            <Route exact path='/'>
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
            </Route>
            <Route path='/upload'>
              <Pages/>
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
