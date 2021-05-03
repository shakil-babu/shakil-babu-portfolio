import React from 'react'
import './Header.css';
import personal from '../../utilities/images/sh.png';
import Navbar from '../Navbar/Navbar';
import resume from '../../utilities/images/resume.pdf'
import { BsDownload} from 'react-icons/bs';
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';
const Header = () => {
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        // emitter: "follow",
        random: 15
      };
  
      if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }
    return (
        <>
        <ParticlesBg type="custom" config={config} bg={true}/>
            <section className="header-area">
                <Navbar isBg={false}/>
                <div className="container">
                    <div className="header-flex">
                        <div className="hinfo">
                            <h6>Welcome to my World</h6>
                            <h1>Hello I’m <br/> Shakil Babu</h1>
                            <p>A MERN Stack developer(Jr.) who have  more  than 2 years of learning experience  building  and  testing applications for Web using JavaScript, node.js, express.js, mongodb, react.js and gatsbyjs.</p>
                            <div className="btn-flex">
                                
                            <a href={resume} download="resume" className='width'>
                            <button className="btn"> <BsDownload/> Dowenload Resume</button>
                            </a>
                               <Link className='width' to='/contact' style={{textDecoration:"none"}} > <button className="btn">Hire me</button></Link>
                            </div>
                        </div>
                        <div className="header-img">
                            <img src={personal} alt="personal"/>
                        </div>
                    </div>
                </div>
                <div className="side-bg"></div>
            </section>   
        </>
    )
}

export default Header
