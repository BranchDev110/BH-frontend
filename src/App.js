import "./App.css";
import { useState, useEffect } from "react";
import { fetchPageData } from "./Utils/service";
import Overview from "./Containers/Overview";
import BanjoContext from "./Context";
import AddModal from "./Containers/AddModal";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageRange, setPageRange] = useState([0, 0]);
  const [totalCount, setTotalCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const {data, totalLen} = await fetchPageData(currentPage);
      const totalPage = Math.ceil(totalLen / 10);
      setData(data);
      setCurrentPage(currentPage);
      setTotalPage(totalPage);
      setPageRange([pageRange[0], pageRange[0] + (totalPage > 5 ? 4 : totalPage)]);
      setTotalCount(totalLen);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className="App">
      <BanjoContext.Provider
        value={{
          data,
          setData,
          currentPage,
          setCurrentPage,
          totalPage,
          setTotalPage,
          pageRange,
          setPageRange,
          totalCount,
          setTotalCount,
          setShowModal
        }}
      >
        <Overview></Overview>
        {
          showModal && <AddModal />
        }
      </BanjoContext.Provider>
    </div>
  );
}

export default App;
