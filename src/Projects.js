import "./Projects.css";
import ProjectCards from "./ProjectCards";

function Projects(){
    return(
        <section id="projects">
            <hr />
            <div className="container">
                <ProjectCards />
            </div>
        </section>
    );
}
export default Projects;