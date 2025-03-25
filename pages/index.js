import { useState, useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Hide loading spinner after the page has mounted
  useEffect(() => {
    setLoading(false); // Once the page has mounted, stop showing the spinner
  }, []);
  return (
    <div>
      <Head>
        <title>Olivia Kotova | Web Developer</title>
        <meta
          name="portfolio"
          content="Explore my web development portfolio featuring projects built with JavaScript, Next.js, Node.js, Tailwind CSS, WordPress, Shopify, and Squarespace. Discover innovative solutions and creative designs."
        />

        <link rel="icon" href="/fav.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      {/* Show the spinner if the page is still loading */}
      {loading && <LoadingSpinner />}

      <section id="home">
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}
