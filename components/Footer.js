import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 inset-x-0 max-w-2xl mx-auto w-full text-gray-600 flex flex-col items-center">
      <hr className="w-11/12 sm:w-full border-1 border-gray-200 dark:border-gray-800" />
      <div className="w-full flex justify-end my-6 mr-12 sm:mr-0">
        <a className="mr-2 hover:text-primarycolor" href="http://www.github.com/josh-unwin" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a className="mr-2 hover:text-primarycolor" href="https://www.linkedin.com/in/josh-unwin-a4735637/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl" />
        </a>
        <a className="hover:text-primarycolor" href="https://www.twitter.com/joshunwin/" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}
