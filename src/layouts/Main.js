import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../components';


const Main = props => {
  
  return (
    <div>
      <NavBar />
      <main >
        {props.children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
