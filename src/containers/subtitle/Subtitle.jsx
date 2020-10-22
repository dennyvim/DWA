import React from 'react'
import { withRouter } from 'react-router-dom';
import './assets/Subtitle.css'


const Subtitle = ({text, btn_final}) => {

	return (

      <h3 className={`subtitle_step_1 ${btn_final? "btn_final": ""}`}>
        {text}
      </h3>
	);
}

export default withRouter(Subtitle);