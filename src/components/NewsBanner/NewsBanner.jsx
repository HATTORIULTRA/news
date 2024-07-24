import s from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";

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

export default NewsBanner;