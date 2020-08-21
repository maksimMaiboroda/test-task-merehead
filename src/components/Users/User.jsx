import React, { useEffect } from "react";

import styles from "./Users.module.scss";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogoComponent from "../common/LogoComponent/LogoComponent";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

let User = ({ id, name, surname, desc, userDelete, requestUsers }) => {
  const classes = useStyles();

  const Dell = (id) => {
    userDelete(id);
    setTimeout(() => {
      requestUsers();
    }, 1000);
  };

  return (
    <Card className={styles.user}>
      <CardActionArea>
        <div className={classes.UserLogo}>
          <LogoComponent className={classes.UserLogo} />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {surname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={Dell.bind(this, id)} size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Сhange
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
