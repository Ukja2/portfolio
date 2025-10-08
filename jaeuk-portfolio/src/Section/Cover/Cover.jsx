import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Cover.module.css";

export default function Cover() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const letters = "LEEJAEUK".split("");
    const finalTilts = [-8, 2, -6, 2, -7, 5, -4, 7];

    return (
        <div>
            <section className={styles.cover} ref={ref}>
                <div className={styles.caption}>PORTFOLIO</div>

                <div className={styles.textWrapper}>
                    {letters.map((ch, i) => {
                        const dirX = i % 2 === 0 ? 1 : -1;
                        const dirY = i % 3 === 0 ? -1 : 1;

                        const xRange = dirX * (400 + Math.random() * 400);
                        const yRange = dirY * (200 + Math.random() * 300);

                        const x = useTransform(scrollYProgress, [0, 1], [0, xRange]);
                        const y = useTransform(scrollYProgress, [0, 1], [0, yRange]);
                        const rotate = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [finalTilts[i], finalTilts[i] + (Math.random() - 0.5) * 360]
                        );
                        const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);

                        return (
                            <motion.span
                                key={i}
                                className={styles.char}
                                style={{ x, y, rotate, opacity }}
                                initial={{
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 0.5) * 600,
                                    rotate: (Math.random() - 0.5) * 720,
                                    opacity: 0,
                                    scale: 0.6,
                                }}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    rotate: finalTilts[i],
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 16,
                                    delay: i * 0.08,
                                }}
                            >
                                {ch}
                            </motion.span>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
