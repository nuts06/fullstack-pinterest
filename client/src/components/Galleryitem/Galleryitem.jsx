import React from 'react'
import './galleryitem.css'
import { Link } from 'react-router'


const Galleryitem = ({item}) => {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
      {/* showing all the images from the component */}
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      {/* button for each image */}
      <button className='saveButton'>Save</button>
        <div className="overlayIcons">
          <button>
            <img src="/general/share.svg" alt="" />
          </button> 
          <button>
            <img src="/general/more.svg" alt="" />
          </button> 
        </div>
    </div>
  )
}

export default Galleryitem