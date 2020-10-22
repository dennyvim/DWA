import React from 'react'
import './assets/UserCard.css'



export default function UserCard (props) {
    return(
      <div className="userCard-container-external">
        <p>{props.description} <br/> {props.user}</p>
        <img src={props.userPicture} className="userCard-img"/>
      </div>
  );
}

