import React from 'react';

import '../../assets/css/pagination.css'

const MAX_ITEM = 5;
const MAX_LEFT = (MAX_ITEM - 1) / 2;

//NÃO É GAMBIARRA E MAGICA.
const Pagination = ({ limit, offset, total, setOffset }) => {

  const currentPage = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const fisrt = Math.max(currentPage - MAX_LEFT, 1)


  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }
  return (
    <>
      <section className="B2M-pagination">
        <ul>

          {currentPage !== 1 && <li onClick={() => onPageChange(currentPage - 1)}><i className="B2M-chevron-left-icon"></i></li>}

          {Array.from({ length: Math.min(MAX_ITEM, pages) })
            .map((_, index) => index + fisrt)
            .map((page) => (<>
              {page <= pages && <li key={page} onClick={() => onPageChange(page)} className={page === currentPage && 'B2M-active'}>{page}</li>}
            </>))}

          {currentPage !== pages && <li onClick={() => onPageChange(currentPage + 1)}><i className="B2M-chevron-right-icon"></i></li>}

        </ul>
      </section>
    </>
  );
};

export default Pagination;