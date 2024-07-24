
import Pagination from "../Pagination/Pagination.jsx";


function PaginationWrapper({top, bottom, children, ...paginationProps}) {
   return (
      <>
         {top && <Pagination {...paginationProps} />}
         {children}
         {bottom && <Pagination {...paginationProps} />}
      </>
   );
}

export default PaginationWrapper;