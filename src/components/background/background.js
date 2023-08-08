import React from "react";
import  backvid from "../../components/images/backgroundimage.mp4"
import "./background.css"

function Background(){
    return(
        <div className="backvid">
    <video src={backvid} loop autoPlay={true} muted type="video/mp4" />
        </div>
    )
}

export default Background