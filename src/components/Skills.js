import { logo_url } from "../utils/extras"
const Skills = () => {
    return (
        <div className="skills">
            <div className="sk-left"><p>Skills</p></div>
            <div className="sk-right">
                {
                    logo_url.map((url, index)=>{
                        return <div key={index} className="single-img"><img className="tech-logo" src={url}></img></div>
                    })
                }
            </div>
        </div>
    )
}
export default Skills