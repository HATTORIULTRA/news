import s from './styles.module.css'

function Skeleton({count = 1, type = 'banner', direction = 'column'}) {
   return (
      <>
         {count > 1
            ? (
               <ul className={direction === 'column' ? s.columnList : s.rowList}>
                  {[...Array(count)].map((_, index) => (
                     <li key={index} className={type === 'banner' ? s.banner : s.item}>

                     </li>
                  ))}
               </ul>
            )
            : (
               <li className={type === 'banner' ? s.banner : s.item}>

               </li>
            )}
      </>
   );
}

export default Skeleton;