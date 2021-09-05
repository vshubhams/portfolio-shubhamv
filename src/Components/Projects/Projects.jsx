import React from "react";
import styles from "./projects.module.css"
// import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    '& h1': {
      color: '#CC4865',
      textAlign: "center"
    }
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // border:"solid blue 1px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // border:"solid red",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  gitHub: {
    marginRight: theme.spacing(1)
  }
}));


export const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects">
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h1>Projects</h1>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {projects.map((item, card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.descrip}
                    </Typography>
                    <div className={styles.techContainer}>
                      {item.techs.map((item) => (
                        <div>{item}</div>
                      ))}
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => { window.open(item.demolink) }} size="small" variant="contained" color="primary">
                      <Typography color="secondary">
                        Demo
                      </Typography>
                    </Button>
                    <Button onClick={() => { window.open(item.gitHub) }} size="small" variant="outlined" color="primary">
                      <GitHubIcon className={classes.gitHub} />
                      <Typography >
                        CODE
                      </Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const projects = [
  {
    title: "Ajio.com",
    image: "https://raw.githubusercontent.com/vshubhams/Ajio-clone/master/screenshots/Screenshot%20(65).png",
    descrip: "Built a front-end web app with two other members to allow users to show products and buy products.",
    gitHub: "https://github.com/vshubhams/Ajio-clone",
    demolink: "http://www.ajioproject.ml/",
    techs: ["HTML","CSS", "JavaScript"]
  },
  {
    title: "Hyannis Plaza Hotel",
    image: "https://raw.githubusercontent.com/vshubhams/Hyannis-Plaza/master/public/screenshots/Screenshot%20(491).png",
    descrip: "Built a front-end web app with two other members to allow users to find and book rooms in hotel Hyannis Plaza.",
    gitHub: "https://github.com/vshubhams/Hyannis-Plaza",
    demolink: "https://hyannisplaza.netlify.app/",
    techs: ["React","Redux", "Material UI","styled-components"]
  },
  {
    title: "AngelList.com",
    image: "https://raw.githubusercontent.com/vshubhams/project-angel/master/Screenshots/landinPage.PNG",
    descrip: "Developed a front-end web app to allow job seekers to find and apply to jobs and recruiters to post new jobs.",
    gitHub: "https://github.com/vshubhams/project-angel",
    demolink: "https://angellist.netlify.app/",
    techs: ["React","json-server","styled-components"]
  }
]