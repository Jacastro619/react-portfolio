import projects from "../assets/utils/ProjectData";

export default function Projects() {
  return (
    <div className="pro-parent">
      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card pro-custom-card"
            style={{ width: "20rem" }}
          >
            <img
              src={`./images/${project.imageName}`}
              className="card-img-top h-50 p-1"
              alt={`${project.alt}`}
            />
            <div className="card-body cus-procard-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="link-btns">
                <a
                  href={project.repoLink}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-primary custom-project-btns"
                >
                  Go to Repository!
                </a>
                <a
                  href={project.deployedLink}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-primary custom-project-btns"
                >
                  View Demo Here!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
