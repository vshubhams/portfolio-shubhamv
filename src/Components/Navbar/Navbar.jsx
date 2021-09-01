import styles from "./navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link, animateScroll } from "react-scroll";

export const Navbar = ({ toggle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div
            onClick={() => {
              animateScroll.scrollToTop();
            }}
          >
            SHUBHAM
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItems}>
            <div>
              <Link className="active" to="about" spy={true} exact smooth={true} duration={500}>
                About
              </Link>
            </div>
            <div>
              <Link to="projects" spy={true} exact smooth={true} duration={500}>
                Projects
              </Link>
            </div>
            <div>
              <Link to="contact" spy={true} exact smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </div>
          <div className={styles.menuButton}>
            <IconButton onClick={toggle}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
