/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ method, onChange }) => {
  return (
    <div>
      <input type="radio" id="get" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />
      <label htmlFor="get"> GET </label>

      <input type="radio" id="post" name="method" value="POST" checked={method === 'POST'} onChange={onChange} /> 
      <label htmlFor="post"> POST </label>

      <input type="radio" id="put" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />
      <label htmlFor="put"> PUT </label>

      <input type="radio" id="patch" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
      <label htmlFor="patch"> PATCH </label>

      <input type="radio" id="delete" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />
      <label htmlFor="delete"> DELETE </label>
    </div>
  );
};

Buttons.prototypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Buttons;

// just created our child component, for buttons. this will get used in our "BODY" parent component. 
