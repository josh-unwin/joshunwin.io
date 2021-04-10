import Link from 'next/link';
import { getAllFilesFrontMatterAndContent } from '@/lib/mdx';
import hydrate from 'next-mdx-remote/hydrate';
import MDXComponents from '@/components/MDXComponents';


import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';

export default function Projects({ projects }) {
  return (
    <Container title="Projects – Josh Unwin">
      <div id="content" className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          A few sample development projects I have worked on.
        </p>

        {projects.map((project, index) => (
          <div className="flex items-center flex-col">
            <ProjectCard project={project} />
            { index !== projects.length - 1 && <hr className="text-center my-10 w-7/12 border-1 border-gray-200 dark:border-gray-600" /> }
          </div>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatterAndContent('projects');

  return { props: { projects } };
}
