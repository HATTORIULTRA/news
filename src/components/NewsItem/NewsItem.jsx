import s from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";

function NewsItem({item}) {
   return (
      <li className={s.item}>
         <div className={s.wrapper} style={{backgroundImage: `url(${item.image})`}}>

         </div>
         <div className={s.info}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.extra}>
               {formatTimeAgo(item.published)} by {item.author}
            </p>
         </div>
      </li>
   );
}

export default NewsItem;