import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { MaterialCard } from '../components'
import img from '../assets/images/coding-background-2-min.jpg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233",
  },
  itemsContainer: {
    margin: "auto",
    width: "90%"
  }
}))

const projects = [
  {
    title: 'Project 1',
    urlTitle: 'project-1',
    stack: ['C++', "JavaScript", "GraphQL"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: img,
    started: 'September 14, 2019',
    status: 'Completed', // completed, started, in-progress
    sourceCode: '',
    liveDemo: ''
  },
  {
    title: 'Project 2',
    urlTitle: 'project-2',
    stack: ['C++', "JavaScript", "GraphQL"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: img,
    started: 'September 14, 2019',
    status: 'Completed', // completed, started, in-progress
    sourceCode: '',
    liveDemo: ''
  },
  {
    title: 'Project 3',
    urlTitle: 'project-3',
    stack: ['C++', "JavaScript", "GraphQL"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: img,
    started: 'September 14, 2019',
    status: 'Completed', // completed, started, in-progress
    sourceCode: '',
    liveDemo: ''
  },
  {
    title: 'Project 4',
    urlTitle: 'project-4',
    stack: ['C++', "JavaScript", "GraphQL"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: img,
    started: 'September 14, 2019',
    status: 'Completed', // completed, started, in-progress
    sourceCode: '',
    liveDemo: ''
  },
];

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