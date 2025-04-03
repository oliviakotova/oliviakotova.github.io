import "../styles/globals.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import Spinner from "../components/Spinner";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate load time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
