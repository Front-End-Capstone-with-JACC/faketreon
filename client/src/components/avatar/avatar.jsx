import React from 'react'
import dummyPhoto from '../avatar/dummyPhoto.png'

const Avatar = () => {
  return (
    <div>
      <img className='photo' src={dummyPhoto} />
    </div>
  )
}

export default Avatar