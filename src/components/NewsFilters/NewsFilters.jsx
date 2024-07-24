import s from './styles.module.css'
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import Slider from "../Slider/Slider.jsx";

function NewsFilters({filters, changeFilter}) {
   const {data: dataCategories} = useFetch(getCategories);

   return (
      <div className={s.filters}>
         {dataCategories
            ? <Slider step={100}>
               <Categories categories={dataCategories.categories}
                           setSelectedCategory={(category) => changeFilter('category', category)}
                           selectedCategory={filters.category}/>
            </Slider>
            : null}

         <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>

      </div>
   );
}

export default NewsFilters;