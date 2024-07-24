import s from './styles.module.css'
import React, {useRef} from "react";


function Slider({children, step = 150}) {
   const sliderRef = useRef(null);
   function scrollLeft() {
      sliderRef.current.scrollLeft -= step;
   }
   function scrollRight() {
      sliderRef.current.scrollLeft += step;
   }
   return (
      <div className={s.slider}>
         <button onClick={scrollLeft} className={s.arrow}>{`<`}</button>
         {React.cloneElement(children, {ref: sliderRef})}
         <button onClick={scrollRight} className={s.arrow}>{`>`}</button>
      </div>
   );
}

export default Slider;