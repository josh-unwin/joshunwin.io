import Link from 'next/link';

const SnippetLi = ({ title, summary, slug }) => {
  return (
    <Link href={`/snippets/${slug}/#content`}>
      <a className="w-full">
        <div className="ml-3 mb-3 w-full">
          <div className="flex flex-col md:flex-row justify-between group">
            <h4 className="w-full text-gray-900 dark:text-gray-100 group-hover:text-primarycolor-dark group-hover:dark:text-primarycolor-darker">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default SnippetLi;
