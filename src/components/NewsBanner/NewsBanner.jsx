import s from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

function NewsBanner({item}) {
   return (
      <div className={s.banner}>
         <Image image={item?.image} />
         <h3 className={s.title}>{item.title}</h3>
         <p className={s.extra}>
            {formatTimeAgo(item.published)} by {item.author}
         </p>
      </div>
   );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;