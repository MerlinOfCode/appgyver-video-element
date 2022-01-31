import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactPlayer from 'react-player';
import './style.css';


const params = new URLSearchParams(window.location.search);
/*const paramValue = "https://res.cloudinary.com/wikacy-com/video/upload/v1642352266/trailers/zeitgeist-trailer_njhtpf.mp4"*/

const paramValue = params.get("url");


 

const App: React.FC = () => (
  <div>
    <ReactPlayer url={paramValue}
    
    playing 
    isFullscreen={true}
    controls
    preload
    disableRemotePlayback={true}
    allowFullscreen ={false}
    playbackrate= {false}
    config={{ file: { attributes: { controlsList: 'nodownload noplaybackrate nofullscreen noremoteplayback',disablePictureInPicture: true, isFullscreen: true } } }}
    width='100%'
    height='100%'
     />
  </div>
);

render(<App />, document.getElementById('root'));
