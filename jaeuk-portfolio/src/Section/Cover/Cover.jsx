import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { IoIosFlashlight } from "react-icons/io";
import styles from "./Cover.module.css";

export default function Cover() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [lightOn, setLightOn] = useState(() => {
    const saved = localStorage.getItem("lightOn");
    return saved === "true";
  });

  const letters = "LEEJAEUK".split("");
  const finalTilts = [-8, 3, -7, 6, -5, 6, -4, 5];

  const randomOffsets = useMemo(() => {
    return letters.map((_, i) => {
      const dirX = i % 2 === 0 ? 1 : -1;
      const dirY = i % 3 === 0 ? -1 : 1;
      return {
        xRange: dirX * (400 + Math.random() * 400),
        yRange: dirY * (200 + Math.random() * 300),
        extraRotate: (Math.random() - 0.5) * 360,
      };
    });
  }, []);

  return (
    <section
      className={`${styles.cover} ${lightOn ? styles.lightOn : ""}`}
      ref={ref}
    >
      <div className={styles.caption}>PORTFOLIO</div>

      <button
        className={`${styles.flashButton} ${lightOn ? styles.flashOn : ""}`}
        onClick={() => {
          const newState = !lightOn;
          setLightOn(newState);
          localStorage.setItem("lightOn", newState);
        }}
      >
        <IoIosFlashlight size={30} />
      </button>

      <div className={styles.textWrapper}>
        {letters.map((ch, i) => {
          const { xRange, yRange, extraRotate } = randomOffsets[i];

          const x = useTransform(scrollYProgress, [0, 1], [0, xRange]);
          const y = useTransform(scrollYProgress, [0, 1], [0, yRange]);
          const rotate = useTransform(
            scrollYProgress,
            [0, 1],
            [finalTilts[i], finalTilts[i] + extraRotate]
          );
          const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);

          return (
            <motion.span
              key={i}
              className={styles.charWrapper}
              style={{ x, y, rotate, opacity }}
              initial={{
                x: (() => {
                  const val = (Math.random() - 0.5) * 1200;
                  return Math.abs(val) < 400 ? (val < 0 ? -400 : 400) : val;
                })(),
                y: (() => {
                  const val = (Math.random() - 0.5) * 800;
                  return Math.abs(val) < 300 ? (val < 0 ? -300 : 300) : val;
                })(),
                rotate:
                  (Math.random() < 0.5 ? -1 : 1) *
                  (400 + Math.random() * 220),
                scale: 0.8,
                opacity: 0,
                ...(letters[i - 1] === "J" ? { marginLeft: "-1em" } : {}),
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: finalTilts[i],
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 14,
                mass: 0.9,
                delay: i * 0.06,
              }}
            >
              <motion.span
                className={styles.shadow}
                style={{ x, y, rotate, opacity }}
              >
                {ch}
              </motion.span>
              <motion.span className={styles.char}>{ch}</motion.span>
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
