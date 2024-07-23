import s from './styles.module.css'

function Categories({categories, setSelectedCategory, selectedCategory}) {
   return (
      <div className={s.categories}>
         {categories.map(category => {
            return (
               <button onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? s.active : s.item}
                  key={category}>
                  {category}
               </button>
            )
         })}
      </div>
   );
}

export default Categories;