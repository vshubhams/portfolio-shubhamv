import styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>SHUBHAM</div>
        </div>
        <div className={styles.right}>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};
