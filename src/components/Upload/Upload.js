import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'
import axios from 'axios'
import { Component } from 'react'


const API_URL = "http://localhost:9000";


class Upload extends Component {

  state = {
    title: '',
    description: '',
    modal: false
  }

  

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 addVideo = (e) => {
  e.preventDefault()
  axios
    .post(`${API_URL}/videos`, {
      title: this.state.title,
      description: this.state.description,
    })
    .then((response) => {
      console.log(response);
      alert('Your video is published')
    })
    .catch((error) => {
      console.log(error);
    });

    this.setState({
      modal: true
    })

};
  render() {
    if(this.state.modal){
      return (
        <div>
          <h1>video published</h1>
          <Link to='/'>home</Link>
          <Link to='/uploads'>go back</Link>
        </div>
      )
    }
    return ( 
      <form className='upload'>
        <h1 className='upload__header'>Upload Video</h1>
        <p className='upload__video'>VIDEO THUMBNAIL</p>
        <div className='upload__info'>
          <img className='upload__image' src={thumbnail} alt='Thumbnail'/>
          <div className='upload__input'>
            <div className='upload__title-input'>
              <label className='upload__label'>TITLE YOUR VIDEO</label>
              <input className='upload__title' id='title' name='title' type='text' onChange={this.changeHandler} placeholder='Add a title to your video'/>
            </div>
            <div className='upload__description-input'>
              <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
              <textarea className='upload__description' id="description" name="description" type="text" onChange={this.changeHandler} placeholder='Add a description to your video'/>
              </div>
            </div>
        </div>
        <div className='upload__submit'>
          <button className='upload__publish' onClick={this.addVideo}>PUBLISH</button>
          <Link to='/'><button className='upload__cancel'>CANCEL</button></Link>
        </div>
      </form>
    )
  }
}
 
export default Upload