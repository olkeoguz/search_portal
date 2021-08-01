import './pagination.scss';

const Pagination = ({ numPerPage, totalNum, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNum / numPerPage); i++) {
    pageNumbers.push(i);
  }

  if(pageNumbers.length > 5) {
      pageNumbers.splice((pageNumbers.length / 2) -1, 2, '...' )
  }

  return (
    <div className='pagination'>
      {currentPage !== 1 && (
        <button onClick={() => paginate(currentPage - 1)}>Previous</button>
      )}
      <ul className='paginationList'>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === currentPage ? 'pageNum active' : 'pageNum'}
            onClick={() => paginate(number)}
          >
            <span className='pageLink'>{number}</span>
          </li>
        ))}
      </ul>
      {currentPage !== Math.floor(totalNum / numPerPage + 1) && (
        <button onClick={() => paginate(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
