import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { mernProjectInfo, bootstrapProjectInfo, htmlCssProjectInfo, jsProjectInfo, reactBasicMedium, reactAdvancedProjectInfo } from '../../../utilities/projectInfo';
import Navbar from '../../Navbar/Navbar';
import './SeeProjects.css';
import ProjectDetails from '../../ProjectDetails/ProjectDetails';
const SeeProjects = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);


    const filteredData = () => {
        if(id === 'html & css'){
            setData(htmlCssProjectInfo)
        }

        if(id === 'bootstrap'){
            setData(bootstrapProjectInfo)
        }

        if(id === 'javascript'){
            setData(jsProjectInfo);
        }

        if(id === 'reactjs-basic'){
            setData(reactBasicMedium);
        }

        if(id === 'reactjs-advanced'){
            setData(reactAdvancedProjectInfo)
        }
        if(id === 'mern'){
            setData(mernProjectInfo)
        }
    }

    useEffect(() => {
        filteredData();
    }, [])

    
    const history = useHistory();
    return (
        <>
        <Navbar isBg={true}/>
            <div className="seeproject-area">
                <div className="container">
                    <button onClick={() => history.goBack()} className='back-btn' > <BsArrowLeft className='icon'/> Back</button>
                    <div className="project-title-location">
                        <h1>{id} Projects</h1>
                    </div>

                    <div className="details-grid-layout">
                        {
                            data.map((item) => <ProjectDetails info={item} />)
                        }
                    </div>
                </div>
            </div>   
        </>
    )
}

export default SeeProjects
