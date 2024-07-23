import s from './styles.module.css'

function Pagination({totalPages, currentPage, handleNextPage, handlePageClick, handlePrevPage}) {
   return (
      <div className={s.pagination}>
         <button disabled={currentPage <= 1}
            onClick={handlePrevPage}
            className={s.arrow}>
            {'<'}
         </button>
         <div className={s.list}>
            {[...Array(totalPages)].map((_, index) => {
               return (<button
                  onClick={() => handlePageClick(index + 1)}
                  className={s.pageNumber}
                  disabled={index + 1 === currentPage}
                  key={index}>
                  {index + 1}
               </button>);
            })}
         </div>
         <button disabled={currentPage >= totalPages}
                 onClick={handleNextPage}
                 className={s.arrow}>
            {'>'}
         </button>
      </div>
   );
}

export default Pagination;