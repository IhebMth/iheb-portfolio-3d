import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { projects } from '../constants';
import { arrow } from '../assets/icons';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);
  const projectDescriptionsRef = useRef([]);

  // Function to toggle the project's expanded state
  const toggleProjectExpansion = (projectName) => {
    setExpandedProjects((prevExpandedProjects) =>
      prevExpandedProjects.includes(projectName)
        ? prevExpandedProjects.filter((name) => name !== projectName)
        : [...prevExpandedProjects, projectName]
    );
  };

  // Function to check if the description exceeds 50 words
  const isDescriptionExpanded = (projectName) => {
    const wordsCount = projectDescriptionsRef.current[projectName]
      ? projectDescriptionsRef.current[projectName].innerText.split(/\s+/).length
      : 0;
    return wordsCount > 50;
  };

  // Effect to update the state when the component mounts
  useEffect(() => {
    projects.forEach((project) => {
      if (isDescriptionExpanded(project.name)) {
        setExpandedProjects((prevExpandedProjects) => [...prevExpandedProjects, project.name]);
      }
    });
  }, []);

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p
                ref={(ref) => (projectDescriptionsRef.current[project.name] = ref)}
                className="mt-2 text-slate-500"
              >
                {expandedProjects.includes(project.name)
                  ? project.description
                  : project.description
                      .split(' ')
                      .slice(0, 50)
                      .join(' ')}
              </p>

              {/* Load more button */}
              {isDescriptionExpanded(project.name) && (
                <button
                  className="mt-2 text-blue-600 font-semibold"
                  onClick={() => toggleProjectExpansion(project.name)}
                >
                  {expandedProjects.includes(project.name) ? 'Show Less' : 'Load More'}
                </button>
              )}

              <div className="flex-1 min-w-[50%] flex flex-row gap-12">
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Github Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>

                {project.name !== 'MERN STACK E-Commerce WebSite' &&
                  project.name !== 'Wedding Events App MEAN Stack' && (
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link
                        to={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600"
                      >
                        Live Link
                      </Link>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default Projects