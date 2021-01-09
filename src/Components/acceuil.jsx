import React, { Component } from 'react';
import myImageInSrc from "./imageInSrc.jpg";


const Acceuil = () => {
    return (<>
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

            <h1 className="title red">Gharbi Leith</h1>

            <br />

            <img src={myImageInSrc} style={{ width:"30%"}}/>

            <br />
            <img src="/imageInPublic.png" />

        </div>

        <video width="320" height="240" controls  autoPlay controls>
            <source src="./myVideo.mp4" type="video/mp4" />
            <source src="./myVideo.ogv" type="video/mp4" />
        </video>

    </>);
}

export default Acceuil;