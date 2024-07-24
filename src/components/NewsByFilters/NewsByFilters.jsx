import s from './styles.module.css'
import Pagination from "../Pagination/Pagination.jsx";
import {TOTAL_PAGES} from "../../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

function NewsByFilters({filters, changeFilter, isLoading, news}) {

   const handleNextPage = () => {
      if (filters.page_number < TOTAL_PAGES) {
         changeFilter('page_number', filters.page_number + 1);
      }
   }

   const handlePrevPage = () => {
      if (filters.page_number > 1) {
         changeFilter('page_number', filters.page_number - 1);
      }
   }

   const handlePageClick = (pageNumber) => {
      changeFilter('page_number', pageNumber);
   }

   return (
      <section className={s.section}>
         <NewsFilters changeFilter={changeFilter} filters={filters} />

         <Pagination
            currentPage={filters.page_number}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}/>

         <NewsList isLoading={isLoading} news={news}/>

         <Pagination
            currentPage={filters.page_number}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}/>
      </section>
   );
}

export default NewsByFilters;