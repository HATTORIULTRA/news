import s from './styles.module.css'
import {formatDate} from "../../helpers/formatDate.js";

function Header(props) {
   return (
      <header className={s.header}>
         <h1 className={s.title}>News Reactify</h1>
         <p className={s.date}>{formatDate(new Date())}</p>
      </header>
   );
}

export default Header;