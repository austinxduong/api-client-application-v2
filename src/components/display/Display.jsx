/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';


const Display = ({ display }) => {
  return (
    <pre className={StyleSheet.Display} data-testid="display">
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

Display.PropTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Display;
