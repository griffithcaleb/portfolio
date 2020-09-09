import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export const About = () => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <div style={{marginTop: 100, marginRight: 20}}>
    <h2><span className='highlight'>Welcome!</span> I'm Caleb.</h2>
    <h3>I am a Full-Stack Engineer specializing in <span className='highlight'>React Native</span> and <span className='highlight'>Ruby on Rails.</span></h3> 
    <h3>
    My previous career as a professional musician and educator has instilled qualities in me which make me a valuable asset to your technology team. As a classically trained musician, I possess unparalleled attention to detail and an innate desire to perfect my work. I offer unique and highly creative perspectives, while maintaining bias towards action under extreme pressure.
    </h3>
    <h3 style={{marginBottom: 20}}>Please enjoy my rendition of Bach's Cello Suite #1 as the app simulator takes you through some of the features I have built!</h3>
    {/* <ReactAudioPlayer
      src="Bach.mp4"
      autoPlay={true}
      controls
  /> */}
    </div>
    <iframe title='sim' src="https://appetize.io/embed/10rbk1vx3wtx532hk2kqwnvmb4?device=iphone8&scale=60&autoplay=true&orientation=portrait&deviceColor=black"
     width="378px" height="600px" frameborder="0" scrolling="no"></iframe>
  </div>
)


