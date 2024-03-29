import styles from "./tech.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    paper: {
    width: "80px",
    height: "80px",
    borderRadius: "8px",
    padding: "10px 20px",
    boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
    justifyContent: "flex-end",
    '&:hover': {
      transform: "scale(1.15)",
      transition:"transform .4s"
    },
    '& p': {
      marginTop:"8px"
    }
  },
  iconButton: {
    '&:hover': {
      background:"none"
    }
  }
}));

export const Technologies = ({ data, title }) => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Grid container className={styles.grid} spacing={2} justifyContent="center" >
        {data.map((el) => (
          <Grid xs={6} sm={4} md={2} item>
            <IconButton className={classes.iconButton}>
              <div className={classes.paper}>
                <img src={el.image} alt="" />
                <p>{el.name}</p>
              </div>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
