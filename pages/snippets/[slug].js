import hydrate from 'next-mdx-remote/hydrate';
import Image from 'next/image';
import { useState } from 'react';

import { getFiles, getFileBySlug, getFilesFrontMatter } from '@/lib/mdx';
import SnippetLayout from '@/layouts/snippetLayout';
import MDXComponents from '@/components/MDXComponents';
import Snippet from '@/components/Snippet';
import SnippetLi from '@/components/SnippetLi';

export default function SnippetPage({ allSnippets, snippet }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredSnippets = allSnippets
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const content = hydrate(snippet.mdxSource, {
    components: MDXComponents
  });

  return (
    <SnippetLayout frontMatter={snippet.frontMatter}>
      <div className="w-1/3 text-black">
        {!filteredSnippets.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredSnippets.map((frontMatter) => (
          <SnippetLi key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
      <div className="w-2/3">
        <Snippet frontMatter={snippet.frontMatter} content={content} />
      </div>
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets');

  return {
    paths: snippets.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const allSnippets = await getFilesFrontMatter('snippets');
  const snippet = await getFileBySlug('snippets', params.slug);

  return {
    props: {
      allSnippets: allSnippets,
      snippet: snippet
    }
  };
}
