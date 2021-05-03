import React from 'react'
import { serviceInfo } from '../../utilities/projectInfo'
import './Service.css'
const Service = () => {
    
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="service-box-area">
                        <h1>Services</h1>
                        <p>Here are some of my services. Which I learned and applied at the learning stage.</p>
                        <div className="underline1"></div>
                     </div> 

                     <div className="service-grid-layout">
                         {
                             serviceInfo.map((item) => {
                                 return(
                                     <div className="service-card">
                                         <h1>{item.icon}</h1>
                                         <h4>{item.title}</h4>
                                         <p>{item.desc}</p>
                                     </div>
                                 )
                             })
                         }
                     </div>
                </div>
            </section>   
        </>
    )
}

export default Service
