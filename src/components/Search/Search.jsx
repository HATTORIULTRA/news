import s from './styles.module.css'

function Search({keywords, setKeywords}) {
   return (
      <div className={s.search}>
         <input onChange={e => setKeywords(e.target.value)}
                type="text"
                value={keywords}
                className={s.input}
                placeholder="Javascript"/>
      </div>
   );
}

export default Search;