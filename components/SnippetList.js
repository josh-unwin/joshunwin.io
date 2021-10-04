import { useState } from 'react';
import SnippetLi from '@/components/SnippetLi';

const SnippetList = ({ allSnippets }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredSnippets = allSnippets
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .reduce(
      (hash, obj) => ({
        ...hash,
        [obj['category']]: (hash[obj['category']] || []).concat(obj)
      }),
      {}
    );

  return (
    <div>
      <h3 className="font-bold text-xl mb-5">Snippets</h3>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search snippets"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {!Object.entries(filteredSnippets).length && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">No posts found.</p>
      )}
      {Object.entries(filteredSnippets).map(([category, snippets]) => {
        console.log(snippets);
        return (
          <div className="mb-6">
            <h4 className="font-bold">{category}</h4>
            {snippets.map((frontMatter) => (
              <SnippetLi key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SnippetList;
