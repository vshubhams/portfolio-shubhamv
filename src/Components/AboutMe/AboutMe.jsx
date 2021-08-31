import styles from "./aboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} container spacing={1}>
        <div>
          <div className={styles.textBox}>
            <h2>About me</h2>
            <p>
              A dedicated full-stack devdloper with a specialized skill set that
              enables me to build robust web applications. I am adept in both
              front-end and back-end and have an eye for performance an
              accuracy.
            </p>
          </div>
        </div>
        <div className={styles.imgBox}>
          <img src="/mern.png" alt="" />
        </div>
      </div>
    </div>
  );
};
