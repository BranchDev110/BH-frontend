import { useContext } from "react";
import Button from "../../Components/Button";
import Table from "../../Components/Table";
import BanjoContext from "../../Context";
import "../../Styles/overview.css";
import { TABLE_HEADER } from "../../Utils/mockup";

const Overview = () => {
  const { data, setShowModal } = useContext(BanjoContext);
  const handleClick = () => { setShowModal(true) };
  return (
    <div className="container">
      <div className="header">
        <p>Orders</p>
        <Button className="btn btn-main" onClick={handleClick}>New Order</Button>
      </div>
      <div className="content">
        <Table rows={data} columns={TABLE_HEADER}></Table>
      </div>
    </div>
  );
};

export default Overview;
