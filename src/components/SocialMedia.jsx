import React from 'react'
import { socialLinks } from '../constants'
import { SocialLink } from './SocialLink'

export const SocialMedia = () => {
  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'row',justifyContent: 'center', alignSelf: 'center'}}>
      {socialLinks.map((link, i) => 
     <SocialLink key={i} link={link} />
    )}
    </div>

  )
}