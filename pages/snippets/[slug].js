import hydrate from 'next-mdx-remote/hydrate';
import Image from 'next/image';
import { useState } from 'react';

import { getFiles, getFileBySlug, getFilesFrontMatter } from '@/lib/mdx';
import SnippetLayout from '@/layouts/snippetLayout';
import MDXComponents from '@/components/MDXComponents';
import Snippet from '@/components/Snippet';
import SnippetList from '@/components/SnippetList';

export default function SnippetPage({ allSnippets, snippet }) {
  const content = hydrate(snippet.mdxSource, {
    components: MDXComponents
  });

  return (
    <SnippetLayout frontMatter={snippet.frontMatter}>
      <div className="hidden lg:block md:pr-10 w-1/4 text-black">
        <SnippetList allSnippets={allSnippets} />
      </div>
      <div className="md:ml-20 md:max-w-4xl w-full">
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
