import Image from 'next/image';

import Container from '@/components/Container';

export default function SnippetLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
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
              {'Joshua Unwin'}
            </p>
          </div>
          <a
            className="text-right text-sm text-gray-500 min-w-32 mt-2 md:mt-0"
            href={`https://github.com/josh-unwin/joshunwin.io/edit/master/data/snippets/${frontMatter.slug}.mdx`}
          >
            Edit
          </a>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          {frontMatter.description}
        </p>
        <div className="prose dark:prose-dark w-full -mt-6">{children}</div>
      </article>
    </Container>
  );
}
