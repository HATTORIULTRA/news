import s from './styles.module.css'
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";

function NewsFilters({filters, changeFilter}) {
   const {data: dataCategories} = useFetch(getCategories);

   return (
      <div className={s.filters}>
         {dataCategories
            ? <Categories categories={dataCategories.categories}
                          setSelectedCategory={(category) => changeFilter('category', category)}
                          selectedCategory={filters.category}/>
            : null}

         <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>

      </div>
   );
}

export default NewsFilters;