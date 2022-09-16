import React from 'react'

import Post from "./post/Post"

import "./posts.scss"

const Posts = () => {
  return (
    <div className='posts'>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts