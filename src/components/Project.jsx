import PropTypes from "prop-types";

const Project = ({ projectsList }) => {
  const projects = projectsList.projects;

  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.objectId}
          className="m-2 flex flex-col-reverse justify-between gap-3 rounded-lg p-4 transition hover:scale-105 hover:bg-base-200 xl:m-2 xl:flex-row xl:p-4"
        >
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-xl uppercase">
              <b className="transition hover:text-primary">
                <a href={`${project.demoLink}`} target="_blank">
                  {project.projectTitle}
                </a>
              </b>
            </h1>
            <div className="mb-2">{project.projectDescription}</div>
            <div className="mb-4 flex flex-row flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <p key={index} className="badge badge-secondary badge-outline">
                  {tool}
                </p>
              ))}
            </div>
            <div className="flex flex-row">
              <button className="pr-2">
                <a href={`${project.demoLink}`} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M2048 0v1664h-384v384H0V384h384V0zm-128 1536V128H512v256h256v128H128v1408h1408v-640h128v256zm-979-339l-90-90l594-595h-421V384h640v640h-128V603z"
                    />
                  </svg>
                </a>
              </button>

              <button className="pl-2">
                <a href={`${project.sourceCodeLink}`} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M1024 25q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 165-50 318t-143 281t-221 224t-286 149q-3 1-9 1t-9 1q-24 0-38-14t-14-37v-140q0-69 1-141q0-51-15-103t-54-87q116-13 203-47t146-96t88-150t30-212q0-78-26-147t-79-128q11-28 16-58t5-60q0-39-8-77t-23-76q-5-2-11-2t-11 0q-32 0-67 10t-69 26t-67 35t-57 36q-125-35-256-35t-256 35q-25-17-57-36t-66-34t-70-26t-67-11h-11q-6 0-11 2q-14 37-22 75t-9 78q0 30 5 60t16 58q-53 58-79 127t-26 148q0 122 29 211t88 150t146 97t203 48q-29 26-44 62t-21 75q-27 13-57 20t-60 7q-64 0-106-30t-75-82q-12-19-29-38t-37-34t-43-24t-48-10h-12q-8 0-15 3t-14 6t-6 10q0 12 14 23t23 18l3 2q22 17 38 32t30 33t23 38t23 47q34 78 95 113t147 36q26 0 52-3t52-9v174q0 24-14 38t-39 14h-8q-5 0-9-2q-157-51-286-147t-221-225t-142-282t-51-318q0-141 36-272t104-244t160-207t207-161T752 62t272-37"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <a href={`${project.demoLink}`} target="_blank">
              <img
                src={`/images/projects${project.imagePath}`}
                alt={`${project.projectTitle}`}
                className="m-auto rounded-lg shadow-md xl:max-w-[300px]"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Project;

Project.propTypes = {
  projectsList: PropTypes.array.isRequired,
};
