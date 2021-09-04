import styles from "./profile.module.css"
import GetAppIcon from '@material-ui/icons/GetApp';
export const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imgBox}>
                    <img src="/shubhamv2.jpg" alt="" />
                </div>
                <div className={styles.myName}>Hi, I'm <span>Shubham verma </span></div>
                <p className={styles.descrip}>
                    An Aspiring Developer with a passion for developing scalable web applications.
                </p>
                <button onClick={() => { window.open("https://drive.google.com/file/d/1fZG3oHKl-w7_pPZhHlJxTu7EocHZixVM/view?usp=sharing") }}> <GetAppIcon /> RESUME</button>
            </div>
        </div>
    )
}
