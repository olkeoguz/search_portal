import { useContext, useState } from 'react';
import SingleResult from '../components/SingleResult';
import { ResultListContext } from '../context/ResultList';
import logo from '../assets/jpg1.png';
import './list.scss';
import { useHistory } from 'react-router-dom';
import Pagination from '../components/Pagination';
import orderIcon from '../assets/iconFinder.png';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(6);

  const { text, suggestions, textChangedHandler, setSortOption } =
    useContext(ResultListContext);

  const history = useHistory();

  const totalNum = suggestions.length;

  const indexOfLastResult = currentPage * numPerPage;
  const indexOfFirstResult = indexOfLastResult - numPerPage;
  const currentResults = suggestions.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortHandler = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <div className='list'>
      <img src={logo} alt='tesodev' onClick={() => history.push('/')} />
      <div className='searchContainer'>
        <input
          type='text'
          placeholder='Search'
          value={text}
          onChange={(e) => textChangedHandler(e.target.value)}
        />
        <button className='search'>Search</button>

        {suggestions.length > 0 && (
          <div className='orderBy'>
            <img className='orderIcon' src={orderIcon} alt='orderIcon' />
            <span>Order By</span>
            <div className='options'>
              <span onClick={() => sortHandler('nameAsc')}>Name ascending</span>
              <span onClick={() => sortHandler('nameDesc')}>
                Name descending
              </span>
              <span onClick={() => sortHandler('yearAsc')}>Year ascending</span>
              <span onClick={() => sortHandler('yearDesc')}>
                Year descending
              </span>
            </div>
          </div>
        )}

        <div className='results'>
          {currentResults.map((res, index) => (
            <div className='singleRes' key={index}>
              <SingleResult result={res} />
            </div>
          ))}
        </div>
        <Pagination
          numPerPage={numPerPage}
          totalNum={totalNum}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default List;
