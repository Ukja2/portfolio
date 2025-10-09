import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import { SkillsData } from "./SkillsData";

export default function Skills() {
  const [category, setCategory] = useState("Frontend");
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(220);
  const [containerW, setContainerW] = useState(0);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const skills = SkillsData[category];
  const last = skills.length - 1;

  useEffect(() => setIndex(0), [category]);

  const recalc = () => {
    if (carouselRef.current) {
      setContainerW(carouselRef.current.getBoundingClientRect().width);
    }
    if (trackRef.current) {
      const card = trackRef.current.querySelector(`.${styles.card}`);
      if (card) {
        const w = card.getBoundingClientRect().width;
        const cs = getComputedStyle(trackRef.current);
        const gap = parseFloat(cs.gap || "24");
        setSlide(w + gap);
      }
    }
  };

  useEffect(() => {
    recalc();
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [category]);

  const moveLeft = () => setIndex((i) => Math.max(0, i - 1));
  const moveRight = () => setIndex((i) => Math.min(last, i + 1));

  const offsetX =
    skills.length === 1
      ? 0 
      : containerW / 2 - index * slide - slide / 2 + 60;

  return (
    <section
      id="skills"
      className={styles.skillsSection}
      data-aos="fade-up"
      data-aos-offset="220"
      data-aos-duration="600"
    >
      <h1 className={styles.title}>Skills</h1>

      <select
        className={styles.dropdown}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Frontend">Frontend</option>
        <option value="Deploy">Deploy</option>
        <option value="Tools">Tools</option>
      </select>

      <div className={styles.carouselWrapper}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={moveLeft}
          disabled={index === 0}
        >
          〈
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles.trackOuter}>
            <div
              className={styles.trackInner}
              ref={trackRef}
              style={{ transform: `translateX(${offsetX}px)` }}
            >
              {skills.map((s, i) => {
                const dist = Math.abs(i - index);
                const scale = 1 - Math.min(dist, 2) * 0.15;
                const opacity = 1 - Math.min(dist, 2) * 0.5;
                return (
                  <button
                    key={s.name}
                    className={`${styles.card} ${i === index ? styles.active : ""}`}
                    style={{ transform: `scale(${scale})`, opacity }}
                    onClick={() => setIndex(i)}
                  >
                    <img src={s.icon} alt={s.name} loading="lazy" />
                    <p>{s.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.navBtn}
          onClick={moveRight}
          disabled={index === last}
        >
          〉
        </button>
      </div>

      <div
        className={styles.desc}
        data-aos="fade-up"
        data-aos-delay="120"
        data-aos-duration="600"
      >
        <h3>{skills[index].name}</h3>
        <ul>
          {skills[index].details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
