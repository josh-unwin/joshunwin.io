import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CopyToClipboard = (props) => {
  const [copied, setCopied] = useState(false);

  function onClick(e) {
    if (e.target.nextSibling.className.includes('language'))
      window.navigator.clipboard.writeText(e.target.nextSibling.innerText);
    else if (e.target.nextSibling.nextSibling.className.includes('language'))
      window.navigator.clipboard.writeText(
        e.target.nextSibling.nextSibling.innerText
      );
    setCopied(true);
  }

  return (
    <button
      onClick={onClick}
      className={`mt-2 mr-4 text-gray-500 float-right font-bold ${
        copied ? 'text-green-500' : ''
      }`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const MDXComponents = {
  Image,
  CopyToClipboard
};

export default MDXComponents;
