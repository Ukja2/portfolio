import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Home.module.css";  
import Cover from "../Section/Cover/Cover";
import Profile from "../Section/Profile/Profile";
import Skills from "../Section/Skills/Skills";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { scrollYProgress } = useScroll();

  function handleResize() {
    setIsSmallScreen(window.innerWidth <= 770);
  }

  useEffect(() => {
    AOS.init();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        className={styles.scrollBar}
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <Cover />
      <Profile isSmallScreen={isSmallScreen} />
      <Skills/>
    </>
  );
}

