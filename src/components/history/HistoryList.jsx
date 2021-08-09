/* eslint-disable max-len */
import HistoryItem from './HistoryItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryList.css';

const HistoryQueue = ({ history, onClick }) => {
  const historyItems = history.map((item, i) => {
    return (
      <li key={i} onClick={onClick}>
        <HistoryItem method={item.method} url={item.url} id={`${item.url}+${item.method}`} />
      </li>
    );

  });

  return (
    <ul className={styles.History}>
      {historyItems}
    </ul>
  );
};

HistoryQueue.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryQueue;


