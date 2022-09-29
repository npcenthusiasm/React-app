
import React from 'react'
import unsplashApiSearch from './api/unsplash'
import ImageList from './components/imageSearch/ImageList'
import Searchbar from './components/imageSearch/Searchbar'


class SearchPage extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const res = await unsplashApiSearch(term)
    this.setState({ images: res.data.results })
  }

  render () {
    return (
      <div className='ui container'>
        <Searchbar onSearchSubmit={this.onSearchSubmit}></Searchbar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}

export default SearchPage