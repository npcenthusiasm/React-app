import React from 'react'
import ReactDOM from 'react-dom'
import SearchPage from './SearchPage'

const App = () => {
  return (
    <SearchPage />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
if(module.hot) {
  module.hot.accept()
}