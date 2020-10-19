import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  const pageNumbers = [];
  if (totalPages > 0) {
    const first = Math.max(Math.ceil(currentPage / 10), currentPage - 5);
    const last = Math.min(first + 10, totalPages);

    for (let i = first; i <= last; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div>
      {totalPages > 0 && (
        <div className='pagination'>
          <div className='pagination__text'>
            Page {currentPage} of {totalPages}
          </div>
          <div className='pagination__nav'>
            <ul className='pagination__container'>
              <li key='first' className='pagination__item'>
                <div
                  onClick={() => setCurrentPage(1)}
                  className='pagination__link'
                  disabled={currentPage === 1}
                >
                  {'<<'}
                </div>
              </li>
              <li key='previous' className='pagination__item'>
                <div
                  onClick={() =>
                    currentPage > 1 ? setCurrentPage(currentPage - 1) : null
                  }
                  className='pagination__link'
                  disabled={currentPage === 1}
                >
                  {'<'}
                </div>
              </li>
              {pageNumbers.map((number) =>
                number !== currentPage ? (
                  <li key={number} className='pagination__item'>
                    <div
                      onClick={() => setCurrentPage(number)}
                      className='pagination__link'
                    >
                      {number}
                    </div>
                  </li>
                ) : (
                  <li key={number} className='pagination__selected'>
                    <div
                      onClick={() => setCurrentPage(number)}
                      className='pagination__link'
                    >
                      {number}
                    </div>
                  </li>
                )
              )}
              <li key='next' className='pagination__item'>
                <div
                  onClick={() =>
                    currentPage < totalPages
                      ? setCurrentPage(currentPage + 1)
                      : null
                  }
                  className='pagination__link'
                  disabled={currentPage === totalPages}
                >
                  {'>'}
                </div>
              </li>
              <li key='last' className='pagination__item'>
                <div
                  onClick={() => setCurrentPage(totalPages)}
                  className='pagination__link'
                  disabled={currentPage === totalPages}
                >
                  {'>>'}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {totalPages === 0 && <h1>No results found!</h1>}
    </div>
  );
};

export default Pagination;
