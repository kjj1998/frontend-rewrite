import Link from 'next/link';
import Head from 'next/head';

function HomePage() {
  return (
    <div>
      <Head>
        <title>modules2students</title>
        <meta 
          name='modules2students'
          content='A recommender system for Nanyang Technological University (NTU) modules.'
        />
      </Head>
      <h1 className="mt-20">The Home Page</h1>
      <ul>
          <li>
              <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
              <Link href="/clients">Clients</Link>
          </li>
      </ul>
    </div>
  );
}

export default HomePage;