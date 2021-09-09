import styles from "./contact.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import emailjs from "emailjs-com"
import { useState } from "react";

import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(0.7),
            width: "35ch",
        },
    },
    paper: {
        margin: 'auto',
        marginTop: '150px',
        textAlign:"center",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    h6: {
        marginTop: '20px',
        marginBottom: '5px',
        color:"white"
    },
}));

export const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">Email has been sent successfully.</h2>
            <p id="simple-modal-description">We will reply you soon.</p>
            <Button onClick={handleClose} className={classes.h6} variant="contained" color="secondary"><Typography color="primary">OK</Typography></Button>
        </div>
    );


    function sendEmail(e) {
        console.log("shubham")
        e.preventDefault();
        console.log(e.target);
        if (email.length === 0 || name.length === 0) {
            console.log(email.length,name.length)
            return;
        }
        emailjs.sendForm(process.env.REACT_APP_SERVICES_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        handleOpen();
      }

    return (
        <div id="contact" className={styles.wrapper}>
            <h1>Contact</h1>
            <div className={styles.container} container spacing={1}>
                <div className={styles.formBox}>
                    <form onSubmit={sendEmail} className={classes.root} noValidate autoComplete="off">
                        <TextField
                            onChange={(e)=>{setName(e.target.value)}}
                            color="primary" size="small" label="Name" name="name" />
                        <br />
                        <TextField
                            onChange={(e) => { setEmail(e.target.value) }}
                            color="primary" size="small" label="Email" name="email" /> <br />
                        <TextField color="primary" size="small" label="Subject" name="subject" />
                        <br />
                        <TextField
                            color="primary"
                            
                            size="small"
                            name="message"
                            label="Write Your Message here..."
                            multiline
                            fullWidth={true}
                            rows={4}
                            variant="outlined"
                        />
                        <Button type="submit" color="primary" variant="contained">
                            <EmailIcon />
                            <Typography color="secondary">Send Mail</Typography>
                        </Button>
                    </form>
                </div>
                <div className={styles.contactDetails}>
                    <div>
                        <div className={styles.info}>
                            <EmailIcon />
                            <p>shubhamv430@gmail.com</p>
                        </div>
                        <div className={styles.info}>
                            <PhoneIcon />
                            <p>8954686319</p>
                        </div>
                        <div className={styles.info}>
                            <LocationOnIcon />
                            <p>Baghpat, Uttar Pradesh</p>
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
            <Modal open={open} onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    );
};
