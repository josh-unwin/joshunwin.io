import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Josh Unwin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          You're lost (that's a 404)
        </h1>
        <div className="mx-auto text-center">
          <Image
            alt={`404`}
            src={`/static/images/404.gif`}
            width={480}
            height={360}
          />
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We've got to go back.
          </p>
          <Link href="/">
            <a className="p-1 sm:p-4 w-64 font-bold bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
