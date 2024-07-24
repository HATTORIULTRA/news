import s from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";


function Main() {
   const {filters, changeFilter} = useFilters({
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: '',
   });

   const debouncedKeywords = useDebounce(filters.keywords, 1500);

   const {data, isLoading} = useFetch(getNews, {
      ...filters,
      keywords: debouncedKeywords,
   })

   const {data: dataCategories} = useFetch(getCategories)

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
      <main className={s.main}>
         {dataCategories
            ? <Categories categories={dataCategories.categories}
                          setSelectedCategory={(category) => changeFilter('category', category)}
                          selectedCategory={filters.category}/>
            : null}

         <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>

         <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]}/>

         <Pagination
            currentPage={filters.page_number}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}/>

         <NewsList isLoading={isLoading} news={data?.news}/>

         <Pagination
            currentPage={filters.page_number}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}/>
      </main>
   );
}

export default Main;