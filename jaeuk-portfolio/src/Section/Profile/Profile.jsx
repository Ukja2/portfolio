import profile_img from "../../assets/profile_img.png";
import styles from "./Profile.module.css";
import { FaGithub, FaBloggerB } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

function Profile() {
    return (
        <section id="profile" className={styles.profileSection}>
            <h1 className={styles.title}>Profile</h1>

            <div
                className={styles.profileContainer}
                data-aos="fade-up"
                data-aos-offset="230"
                data-aos-duration="500"
            >
                <div className={styles.profileContent}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageBorder}>
                            <img
                                src={profile_img}
                                alt="profile_img"
                                className={styles.image}
                            />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.name}>이재욱</p>
                        <p className={styles.job}>Frontend Developer</p>
                        <p className={styles.school}>Keimyung Univ · Computer Engineering</p>

                        <p className={styles.contact}>{import.meta.env.VITE_EMAIL}</p>
                    </div>
                </div>

                <div className={styles.linkButtons}>
                    <a
                        href={import.meta.env.VITE_BLOG}
                        className={styles.iconBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Blog"
                    >
                        <FaBloggerB />
                    </a>
                    <a
                        href={import.meta.env.VITE_RESUME}
                        className={styles.iconBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                    >
                        <HiOutlineDocumentText />
                    </a>
                    <a
                        href={import.meta.env.VITE_GITHUB}
                        className={styles.iconBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Profile;
