import React, { useEffect } from "react";
import "./preloader.css"
import { preLoaderAnim } from "../../animation";
import gif from "../images/preloader.gif"

function  Preloader() {

    useEffect(()=>{
        preLoaderAnim()
    },[])
    return(
        <div className="preloader">
<div className="preloader-container">
 <span><img src={gif}/></span>
</div>
        </div>
    )
}

export default Preloader

