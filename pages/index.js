import { useState } from 'react';
import { getFileBySlug, getFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/Container';
import BookCard from '@/components/BookCard';
import BlogPost from '@/components/BlogPost';
import NextLink from 'next/link';

export default function Index({ posts, readingList }) {
  return (
    <Container
      title="Blog – Josh Unwin"
      description="My little place on the internet 🤓"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 text-black dark:text-white">
          Welcome 👋
        </h1>
        {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
          Hi there, I write
        </p> */}
        <div className="mb-4">
          <h2 className="inline font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">
            Recent Posts
          </h2>
          <span className="ml-2 inline text-black dark:text-white text-xs">
            <NextLink href="/blog#content">See all...</NextLink>
          </span>
        </div>
        {posts.map((post, index) => {
          if (index < 3) {
            return <BlogPost key={post.title} {...post} />;
          }
        })}

        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Currently Reading
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {readingList.frontMatter.Books.map((book) => (
            <BookCard
              title={book.title}
              description={book.description}
              href={book.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getFilesFrontMatter('blog');
  const readingList = await getFileBySlug('extras', 'reading-list');

  return {
    props: { posts, readingList }
  };
}
