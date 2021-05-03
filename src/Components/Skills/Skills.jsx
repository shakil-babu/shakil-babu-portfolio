import React from 'react'
import './Skills.css';
import {DiHtml5, DiCss3,DiBootstrap, DiMaterializecss,  } from 'react-icons/di';
import {SiJavascript, SiMaterialUi , SiReact, SiNodeDotJs, SiMongodb, SiTypescript, SiGatsby, SiFirebase, SiHeroku,SiReactrouter,SiRedux} from 'react-icons/si';
const Skills = () => {
    return (
        <>
            <section className="skills-area">
                <div className="container">
                    <div className="service-box-area">
                        <h1>Skills</h1>
                        <p>Have good and solid knowledge these technologies.</p>
                        <div className="underline1"></div>
                     </div> 

                     <div className="layout-skills">
                         <div className="icon-wrapper html"><DiHtml5 className='icon-item '/> <h3 className='tech-h'>HTML</h3></div>
                         <div className="icon-wrapper css"><DiCss3 className='icon-item '/><h3 className='tech-c'>CSS</h3></div>
                         <div className="icon-wrapper bootstrap"><DiBootstrap className='icon-item '/><h3 className="tech-b">BOOTSTRAP</h3></div>
                         <div className="icon-wrapper materialize"><DiMaterializecss className='icon-item '/><h3 className="tech-m">MATERIALIZE</h3></div>
                         <div className="icon-wrapper javascript"><SiJavascript className='icon-item '/><h3 className="tech-j">JAVASCRIPT</h3></div>
                         <div className="icon-wrapper react"><SiReact className='icon-item '/><h3 className="r">REACT</h3></div>
                         <div className="icon-wrapper router"><SiReactrouter className='icon-item '/> <h3 className="rr">REACT ROUTER</h3> </div>
                         <div className="icon-wrapper mui"><SiMaterialUi className='icon-item '/> <h3 className="m">MATERIAL UI</h3> </div>
                         <div className="icon-wrapper redux"><SiRedux className='icon-item '/> <h3 className="rd">REDUX</h3> </div>
                         <div className="icon-wrapper gatsby"><SiGatsby className='icon-item '/> <h3 className="g">GATSBY</h3> </div>
                         <div className="icon-wrapper typescript"><SiTypescript className='icon-item '/> <h3 className="t">TYPESCRIPT</h3> </div>
                         <div className="icon-wrapper nodejs"><SiNodeDotJs className='icon-item '/> <h3 className="n">NODE.JS</h3> </div>
                         <div className="icon-wrapper mongodb"><SiMongodb className='icon-item '/> <h3 className='m'>MONGODB</h3> </div>
                         <div className="icon-wrapper firebase"><SiFirebase className='icon-item '/><h3 className='f'>FIREBASE</h3></div>
                         <div className="icon-wrapper heroku"><SiHeroku className='icon-item '/> <h3 className="h">HEROKU</h3> </div>
                     </div>
                </div>
            </section>   
        </>
    )
}

export default Skills
