import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard >
        <CommentDetail author='Sam' timeAgo='Today ad 6:00 PM' content='Nice blog post!' avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <CommentDetail author='Sam' timeAgo='Today ad 6:00 PM' content='Nice blog post!' avatar={faker.image.avatar()}/>
      <CommentDetail author='Sam' timeAgo='Today ad 6:00 PM' content='Nice blog post!' avatar={faker.image.avatar()}/>
      <CommentDetail author='Sam' timeAgo='Today ad 6:00 PM' content='Nice blog post!' avatar={faker.image.avatar()}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
if(module.hot) {
  module.hot.accept()
}
// console.log(123)