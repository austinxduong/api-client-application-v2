/* eslint-disable max-len */
// import styles from './Resty.css';
import React, { Component } from 'react';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
      body: '',
      history: [],
      display: { 'JSON Data': 'Here are your results' }

    }

    render(){

      return (
        <>
          {/* placeholder for when we pass in all of our presentational components */}
        </>
      );
    }
}

//  we are setting up basic stucture of our container, which holds all of states
// now lets connect our "Resty.jsx" container, to our parent component in App.jsx so it renders on the page
