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
import emailjs from "emailjs-com"

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

    function sendEmail(e) {
        console.log("shubham")
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICES_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      }

    return (
        <div id="contact" className={styles.wrapper}>
            <h1>Contact</h1>
            <div className={styles.container} container spacing={1}>
                <div className={styles.formBox}>
                    <form onSubmit={sendEmail} className={classes.root} noValidate autoComplete="off">
                        <TextField color="secondary" size="small" label="Name" name="name" />
                        <br />
                        <TextField color="secondary" size="small" label="Email" name="email" /> <br />
                        <TextField color="secondary" size="small" label="Subject" name="subject" />
                        <br />
                        <TextField
                            color="secondary"
                            size="small"
                            name="message"
                            label="Write Your Message here..."
                            multiline
                            fullWidth={true}
                            rows={4}
                            variant="outlined"
                        />
                        <Button type="submit" color="secondary" variant="contained">
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
                            <IconButton onClick={() => { window.open("https://www.linkedin.com/in/vshubhams/") }} className={styles.linkedIn}>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <IconButton onClick={() => { window.open("https://github.com/vshubhams") }} className={styles.gitHub}>
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <IconButton onClick={() => { window.open("https://twitter.com/shubhamv_") }} className={styles.twitter}>
                                <TwitterIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
