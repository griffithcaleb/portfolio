import React from 'react'
import { socialLinks } from '../constants'
import { SocialLink } from './SocialLink'

export const SocialMedia = (props) => {
  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'row',justifyContent: 'center', alignSelf: 'center'}}>
      {socialLinks.map((link, i) => 
     <SocialLink key={i} link={link} isMobile={props.isMobile} />
    )}
    </div>

  )
}