import s from './styles.module.css'
import {forwardRef} from "react";

const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
   return (
      <div ref={ref} className={s.categories}>
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
});

Categories.displayName = 'Categories';

export default Categories;