import Project from "../components/Project";
import projectsList from "../data/projects.json";

const ProjectPage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between py-10 lg:flex-row">
      <div>
        <h1 className="text-primary sticky top-[70px] mb-4 text-3xl font-bold uppercase md:text-4xl">
          Projects
        </h1>
      </div>
      <div className="lg:w-8/12">
        <Project projectsList={projectsList} />
      </div>
    </div>
  );
};
export default ProjectPage;
