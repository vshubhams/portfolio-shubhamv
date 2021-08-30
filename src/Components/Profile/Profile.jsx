import styles from "./profile.module.css"
export const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imgBox}>
                    <img src="/shubhamv2.jpg" alt="" />
                </div>
                <div className={styles.myName}>HI, I'm <span>Shubham verma </span></div>
                <p className={styles.descrip}>
                    An enthusiastic Full-Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating use full and interactive web application.
                </p>
                <button>Download Resume</button>
            </div>
        </div>
    )
}
