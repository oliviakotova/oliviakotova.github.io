import { useState, useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Head>
        {/* Essential Meta Tags */}
        <title>Olivia Kotova | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Olivia Kotova, a professional web developer specializing in Next.js, React, JavaScript, Tailwind CSS, Wordpress, Squarespace and Shopify. Check out my projects and skills!"
        />
        <meta
          name="keywords"
          content="Web Developer, Next.js, JavaScript, React, Shopify, WordPress, Portfolio, Frontend Developer"
        />
        <meta name="author" content="Olivia Kotova" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Olivia Kotova | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my web development projects, skills, and contact information."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          property="og:url"
          content="https://oliviakotova-ced1437fd5ca.herokuapp.com/"
        />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/fav.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Olivia Kotova",
            jobTitle: "Web Developer",
            url: "https://oliviakotova-ced1437fd5ca.herokuapp.com/",
            sameAs: [
              "https://www.linkedin.com/in/olivia-kotova",
              "https://github.com/oliviakotova",
            ],
          })}
        </script>
      </Head>

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
