import React from "react";
import  backvid from "../../components/images/backgroundimage.mp4"
import "./background.css"

function Background(){
    return(
        <div className="backvid">
    <video src={backvid} 
    
    loop 
    playInBackground={true}
    playWhenInactive= {true}
    ignoreSilentSwitch="ignore"
     autoPlay={true} 
     muted 
     playsInline={true}
     type="video/mp4" />
        </div>
    )
}

export default Background