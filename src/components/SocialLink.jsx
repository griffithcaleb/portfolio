import React from 'react'

export const SocialLink = (props) => {
  return (
    <div style={{margin: 10}}>
      <a href={props.link.url}>
      <img style={{height: 25, width: props.link.name === 'linkedIn' ? 30 : 25, alignSelf: 'center'}} src={props.link.image} alt={props.name}/>
      </a>
    </div>
  )
}