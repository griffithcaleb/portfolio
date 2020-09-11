import React from 'react'
import { SocialMedia } from '../components/SocialMedia'
import { green } from '../constants'
export const Header = (props) => (
  <div style={{display: 'flex', flexDirection: props.isMobile ? 'column' : 'row', justifyContent:  props.isMobile ? 'center': 'space-between'}}>
    <h1 style={{alignSelf: 'center'}}>Caleb Griffith</h1>
    <div style={{justifyContent: props.isMobile ? 'center' : 'flex-end', flexDirection: props.isMobile ? 'column' : 'row', display: 'flex'}}>
    {
      !!props.isMobile && <SocialMedia isMobile={props.isMobile} />
    }
    <a style={{
    textDecoration: 'none',
    color: props.isMobile ? 'white': 'black',
    alignSelf: 'center',
    marginRight: props.isMobile ? 0 : 20, 
    backgroundColor: props.isMobile ? green : '',
    padding: 10,
    borderRadius: 25

  }} href='CalebGriffithResume.pdf' download='CalebGriffithResumemobileRes.pdf'>
    <h4 className={!props.isMobile ? 'resumeText': 'mobileRes'}>Resume</h4>
    </a>
    {
      !props.isMobile && <SocialMedia isMobile={props.isMobile} />
    }
    </div>
  </div>
)