import styles from "./skills.module.css";
import { Technologies } from "./Technologies/Technologies";

export const Skills = () => {
    return (
        <div id="skills" className={styles.wrapper}>
            <h1>Skills</h1>
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
    },
];

