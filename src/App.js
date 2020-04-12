import React from 'react';
import image from  './imageInSrc.png' ;
import './App.css';
import video from  './Apprendre_les_saisons_en_samusant_francais.mp4' ;


function App() {
  return (
    <div className="App">
      <div className="style-block">
        <h1 className="title red">EMNA GAFSI</h1>
        <br/>
       <img src={image} alt="InSrc"/>
       <br/>

        <img src="/imageInPublic.jpg" width="700px"/><br/>
     </div>
     <video controls src={video} type="video/mp4"></video>
     </div>
     
     
  );
}

export default App;
