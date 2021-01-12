import React, { Component } from 'react';
import myImageInSrc from "./imageInSrc.jpg";
import VideoUrl from "./myVideo.mp4";


const Acceuil = () => {
    return (<div style={{textAlign:"center",marginTop:"20px",justifyContent:"center"}}>
        <div style={{border:"solid 1px black",maxWidth:"100vw",textAlign:"center"}}>

            <h1 className="title red">Gharbi Leith</h1>

            <br />

            <img src={myImageInSrc} style={{ width:"30%"}}/>

            <br />
            <img src="/imageInPublic.png" />

        </div>

        <video  src={VideoUrl} width="600" height="300" controls="controls" autoplay="true" />

    </div>);
}

export default Acceuil;