import React from 'react';

import '../../assets/css/pagination.css'

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

//NÃO É GAMBIARRA É MAGICA.
const Pagination = ({ limit, offset, total, setOffset }) => {

  const currentPage = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const fisrt = Math.max(currentPage - MAX_LEFT, 1)


  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  console.log("MAX_ITEMS, pages", MAX_ITEMS, pages);
  return (
    <>
      <section className="B2M-pagination">
        <ul>
          {currentPage !== 1 &&
            <li className="B2M-next-prev-item" onClick={() => onPageChange(currentPage - 1)}><i className="B2M-chevron-left-icon"></i></li>
          }

          {Array.from({ length: Math.min(MAX_ITEMS, pages) })
            .map((_, index) => index + fisrt)
            .map((page) => (<>
              {page <= pages && <li key={page} onClick={() => onPageChange(page)} className={page !== currentPage ? 'B2M-item' : 'B2M-item B2M-active'}>{page}</li>}
            </>))}

          {currentPage !== pages &&
            <li className="B2M-next-prev-item" onClick={() => onPageChange(currentPage + 1)}><i className="B2M-chevron-right-icon"></i></li>
          }

        </ul>
      </section>
    </>
  );
};

export default Pagination;