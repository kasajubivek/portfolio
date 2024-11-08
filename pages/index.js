import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Bivek Kasaju - Software Developer</title>
        <meta 
          name="description" 
          content="Software developer portfolio using Next.js & tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Experiences />
        <Projects/>
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
