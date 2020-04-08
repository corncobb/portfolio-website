import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { MaterialCard } from '../components'
import projects from '../assets/data/Projects'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233",
  },
  itemsContainer: {
    margin: "auto",
    width: "90%"
  }
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <div className={classes.mainContainer}>
      <Grid
        container
        spacing={5}
        className={classes.itemsContainer}
      >
        {projects.map(project => (
          <Grid
            item
            key={project.urlTitle}
            lg={4}
            md={6}
            xs={12}
          >
            <MaterialCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;