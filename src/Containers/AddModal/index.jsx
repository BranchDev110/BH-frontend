import { useContext, useState } from "react";
import Button from "../../Components/Button";
import Dropdown from "../../Components/Dropdown";
import BanjoContext from "../../Context";

import "../../Styles/addmodal.css";
import { addData } from "../../Utils/service";

const AddModal = () => {
  const {
    setShowModal,
    data,
    setData,
    currentPage,
    pageRange,
    setTotalCount,
    setTotalPage,
    setPageRange,
  } = useContext(BanjoContext);
  const [formState, setFormState] = useState({
    memberName: "",
    priority: "",
    team: "",
    dueDate: "",
  });
  const validator = () =>
    !!formState.memberName &&
    !!formState.priority &&
    !!formState.team &&
    !!formState.dueDate;
  const handleSubmit = async () => {
    if (validator()) {
      const newData = await addData({
        ...formState,
        orderNumber: Math.floor(Math.random() * 10000),
      });
      const nTotalPage = Math.ceil(newData.totalLen / 10);
      if (currentPage === nTotalPage - 1) {
        setData([...data, newData.data]);
      }
      setTotalPage(nTotalPage);
      setPageRange([
        pageRange[0],
        pageRange[0] + (nTotalPage > 5 ? 4 : nTotalPage),
      ]);
      setTotalCount(newData.totalLen);
      setShowModal(false);
    } else {
      alert("You have to fill all the info before submit.");
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Create a New Order</h1>
          <p>Fill out the required information to create a new order.</p>
        </div>
        <div className="modal-body">
          <form>
            <label>Team Member Name</label>
            <input
              type="text"
              placeholder="Team Member Name..."
              value={formState["memberName"]}
              onChange={(e) =>
                setFormState({ ...formState, memberName: e.target.value })
              }
            />
            <label>Priority</label>
            <Dropdown
              data={["High", "Medium", "Low"]}
              updateData={(data) =>
                setFormState({ ...formState, priority: data })
              }
            />
            <label>Team</label>
            <Dropdown
              data={["Blue", "Red", "Green", "Yellow"]}
              updateData={(data) => setFormState({ ...formState, team: data })}
            />
            <label>Due Date</label>
            <input
              type="date"
              placeholder="Due Date"
              value={formState["dueDate"]}
              onChange={(e) => {
                const data = e.target.value.split("-");
                setFormState({
                  ...formState,
                  dueDate: `${data[1]}/${data[2]}/${data[0]}`,
                });
              }}
            />
            <p>Date format must be mm/dd/yyyy</p>
          </form>
        </div>
        <div className="modal-footer">
          <Button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button className="btn btn-main" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
