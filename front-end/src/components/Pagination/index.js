import React from 'react';

import '../../assets/css/pagination.css'

const Pagination = ({ postsPerPage, totalPosts, newPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="B2M-pagination">
      <ul>
        <li onClick={() => newPage(paginate !== 1 ? 1 : paginate)}><i className="B2M-chevron-double-left-icon"></i></li>
        <li onClick={() => newPage(paginate !== 1 ? paginate - 1 : paginate)}><i className="B2M-chevron-left-icon"></i></li>
        {pageNumbers.map((number, index) => (
          <li key={index} onClick={() => newPage(number)} className={paginate === number && "B2M-active"} >
            {/* {((pageNumbers.length - 1) === number) ? <i className="B2M-more-alt-icon"></i> : number} */}
            {number}
          </li>
        ))}
        <li onClick={() => newPage(paginate !== pageNumbers.length ? paginate + 1 : paginate )}><i className="B2M-chevron-right-icon"></i></li>
        <li onClick={() => newPage(pageNumbers.length)}><i className="B2M-chevron-double-right-icon"></i></li>
      </ul>
    </section>
  );
};

export default Pagination;