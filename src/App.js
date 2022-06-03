import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UploadPage from './pages/Pages/UploadPage';
import HomePage from './pages/Pages/HomePage';

function App() {
    return (
      <BrowserRouter>
        <div> 
          <Header/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/videos/:videoId'  component={HomePage}/>
            <Route path='/upload' component={UploadPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

export default App;
