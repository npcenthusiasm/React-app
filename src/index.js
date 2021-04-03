import React from 'react'
import ReactDOM from 'react-dom'

const getButtonText = () => {
  return 'CLICK BUTTON !'
}
const App = () => {
  const buttonText = 'Click button!'
  return (
  <div>
    <label className='blank' htmlFor='inputA'>input name: </label>
    <input type="text" id='inputA'></input>
    <button style={{backgroundColor: 'blue', color: 'white'}}>
      { getButtonText() }
    </button>
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