import s from './styles.module.css'
import LatestNews from "../../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.jsx";


function Main() {
   return (
      <main className={s.main}>
         <LatestNews/>
         <NewsByFilters/>
      </main>
   );
}

export default Main;