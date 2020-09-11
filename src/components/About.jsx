import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export const About = (props) => (
  <div style={{display: 'flex', flexDirection: props.isMobile ? 'column' : 'row', justifyContent: 'space-evenly', textAlign: props.isMobile ? 'center' : 'match-parent'}}>
    <div style={{marginTop: props.isMobile ? 15 : 100, flex: 1}}>
    <h2><span className='highlight'>Welcome!</span> I'm Caleb.</h2>
    <h3>I am a Full-Stack Engineer specializing in <span className='highlight'>React Native</span> and <span className='highlight'>Ruby on Rails.</span></h3> 
    <h3>
    My previous career as a professional musician and educator has instilled qualities in me which make me a valuable asset to your technology team. As a classically trained musician, I possess unparalleled attention to detail and an innate desire to perfect my work. I offer unique and highly creative perspectives, while maintaining bias towards action under extreme pressure.
    </h3>
    <h3 style={{marginBottom: 20}}>Please enjoy my rendition of Bach's Cello Suite #1 as you view a few of the features I have built via my portfolio app built in React Native!</h3>
    <ReactAudioPlayer
      src="Bach.mp4"
      autoPlay={true}
      controls
  />
    </div>
    {props.isMobile ? 
        <iframe style={{margin: 'auto', marginTop: 14}} title='sim' src="https://appetize.io/embed/b5k3m1hvyq1kw0thbt1p0cjk78?device=iphone8&scale=80&orientation=portrait&deviceColor=black&centered=true"
        width='350px' height="700px" frameborder="0" scrolling="no"></iframe>
  :     
    <iframe style={{margin: 'auto'}}title='sim' src="https://appetize.io/embed/b5k3m1hvyq1kw0thbt1p0cjk78?device=iphone8&scale=75&orientation=portrait&deviceColor=black&&centered=true"
      width='400px' height="900px" frameborder="0" scrolling="no"></iframe>
    }

  </div>
)


