import React, {useState, useEffect} from 'react';
import './App.css';
import { Header } from './components/Header'
import { About } from './components/About'



function App() {
  const [size, setSize] = useState(window.innerWidth || '');
  const isMobile = size < 720
    useEffect(() => {
      if (window) {
        window.addEventListener('resize', (e) => setSize(e.target.innerWidth));
      }
    }, []);
    return (
      <div style={{padding: isMobile ? 10 : 25}}>
      <Header isMobile={isMobile}/>
      <About isMobile={isMobile}/>
      </div>
    );
  }


export default App;

