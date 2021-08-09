/* eslint-disable max-len */
import styles from './Body.css';
import React from 'react';
import PropTypes from 'prop-types';
import Buttons from 'prop-types';


const Body = ({ url, method, json, onSubmit, onChange }) => {

  return (
    <section className={styles.Body}>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} onChange={onChange} />
        <section>
          <Buttons method={method} onChange={onChange} />
          <button>Process</button>
        </section>
        <textarea placeholder=" RAW JSON" name="json" value={json} onChange={onChange}></textarea>
      </form>
    </section>
  );
};

Body.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Body;

// on lines 15, we are passing our "method" and "onChange" states, that we defined in our container, into the Buttons child component
// now that we passed our child component "Buttons" into the parent component "Body", lets wire in our Body component into our high level container
