import "./project.css"
import b from "./assets/b.jpg"
function Project(){
    return(
        <section class="projects">
    <h2>Project</h2>
    <div class="project-list">
      <div class="project-card">
      <div>
          <img src={b} alt="Project Image"></img>
      </div>
        <div class="project-info">
          <h3>Project : Name</h3>
          <p>A profile picture is the image that represents a social media account at all its interactions across a platform.</p>
          <button>GitHub</button>
        </div>
      </div>
      <div class="project-card">
      <div>
          <img src={b} alt="Project Image"></img>
      </div>
        <div class="project-info">
          <h3>Project : Name</h3>
          <p>A profile picture is the image that represents a social media account at all its interactions across a platform.</p>
          <button>GitHub</button>
        
        </div>
      </div>
      <div class="project-card">
     <div>
         <img src={b} alt="Project Image"></img>
     </div>
        <div class="project-info">
          <h3>Project : Name</h3>
          <p>A profile picture is the image that represents a social media account at all its interactions across a platform.</p>
          <button>GitHub</button>
        
        </div>
      </div>
    </div>
  </section>
    )
}
export default Project;