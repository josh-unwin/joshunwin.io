import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import ProfileContainer from '../components/ProfileContainer';
import Footer from '@/components/Footer';
import ThemeButton from '@/components/ThemeButton';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Josh Unwin',
    description: 'TODO',
    image: 'https://joshunwin.io/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black font-sans">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://joshunwin.io${router.asPath}`} />
        <link rel="canonical" href={`https://joshunwin.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Josh Unwin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <ProfileContainer mounted={mounted} theme={theme} setTheme={setTheme} />
      <div className="min-h-screen relative">
        <nav id='content' className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
          <ThemeButton theme={theme} setTheme={setTheme} mounted={mounted} />
          <div>
            <NextLink href="/about/#content">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-primarycolor-dark dark:hover:text-primarycolor-dark">About</a>
            </NextLink>
            <NextLink href="/projects/#content">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-primarycolor-dark dark:hover:text-primarycolor-dark">Projects</a>
            </NextLink>
            <NextLink href="/#content">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-primarycolor-dark dark:hover:text-primarycolor-dark">Blog</a>
            </NextLink>
          </div>
        </nav>
        <main
          id="skip"
          className="flex flex-col justify-center bg-white dark:bg-black px-8"
        >
          <div className="mb-16">
            {children}
          </div>
          <Footer /> 
        </main>
      </div>
    </div>
  );
}
