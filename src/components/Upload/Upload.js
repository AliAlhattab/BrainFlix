import React from 'react'
import { Link } from 'react-router-dom'
import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function showAlert() {
  alert('Your video is published')
}

function Page() {

  return ( 
    <form className='upload'>
      <h1 className='upload__header'>Upload Video</h1>
      <p className='upload__video'>VIDEO THUMBNAIL</p>
      <div className='upload__info'>
        <img className='upload__image' src={thumbnail} alt='Thumbnail'/>
        <div className='upload__input'>
          <div className='upload__title-input'>
            <label className='upload__label'>TITLE YOUR VIDEO</label>
            <input className='upload__title' id='title' name='title' type='text' placeholder='Add a title to your video' />
          </div>
          <div className='upload__description-input'>
            <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
            <textarea className='upload__description' id="description" name="description" type="text" placeholder='Add a description to your video' />
            </div>
          </div>
      </div>
      <div className='upload__submit'>
        <Link className='upload__link' to='/'><button className='upload__publish' onClick={showAlert} >PUBLISH</button></Link>
        <Link to='/'><button className='upload__cancel'>CANCEL</button></Link>
      </div>
    </form>
  )
}

export default Page