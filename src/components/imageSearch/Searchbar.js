import React from 'react'

class Searchbar extends React.Component {
  state = {
    term: ''
  }

  onSearchSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }



  render () {
    return (
      <div className='ui segment' style={{ marginBottom: '10px',  marginTop: '10px' }}>
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className='field'>
            <label>搜尋圖片</label>
            <input type="text" placeholder="搜尋..." onInput={(e) => this.setState({ term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbar