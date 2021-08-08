/* eslint-disable max-len */
// import styles from './Resty.css';
// import { json } from 'msw/lib/types/context';
import React, { Component } from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
      json: '',
      history: [],
      display: { 'JSON Data': 'Here are your results' }

    }

    render(){

      const { url, method, json } = this.state;

      return (
        <>
          {/* passing in our first presentational component, dont forget to also import the file */}
          {/* // we can go ahead and check our local browser, and RESTless should render on the hompeage now */}
          <Header />
          <div>
            <Body
              url={url}
              method={method}
              json={json} />
          </div>
        </>
      );
    }
}

//  we are setting up basic stucture of our container, which holds all of states
// now lets connect our "Resty.jsx" container, to our parent component in App.jsx so it renders on the page
// after we connect, ACP. Then we will create our first Header (aka presentational) component
// then, we will connect our Header presentational component in this file (our container)
// ACP once completed
// Now, we just repeat the same method. Except... we will create buttons next!
