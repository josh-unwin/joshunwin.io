import Container from '@/components/Container';

export default function SnippetLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex">{children}</div>
    </Container>
  );
}
