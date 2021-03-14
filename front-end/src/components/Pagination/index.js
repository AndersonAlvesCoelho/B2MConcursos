import React from 'react';

import '../../assets/css/pagination.css'

const Pagination = ({ postsPerPage, totalPosts, newPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <nav>
    //   <ul className='B2M-p-pagination-center'>
    //     {pageNumbers.map(number => (
    //       <li key={number} className='B2M-p-pagination'>
    //         <a onClick={() => newPage(number)} className={ paginate === number  && "active"} >
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>

    <section className="B2M-pagination">
      <ul>
        <li><a><i className="B2M-chevron-double-left-icon"></i></a></li>
        <li><a><i className="B2M-chevron-left-icon"></i></a></li>
        {pageNumbers.map((number, index) => (
          <li key={index} onClick={() => newPage(number)}  className={paginate === number && "B2M-active"} >
              {(pageNumbers.length - 1) === number ? <i className="B2M-more-alt-icon"></i> : number}
          </li>
        ))}
        <li><a><i className="B2M-chevron-right-icon"></i></a></li>
        <li><a><i className="B2M-chevron-double-right-icon"></i></a></li>
      </ul>
    </section>
  );
};

export default Pagination;