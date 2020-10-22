import React from 'react'
import './Assets/Rrss.css'
import { withRouter} from 'react-router-dom'

class Rrss extends React.Component {
  render() {
    return(
      <div className="rrss-container">
        <img src="https://www.flaticon.com/svg/static/icons/svg/733/733585.svg" className="" alt="" />
        <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" className="" alt="" />
        <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111398.svg" className="" alt="" />
      </div>
  );}
}

export default withRouter(Rrss);