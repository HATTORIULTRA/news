import s from './styles.module.css'
import BannersList from "../BannersList/BannersList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getLatestNews} from "../../api/apiNews.js";

function LatestNews() {
   const {data, isLoading} = useFetch(getLatestNews)

   return (
      <section className={s.section}>
         <BannersList banners={data && data.news} isLoading={isLoading} />
      </section>
   );
}

export default LatestNews;