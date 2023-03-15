import { useContext } from "react";
import BanjoContext from "../../Context";

const TableFooter = () => {
  const { pageRange, setPageRange, currentPage, setCurrentPage, totalPage, totalCount } =
    useContext(BanjoContext);
  const pageLeft = () => {
    if (currentPage !== 0) {
      if (currentPage === pageRange[0]) {
        setPageRange([pageRange[0] - 1, pageRange[1] - 1]);
      }
      setCurrentPage(currentPage - 1);
    }
  };
  const pageRight = () => {
    if (currentPage !== totalPage - 1) {
      if (currentPage === pageRange[1]) {
        setPageRange([pageRange[0] + 1, pageRange[1] + 1]);
      }
      setCurrentPage(currentPage + 1);
    }
  };
  const clickItem = (index) => {
    setCurrentPage(index - 1);
  };

  return (
    <div className="table-footer">
      <div className="table-footer-result">
        {`Showing 10 items out of ${totalCount} results found`}
      </div>
      <div className="table-footer-pagination">
        <ul>
          <li
            onClick={pageLeft}
            className={`${
              currentPage === 0 && "pagination-disable-item"
            } pagination-item`}
          >{`<`}</li>
          {Array(totalPage > 5 ? 5 : totalPage)
            .fill(0)
            .map((_, ind) => ind + pageRange[0] + 1)
            .map((item) => (
              <li
                key={`pagination-item-${item}`}
                className={`${
                  item === currentPage + 1 && "pagination-active-item"
                } pagination-item`}
                onClick={() => clickItem(item)}
              >
                {item}
              </li>
            ))}
          <li
            onClick={pageRight}
            className={`${
              currentPage === totalPage - 1 && "pagination-disable-item"
            } pagination-item`}
          >{`>`}</li>
        </ul>
      </div>
    </div>
  );
};

export default TableFooter;
