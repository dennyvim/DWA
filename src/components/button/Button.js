import React from 'react';
import './assets/Button.css'
import { withRouter } from 'react-router-dom';

class Button extends React.Component {
  render(){
    const {
            text,
    } = this.props;

    return(
        <div className="button-container">
            <p>{text}</p>
        </div>
    );
  }
}
export default withRouter(Button);