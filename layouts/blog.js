import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { FaGithub } from 'react-icons/fa';

import Container from '@/components/Container';

const editUrl = (slug) =>
  `https://github.com/joshunwin/joshunwin-io/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Josh Unwin`}
      description={frontMatter.summary}
      image={`https://joshunwin.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
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
              {'Joshua Unwin • '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose max-w-none w-full">{children}</div>
        <div className="mt-8"></div>
      </article>
    </Container>
  );
}
