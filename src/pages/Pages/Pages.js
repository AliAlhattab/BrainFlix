import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pages.scss'

function Page() {

  return ( 
    <form className='upload'>
      <h1 className='upload__header'>Upload Video</h1>
      <p className='upload__video'>VIDEO THUMBNAIL</p>
      <img className='upload__image' src='' alt=''/>
      <label className='upload__label'>TITLE YOUR VIDEO</label>
      <input className='upload__title' id='title' name='title' type='text' placeholder='Add a title to your video'/>
      <label className='upload__label'>ADD A VIDEO DESCRIPTION</label>
      <textarea className='upload__description' id="description" name="description" type="text" placeholder='Add a description to your video' />
      <NavLink to='/'><button className='upload__publish'>PUBLISH</button></NavLink>
      <NavLink to='/'><button className='upload__cancel'>CANCEL</button></NavLink>
    </form>
  )
}

export default Page