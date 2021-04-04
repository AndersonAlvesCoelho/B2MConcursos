import React from 'react';

import '../../assets/css/pagination.css'

const Pagination = ({ postsPerPage, totalPosts, newPage, paginate }) => {
  var pageNumbers = [];
  const limitViewNumber = 5
  const totalItem = Math.ceil(totalPosts / postsPerPage)

  for (var i = 1; i <= 5; i++) {
    pageNumbers.push(i)
  }



  return (
    <>
      <section className="B2M-pagination">
        <ul>
          <li onClick={() => newPage(paginate !== 1 ? 1 : paginate)}><i className="B2M-chevron-double-left-icon"></i></li>
          <li onClick={() => newPage(paginate !== 1 ? paginate - 1 : paginate)}><i className="B2M-chevron-left-icon"></i></li>
          {pageNumbers.map((number, index) => (
            <li key={index} onClick={() => newPage(number)} className={paginate === number && "B2M-active"} >
              {number}
            </li>
          ))}
          <li onClick={() => newPage(paginate !== pageNumbers.length ? paginate + 1 : paginate)}><i className="B2M-chevron-right-icon"></i></li>
          <li onClick={() => newPage(totalItem)}><i className="B2M-chevron-double-right-icon"></i></li>
        </ul>
      </section>
    </>
  );
};

export default Pagination;