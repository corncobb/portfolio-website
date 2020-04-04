import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { MaterialCard } from '../components'
import { v4 as uuid} from 'uuid';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
    },
    itemsContainer: {
        margin: "auto",
        width: "90%"
    }
}))

const products =  [
  {
    id: uuid(),
    title: 'Intro to the LendU Portal #1',
    tags: ['tutorial'],
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab48be3042863478ea7d28e/file-xiivbh5WpJ.png',
    totalViews: '1023',
    dated: 'September 14, 2019'
  },
  {
    id: uuid(),
    title: 'Intro to the LendU Portal #2',
    tags: ['tutorial'],
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab48be3042863478ea7d28e/file-xiivbh5WpJ.png',
    totalViews: '1023',
    dated: 'September 14, 2019'
  },
  {
    id: uuid(),
    title: 'Intro to the LendU Portal #3',
    tags: ['tutorial'],
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab48be3042863478ea7d28e/file-xiivbh5WpJ.png',
    totalViews: '1023',
    dated: 'September 14, 2019'
  },
  {
    id: uuid(),
    title: 'Information Regarding New Employee Benefits - LendU',
    tags: ['legal', 'employees', 'update'],
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: 'https://images.template.net/wp-content/uploads/2015/05/free-legal-forms.jpg?width=480',
    totalViews: '1023',
    dated: 'September 14, 2019'
  },
  {
    id: uuid(),
    title: 'How to Import Employees into the LendU Portal',
    tags: ['tutorial'],
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab48be3042863478ea7d28e/file-xiivbh5WpJ.png',
    totalViews: '1023',
    dated: 'September 14, 2019'
  },
  
];

const Portfolio = () => {
    const classes = useStyles()
    return (
      <div className={classes.mainContainer}>
        <Grid
          container
          spacing={10}
          className={classes.itemsContainer}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <MaterialCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  
export default Portfolio;