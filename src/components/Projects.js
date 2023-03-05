import { projects } from "../utils/extras"
import ProjectCard from "./ProjectCard"
const Projects = () => {
    return(
        <div className="projects">
            <div className="pj-left"><p>Projects</p></div>
            <div className="pj-right">
                {
                   projects.map((single)=>{
                        return <ProjectCard {...single}/>
                   }) 
                }
                <p>Check my Other Project on github</p>
            </div>
        </div>
    )
}
export default Projects