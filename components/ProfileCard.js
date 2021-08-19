import Image from 'next/image';
import { FaReact, FaJsSquare, FaGem, FaGithub, FaLinkedin, FaTwitter, FaPython } from 'react-icons/fa'

const ProfileCard = () => {
  return (
    <div className='absolute h-card-mob-height w-card-mob-width sm:h-card-height sm:w-card-width z-10 bg-white dark:bg-gray-800 px-4 sm:px-8 rounded-xl shadow-card dark:shadow-cardDark hover:shadow-cardhover dark:hover:shadow-cardhoverDark'>
      <div className='flex flex-col sm:flex-row h-full'>
        <div className='flex items-center justify-center mt-12 mb-6 sm:m-0'>
          <Image
            alt="Josh Unwin"
            height={180}
            width={180}
            src="/avatar.png"
            className="rounded-full"
          />
        </div>
        <div className="flex ml-4 sm:ml-6 sm:items-center flex-grow">
          <div className="">
            <h1 className="font-sans tracking-widest text-2xl">joshua unwin</h1>
            <h3 className="font-sans font-thin tracking-ultrawide mb-4">FRONT END DEVELOPER</h3>
            <ul className="text-gray-800 dark:text-white font-extralight">
              <li className="flex flex-row items-center">
                <Image
                  alt="Tree"
                  height={15}
                  width={15}
                  src="/logos/tree.png"
                  className=""
                />
                <p className="ml-1 sm:text-left text-centered tracking-wide">
                  Climate activist
                </p>
              </li>
              <li className="flex flex-row items-center">
                <Image
                  alt="Clapperboard"
                  height={15}
                  width={15}
                  src="/logos/film.png"
                  className=""
                />
                <p className="ml-1 sm:text-left text-centered tracking-wide">
                  Background in film workflow
                </p>
              </li>
            </ul>

            <div className="flex items-center text-gray-800 dark:text-white font-extralight">
              <FaReact className='mr-1' /> React |
              <FaJsSquare className='m-1' /> JS |
              <FaGem className='m-1' /> Rails |
              <FaPython className='m-1' /> Python
            </div>
            <div className="flex items-center mt-4 text-gray-800 dark:text-white">
              <a href="mailto:joshunwin@gmail.com"><button className="mr-3 bg-primarycolor dark:bg-primarycolor-dark hover:bg-primarycolor-dark dark:hover:bg-primarycolor-darker rounded px-3 py-2 text-white">Say hi 👋</button></a>
              <a className="mr-2 text-gray-700 dark:text-white hover:text-primarycolor dark:hover:text-primarycolor" href="http://www.github.com/josh-unwin" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl" />
              </a>
              <a className="mr-2 text-gray-700 dark:text-white hover:text-primarycolor dark:hover:text-primarycolor" href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl" />
              </a>
              <a className="text-gray-700 dark:text-white hover:text-primarycolor dark:hover:text-primarycolor" href="https://www.twitter.com/joshunwin/" target="_blank" rel="noreferrer">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard