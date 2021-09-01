import styles from "./aboutMe.module.css";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Technologies } from "./Technologies/Technologies";

export const AboutMe = () => {
  return (
    <div id="about" className={styles.wrapper}>
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
            <div className={styles.iconBox}>
              <IconButton  className={styles.linkedIn} >
                <LinkedInIcon/>
              </IconButton>
              <IconButton className={styles.gitHub}>
                <GitHubIcon />
              </IconButton>
              <IconButton className={styles.twitter}>
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={styles.imgBox}>
          <img src="/feeling_proud.png" alt="" />
        </div>
      </div>
      <Technologies data={techno} title={"Technologies"} />
      <Technologies data={proficiencies} title="Proficiencies" />
    </div>
  );
};

const techno = [
  {
    name: "HTML",
    image: "/icons/html.png",
  },
  {
    name: "CSS",
    image: "/icons/css.png",
  },
  {
    name: "JavaScript",
    image: "/icons/javascript.png",
  },
  {
    name: "React",
    image: "/icons/react.png",
  },
  {
    name: "Redux",
    image: "/icons/redux.png",
  },
  {
    name: "Material Ui",
    image: "/icons/materialui.png",
  },
  {
    name: "Node.js",
    image: "/icons/nodejs.png",
  },
  {
    name: "MongoDb",
    image: "/icons/mongodb.png",
  },
  {
    name: "Bootstrap",
    image: "/icons/bootstrap.png",
  },
  {
    name: "Express.js",
    image: "/icons/expressjs.png",
  },
];

const proficiencies = [
  {
    name: "Front-end",
    image: "/icons/frontend.png",
  },
  {
    name: "Backend",
    image: "/icons/backend.png",
  },
  {
    name: "DS & Algorithm",
    image: "/icons/datastructure.png",
  }
];