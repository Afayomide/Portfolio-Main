import  { BsWhatsapp }  from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"

const whatsapp = <BsWhatsapp/>
const envelope=<BsEnvelope/>
const twitter=<BsTwitter/>

const contactData= [
    {
        id: 1,
        name: "email",
        info: "daraseyi086@gmail.com",
        icon: envelope,
        link:"mailto:daraseyi086@gmail.com"
    },
    {
        id: 2,
        name: "whatsapp",
        info: "08051539903",
        icon: whatsapp,
        link: "https://wa.link/82az7a"

    },
    {
        id: 3,
        name: "twitter",
        info: "@Antii_loner",
        icon: twitter,
        link: "https://twitter.com/Antii_loner?t=bND40YD0skpSHozLk9wqSg&s=09"
    },
]

export default contactData