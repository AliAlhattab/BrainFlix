import React from 'react'
import { Link } from 'react-router-dom'
import './Upload.scss'
import thumbnail from '../../assets/Images/Mohan-muruge.jpg'

function Page() {

  return ( 
    <form className='upload'>
      <h1 className='upload__header'>Upload Video</h1>
      <p className='upload__video'>VIDEO THUMBNAIL</p>
      <img className='upload__image' width='400px' src={thumbnail} alt='Thumbnail'/>
      <label className='upload__label'>TITLE YOUR VIDEO</label>
      <input className='upload__title' id='title' name='title' type='text' placeholder='Add a title to your video'/>
      <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
      <textarea className='upload__description' id="description" name="description" type="text" placeholder='Add a description to your video' />
      <Link className='upload__link' to='/'><button className='upload__publish'>PUBLISH</button></Link>
      <Link className='upload__link' to='/'><button className='upload__cancel'>CANCEL</button></Link>
    </form>
  )
}

export default Page