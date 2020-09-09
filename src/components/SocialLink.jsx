import React from 'react'

export const SocialLink = (props) => {
  return (
    <div style={{padding: 15}}>
      <a href={props.link.url}>
      <img style={{height: 50, width: props.link.name === 'linkedIn' ? 60 : 50}} src={props.link.image} alt={props.name}/>
      </a>
    </div>
  )
}