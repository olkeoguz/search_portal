import React from 'react';
import SingleResult from './SingleResult';
import './results.scss';
import { useHistory } from 'react-router-dom';

const Results = ({ suggestions }) => {
  const history = useHistory();

  return (
    <div className={suggestions.length ? 'results active' : 'results'}>
      {suggestions.length > 0 &&
        suggestions.slice(0, 3).map((suggestion, index) => (
          <div className='singleRes' key={index}>
            <SingleResult result={suggestion} />
          </div>
        ))}
      {suggestions.length > 3 && (
        <button className='showMore' onClick={() => history.push('/list')}>
          Show more
        </button>
      )}
    </div>
  );
};

export default Results;
