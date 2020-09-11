import React from 'react'

export const SocialLink = (props) => {
  return (
    <div style={{margin: 10}}>
      <a href={props.link.url}>
      <img style={{height: props.isMobile ? 35 : 25, width: props.isMobile ? props.link.name === 'linkedIn' ? 40 : 35 : 25 , alignSelf: 'center'}} src={props.link.image} alt={props.name}/>
      </a>
    </div>
  )
}