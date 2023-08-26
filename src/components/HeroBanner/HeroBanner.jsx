import Search from "../Search/Search";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <section className={styles.heroBannerSection}>
      <div className={styles.heroBannerOverlay}>
      </div>
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerContent}>
          <h1 className={styles.heroBannerTitle}>
            Your local source of high quality images and videos directly from
            their creators
          </h1>
          <Search placeholder={"Search photos and videos"} />
          <p className="text-left pl-[30px] mt-4 text-lg text-secondary">Recommended: <span className="opacity-70">summer, food, covid-19, real estate, love</span></p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
