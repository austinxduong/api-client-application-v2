/* eslint-disable max-len */
import styles from './Resty.css';
// import { json } from 'msw/lib/types/context';
import React, { Component } from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import HistoryQueue from '../components/history/historyList';
import { fetchApi } from '../services/fetchRequest';
import Display from '../components/display/Display';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
      json: '',
      history: [],
      display: { 'JSON Data': 'Here are your results' }

    }

    componentDidMount() {
      const historyLocalStorage = JSON.parse(localStorage.getItem('history'));

      if(historyLocalStorage) {
        this.setState({ history: historyLocalStorage });
      }
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = (e) => {
      const { url, method, json } = this.state;
      const key = `${url}+${method}+${json}`;

      e.preventDefault();
      this.fetch();

      if(history.filter(item => item.key === key).length > 0 || method === '') return;
      this.setState(state => ({

        history: [...state.history, {
          url: state.url,
          method: state.method,
          json: state.json,
          key: `${state.url}+${state.method}+${state.json}}`

        }]
      }));

      this.setState(state => {
        localStorage.setItem('history', JSON.stringify(state.history));
      });
    }

      handleClick = event => {
        const { id } = event.target;
        let result;

        this.state.history.forEach(item => {
          if(item.key === id) {
            result = item;
          }
        });

        this.setState({
          url: result.url,
          method: result.method,
          json: result.json
        });
      }

      fetch = () => {
        const { url, method, json } = this.state;
        return fetchApi(url, method, json)
          .then(res => this.setState({ display: res }));
    
      }


      render(){

        const { url, method, json, history, display } = this.state;

        return (
          <>
            {/* passing in our first presentational component, dont forget to also import the file */}
            {/* // we can go ahead and check our local browser, and RESTless should render on the hompeage now */}
            <Header />
            <section className={styles.Resty}>
              {/* <HistoryQueue history={history} onClick={this.handleClick} /> */}
      
              <div>
                <Body
                  url={url}
                  method={method}
                  json={json} 
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange} />
                <Display display={display} />
              </div>
            </section>
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
