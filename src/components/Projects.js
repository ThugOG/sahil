import { useState } from "react"
import { projects } from "../utils/extras"
import ProjectCard from "./ProjectCard"
const Projects = () => {
    const [showAll, setShowAll] = useState(false)
    const handleClick = () => {
        setShowAll(!showAll)
    }
    return(
        <div className="projects">
            <div className="pj-left"><p>Projects</p></div>
            <div className="pj-right">
                {
                   projects.map((single, index)=>{
                        if(showAll)
                            return <ProjectCard key={index} {...single}/>
                        else{
                            if(index <= 2){
                                return <ProjectCard key={index} {...single}/>
                            }
                        }
                   }) 
                }
                <button className="btn-view-more" onClick={handleClick}>Show More</button>
            </div>
        </div>
    )
}
export default Projects