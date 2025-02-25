import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import ScrollToTopLink from "../components/ScrollToTop";

export default function Home() {
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

      <Main />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}
