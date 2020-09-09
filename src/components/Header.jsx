import React from 'react'
export const Header = () => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <h1>Caleb Griffith</h1>
    <a style={{textDecoration: 'none', color: "black"}} href='CalebGriffithResume.pdf' download='CalebGriffithResume.pdf'>
    <h4 className='resumeText'>Resume</h4>
    </a>
  </div>
)