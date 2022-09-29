import React from "react";
// import React, { useState, useEffect } from "react";

/**
 * 
 * 
 * 
 *  Class Component
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
class SeasonDisplayClass extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      errorMsg: ''
    }
  }

  getSeason (lat, month)  {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter'
    } else {
      return lat > 0 ? 'winter' : 'summer'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    window.navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log(res)
        this.setState({
          latitude:res.coords.latitude,
          longitude: res.coords.longitude
        })

        // dont do this
        // this.state.latitude = res.coords.latitude
        // this.state.longitude = res.coords.longitude
      },
      (err) => {
        console.log(err)
        if (err.code === 1) {
          this.setState({
            errorMsg: '請允許存取您的位置資訊'
          })
        } else {
          this.setState({
            errorMsg: '發生未知錯誤'
          })
        }
      }
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render () {
    console.log('render');

    const seasonConfig = {
      summer: {
        iconName: 'sun'
      },
      winter: {
        iconName: 'snowflake'
      }
    }

    const season = this.getSeason(this.state.latitude, new Date().getMonth())
    console.log('season: ', season);
    const { iconName } = seasonConfig[season]
    console.log('iconName: ', iconName);


    if (this.state.errorMsg && !this.state.latitude ) {
      return (
        <div>
          {this.state.errorMsg && !this.state.latitude && (
            <div>{ this.state.errorMsg }</div>
          )}
        </div>
      )
    }


    if (!this.state.errorMsg && this.state.latitude) {
      return (
        <div>
          <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
          </div>

          <p>longitude: { this.state.longitude}</p>
          <p>latitude: { this.state.latitude}</p>
        </div>
      )
    }

    return (
        <div className="ui active dimmer">
          <div className="ui big text loader">
          正在存取您的位置資訊...
          </div>
        </div>
    )
  }
}

export default SeasonDisplayClass

/**
 * 
 * 
 * 
 * 
 * 
 * Function Component
 * 
 * 
 * 
 * 
 * 
 * 
 */

// const SeasonDisplay = () => {

//   const [longitude, setLongitude] = useState()
//   const [latitude, setLatitude] = useState()
//   const [errorMsg, setErrorMsg] = useState('')
  

//   const getLocation = () => {
//     window.navigator.geolocation.getCurrentPosition(
//       (res) => {
//         console.log(res)
//         setLatitude(res.coords.latitude)
//         setLongitude(res.coords.longitude)
//       },
//       (err) => {
//         console.log(err)
//         if (err.code === 1) {
//           setErrorMsg('請允許存取您的位置資訊')
//         } else {
//           setErrorMsg('發生未知錯誤')
//         }
//       }
//     )
//   }

//   useEffect(() => {
//     console.log('useEffect');
//     getLocation()
  
//     // return () => {
//     //   second
//     // }
//   })
  
  


//   return (
//     <div>
//       { errorMsg && (
//         <div>{ errorMsg }</div>
//       )}

//       {
//         latitude && longitude && (
//           <div>

//             <p>longitude: { longitude}</p>
//             <p>latitude: { latitude}</p>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default SeasonDisplay