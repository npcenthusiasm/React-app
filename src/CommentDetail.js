import React from 'react'
// import ReactDOM from 'react-dom'

const CommentDetail = (props) => {
  console.log('props: ', props);
  const author = props.author
  const timeAgo = props.timeAgo
  const content = props.content
  const avatar = props.avatar
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={ avatar } alt='avatar'/>
      </a>
      <div className='content'>
        <a href='/' className='author'>
          { author }
        </a>
        <div className='metadata'>
          <span className='date'>{ timeAgo }</span>
        </div>
        <div className='text'>{ content }</div>
      </div>
    </div>
  )
}

export default CommentDetail