const Pagination = ({ pages, total, page, setPage }) => {
  return (
    <nav
      className="pagination is-centered mx-6"
      role="navigation"
      aria-label="pagination"
    >
      <button
        className="pagination-previous"
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
        }}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        className="pagination-next"
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        disabled={page >= pages - 1}
      >
        Next page
      </button>
      {/* <ul className="pagination-list">
        <li>
          <button
            onClick={() => setPage(0)}
            className="pagination-link"
            aria-label="Goto page 1"
          >
            1
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">...</span>
        </li>
        <li>
          <button
            className="pagination-link is-current"
            aria-label="Current Page"
          >
            {page + 1}
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">...</span>
        </li>
        <li>
          <button
            onClick={() => setPage(pages)}
            className="pagination-link"
            aria-label="Goto final Page"
          >
            {pages}
          </button>
        </li>
      </ul> */}
    </nav>
  );
};

export default Pagination;
