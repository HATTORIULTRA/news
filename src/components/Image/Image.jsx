import s from './styles.module.css'

function Image({image}) {
   return (
      <div className={s.wrapper}>
         {
            image
               ? <img src={image} alt="news" className={s.image}/>
               : null
         }
      </div>
   );
}

export default Image;