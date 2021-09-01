import React from "react";
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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(8, 0, 6),
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
}));


export const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects">
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {projects.map((item,card) => (
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
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Demo
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
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
        image:"https://raw.githubusercontent.com/vshubhams/Ajio-clone/master/screenshots/Screenshot%20(65).png",
        descrip:"This is Description of the project. Here I will describe the project."
    },
    {
        title: "AngelList.com",
        image:"https://raw.githubusercontent.com/vshubhams/project-angel/master/Screenshots/landinPage.PNG",
        descrip:"This is Description of the project. Here I will describe the project."
    },
    {
        title: "Ajio.com",
        image:"https://raw.githubusercontent.com/vshubhams/Ajio-clone/master/screenshots/Screenshot%20(65).png",
        descrip:"This is Description of the project. Here I will describe the project."
    },
    {
        title: "AngelList.com",
        image:"https://raw.githubusercontent.com/vshubhams/project-angel/master/Screenshots/landinPage.PNG",
        descrip:"This is Description of the project. Here I will describe the project."
    }
]