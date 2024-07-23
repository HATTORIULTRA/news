import s from './styles.module.css'
import NewsItem from "../NewsItem/NewsItem.jsx";

function NewsList({news}) {
   return (
      <ul className={s.list}>
         {news.map(item => {
            return <NewsItem key={item.id} item={item}/>
         })}
      </ul>
   );
}

export default NewsList;