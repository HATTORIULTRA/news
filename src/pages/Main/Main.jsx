import s from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";


function Main() {
   const [news, setNews] = useState([]);
   const [categories, setCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState('All');
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = 10;
   const pageSize = 10;

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   }

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   }

   const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
   }

   const fetchNews = async (currentPage) => {
      setIsLoading(true);
      try {
         const response = await getNews({
            page_number: currentPage,
            page_size: pageSize,
            category: selectedCategory === 'All' ? null : selectedCategory
         });
         setNews(response.news);
         setIsLoading(false);
      } catch (e) {
         console.log(e)
      }
   }

   const fetchCategories = async () => {
      try {
         const response = await getCategories();
         setCategories(["All", ...response.categories]);
      } catch (e) {
         console.log(e)
      }
   }

   useEffect(() => {
      fetchCategories()
   }, []);

   useEffect(() => {
      fetchNews(currentPage);
   }, [currentPage, selectedCategory]);



   return (
      <main className={s.main}>
         <Categories categories={categories}
                     setSelectedCategory={setSelectedCategory}
                     selectedCategory={selectedCategory} />
         {news.length > 0 && !isLoading
            ? <NewsBanner item={news[0]}/>
            : <Skeleton count={1} type={'banner'}/>}

         <Pagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}/>

         {!isLoading
            ? <NewsList news={news}/>
            : <Skeleton count={10} type={'item'}/>
         }

         <Pagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={totalPages}/>
      </main>
   );
}

export default Main;