import styles from "./contact.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(0.7),
            width: "35ch",
        },
    },
}));

export const Contact = () => {
    const classes = useStyles();

    return (
        <div id="contact" className={styles.wrapper}>
            <h1>Contact</h1>
            <div className={styles.container} container spacing={1}>
                <div className={styles.formBox}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField color="secondary" size="small" label="Name" />
                        <br />
                        <TextField color="secondary" size="small" label="Email" /> <br />
                        <TextField color="secondary" size="small" label="Subject" />
                        <br />
                        <TextField
                            color="secondary"
                            size="small"
                            label="Write Your Message here..."
                            multiline
                            fullWidth={true}
                            rows={4}
                            variant="outlined"
                        />
                        <Button color="secondary" variant="contained">
                            <EmailIcon />
                            <Typography color="primary">Send Mail</Typography>
                        </Button>
                    </form>
                </div>
                <div className={styles.contactDetails}>
                    <div>
                        <div>
                            <EmailIcon />
                            <p>shubhamv430@gmail.com</p>
                        </div>
                        <div>
                            <PhoneIcon />
                            <p>8954686319</p>
                        </div>
                        <div className={styles.iconBox}>
              <IconButton className={styles.linkedIn}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton className={styles.gitHub}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton className={styles.twitter}>
                <TwitterIcon fontSize="large" />
              </IconButton>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
