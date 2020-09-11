import React from 'react'
import { SocialMedia } from '../components/SocialMedia'
export const Header = () => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <h1 style={{alignSelf: 'center'}}>Caleb Griffith</h1>
    <div style={{justifyContent: 'flex-end', flexDirection: 'row', display: 'flex'}}>
    <a style={{textDecoration: 'none', color: "black", alignSelf: 'center', marginRight: 20}} href='CalebGriffithResume.pdf' download='CalebGriffithResume.pdf'>
    <h4 className='resumeText'>Resume</h4>
    </a>
    <SocialMedia />
    </div>
  </div>
)