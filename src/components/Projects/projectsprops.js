import React from "react"


function projectCard(props){
    const{id, name, link,imgSrc,github,visit} = props
    return(
        <div className="per-project">

        <div>
        <a href={link}>
        <h4 className="project-names">
        {name}
        </h4> 
        <img loading="lazy" src={imgSrc}/>
        </a>
        </div>
    
    <div className="project-buttons">
        <div>
        <a href={visit}>
            <button className="visit-site">Visit Site</button>
            </a>
        </div>

         <div>
            <a href={github}>
            <button className="github">Github</button>
            </a>
        </div>
    </div>


        <span className="line"></span>

        </div>
    )
}

export default projectCard