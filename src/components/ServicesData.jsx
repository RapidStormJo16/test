import React from 'react'
import './services.css'
export default function ServicesData(props) {
  return (
    <div className="s-card">
        <div className="s-image">
            <img src={props.image} alt="sImg" />
        </div> 
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}
