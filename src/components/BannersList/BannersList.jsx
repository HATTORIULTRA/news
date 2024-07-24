import s from './styles.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import NewsBanner from "../NewsBanner/NewsBanner.jsx";

function BannersList({banners}) {
   return (
      <ul className={s.banners}>
         {banners?.map(banner => {
            return (
               <NewsBanner key={banner.id} item={banner}/>
            )
         })}
      </ul>
   );
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton;