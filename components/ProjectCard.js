import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div>
        <h4 className="text-lg md:text-2xl font-medium mb-2 w-full text-gray-900 dark:text-white">
          { project.title }
        </h4>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          <span className="font-bold mr-1">
            Contribution:
          </span>
          { project.contribution }
          <br />
          <span className="font-bold mr-1">
            Key Technologies:
          </span>
          { project.technologies.join(', ') }
          <br />
        </div>
        <hr className="my-2 sm:mx-3 border-1 border-gray-200 dark:border-gray-800" />
        <div className="flex items-center text-sm pb-2">
          <span className="w-1/2 text-center">
          { project.url ? 
            <a className="cursor-pointer text-primarycolor-darker" href={project.url} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="inline mb-1 mr-1" />
              View project
            </a>
            :
            <span className="text-gray-500 cursor-not-allowed">
              <FaExternalLinkAlt className="inline mb-1 mr-1" />
              Work in progress
            </span>
          }
          </span>
          <span className="w-1/2 text-center">
            {project.repo ?
              <a className="cursor-pointer text-primarycolor-darker" href={project.repo} target="_blank" rel="noreferrer">
                <FaGithub className="inline mb-1 mr-1" />
                Git repo
              </a>
              :
              <span className="text-gray-500 cursor-not-allowed">
                <FaGithub className="inline mb-1 mr-1" />
                On request
              </span>
            }
          </span>
        </div>
        <p className="text-gray-800 dark:text-gray-100 text-sm">
          { project.content }
        </p>
      </div>
      <img
          alt="Josh Unwin"
          src={project.image}
          className='sm:ml-2 object-contain w-full md:w-80'
        />
    </div>
  );
}
