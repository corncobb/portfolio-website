import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import {
  CardActionArea,
  CardMedia,
  Card,

  CardContent,

  Typography,
  Grid,

} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    marginRight: theme.spacing(1),
    marginTop: 10
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const MaterialCard = props => {
  
  const { className, project, ...rest } = props;
  
  const limitCharacters = (title, limit = 25) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(' ')}...`
    }
    return title;
  }

  const classes = useStyles();

  return (
    <div>
      <Link underline='none' component={RouterLink} to={{
        pathname: `/portfolio/${project.urlTitle}`,
        state: {
          project: project
      }}}>

        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={project.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {limitCharacters(project.title)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {limitCharacters(project.description, 200)}
              </Typography>

              <Grid
                container
                justify="space-between"
              >
                <Grid
                  item
                >
                  {project.stack.map((tag, index) => (
                    <Chip className={classes.margin} key={index} label={tag} size="small" color="primary" />
                  ))}

                </Grid>
              </Grid>

            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

MaterialCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default MaterialCard;
