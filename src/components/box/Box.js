import React from 'react';
import './assets/Box.css'
import { withRouter } from 'react-router-dom';
class Box extends React.Component {

  render(){
    const {
            title,
            imgUrl,
            imgAlt
    } = this.props;

    return(
        <div className="box-container">
            <img src={imgUrl} alt={imgAlt}></img>
            <p>{title}</p>
        </div>
    );
}


}
export default withRouter(Box);