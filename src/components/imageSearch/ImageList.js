import React from 'react'
import'./ImageList.css'
import ImageCard from './ImageCard'


const ImageList = (props) => {
  return (
    <div className='image-list'>
      {
        props.images.map(image => (
          <ImageCard image={image} key={image.id}/>
        ))
      }
    </div>
  )
}

export default ImageList