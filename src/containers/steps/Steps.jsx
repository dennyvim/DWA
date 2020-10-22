import React from 'react'
import { withRouter } from 'react-router-dom';
import './assets/Steps.css'


const Steps = ({src, text}) => {

	return (

		<div className="steps">
        <img src={src} alt=""/>
        <p>{text}</p>
		</div>

	);
}

export default withRouter(Steps);