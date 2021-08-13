import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './PaginationBar.module.css';

function PaginationBar({ page, total, handlePageChange }) {
  return (
    <div className={s.pagination_wrapper}>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={page}
        itemsCountPerPage={1}
        totalItemsCount={total}
        pageRangeDisplayed={total > 5 ? 5 : total}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationBar;
