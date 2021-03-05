import React from 'react';

import '../../assets/css/pagination.css'

const Pagination = ({ postsPerPage, totalPosts, newPage,  paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='B2M-p-pagination-center'>
        {pageNumbers.map(number => (
          <li key={number} className='B2M-p-pagination'>
            <a onClick={() => newPage(number)} className={ paginate === number  && "active"} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;