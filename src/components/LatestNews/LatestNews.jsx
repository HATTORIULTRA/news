import s from './styles.module.css'
import BannersList from "../BannersList/BannersList.jsx";

function LatestNews({banners, isLoading}) {
   return (
      <section className={s.section}>
         <BannersList banners={banners} isLoading={isLoading} />
      </section>
   );
}

export default LatestNews;