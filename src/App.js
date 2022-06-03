import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UploadPage from './pages/Pages/UploadPage';
import HomePage from './pages/Pages/HomePage';

function App() {
    return (
      <BrowserRouter>
        <section className='app'> 
          <Header/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/upload' component={UploadPage}/>
          </Switch>
        </section>
      </BrowserRouter>
    );
  }

export default App;
