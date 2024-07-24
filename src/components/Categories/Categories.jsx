import s from './styles.module.css'

function Categories({categories, setSelectedCategory, selectedCategory}) {
   return (
      <div className={s.categories}>
         <button onClick={() => setSelectedCategory(null)}
                 className={!selectedCategory ? s.active : s.item}
         >
            All
         </button>
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