import Image from 'next/image';
import Link from 'next/link';

const Snippet = ({ frontMatter, content }) => {
  return (
    <div className="max-w-2xl">
      <Link href="/snippets#content">
        <a className="text-black dark:text-white md:hidden float-right">Back</a>
      </Link>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="flex items-center">
          <Image
            alt="Josh Unwin"
            height={24}
            width={24}
            src="/profile.jpg"
            className="rounded-full"
          />
          <p className="text-sm text-gray-500 dark:text-gray-300 ml-2">
            {frontMatter.by}
            {'Joshua Unwin •'}
          </p>
          <a
            className="text-right text-sm text-gray-500 dark:text-gray-300 ml-1"
            href={`https://github.com/josh-unwin/joshunwin.io/edit/master/data/snippets/${frontMatter.slug}.mdx`}
          >
            Edit
          </a>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        {frontMatter.description}
      </p>
      <div id="snippet" className="prose dark:prose-dark w-full -mt-6">
        {content}
      </div>
    </div>
  );
};

export default Snippet;
