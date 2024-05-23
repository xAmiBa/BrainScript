const ProjectCard = ({
  projectData,
  currentProjectPreview,
  setProjectPreview,
}) => {
  const project = projectData.project;
  const author = projectData.author;

  const handleClick = (event) => {
    setProjectPreview(projectData);
  };

  return (
    <button
      className="bg-white bg-opacity-5 shadow-xl rounded-xl hover:bg-dark_bg hover:progress-invalid"
      type="button"
      onClick={handleClick}
    >
      <div>
        <div className="flex flex-col gap-3 py-5 px-5">
          <h3 className="text-xl text-left">{project.title}</h3>
          <div className="flex flex-row gap-2">
            {project.technologies.map((item) => {
              return (
                <div className="technology-blob border rounded px-2 py-1">
                  {item}
                </div>
              );
            })}
          </div>
          <p className="text-right text-gray-500 text-xs">by {author}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
