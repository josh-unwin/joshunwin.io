import Image from 'next/image';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Josh Unwin">
      <div id="content" className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="flex">
          <div>
          </div>
          <div>
            <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 relative">
              <p>
                Hi there, I’m Josh/ua. I'm a self-taught Javascript developer, film workflow specialist & climate activist.
              </p>
              <div className="text-center sm:float-right ml-4">
                <Image
                    alt="Josh Unwin"
                    height={250}
                    width={250}
                    src="/profile.jpg"
                    className=""
                  />
              </div>
              <p>
                I know, quite the mix!
              </p>
              <p>
                I started career life in film & TV, working in dailies workflow on projects such as&nbsp;
                <a href="https://www.imdb.com/title/tt5607976" target="_blank">His Dark Materials</a>
                ,&nbsp;
                <a href="https://www.imdb.com/title/tt6398184" target="_blank">Downton Abbey</a>
                ,&nbsp;
                <a href="https://www.imdb.com/title/tt8079248" target="_blank">Yesterday</a>
                ,&nbsp;
                <a href="https://www.imdb.com/title/tt5697572" target="_blank">Cats</a>
                &nbsp;and&nbsp;
                <a href="https://www.imdb.com/title/tt2235759" target="_blank">The Great</a>.
              </p>
              <p>
                While keeping my ties with the film industry I decided to pursue two other passions: programming and climate.
                In 2019, I went through LeWagon's excellent full-stack&nbsp;
                <a href="https://www.lewagon.com/bali" target="_blank">bootcamp</a>
                &nbsp;before self-learning React and Node among other frameworks & tools in the weird and wonderful world of
                Javascript and the web.
                I've partaken in numberous climate protests and events and in 2020 I joined&nbsp;
                <a href="https://www.greenparty.org.uk">The Green Party</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
