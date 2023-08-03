import React from  "react"
import "./form.css"

function Form (){
    return(
        <>
        <form>
            <input placeholder="Your Full Name" name="name"/><br/>
            <input placeholder="Your Email" name="email"/><br/>
            <textarea placeholder="Your Message" name="message"/><br/>
            <button>Send Message</button>
        </form>
        </>
    )
}

export default Form 