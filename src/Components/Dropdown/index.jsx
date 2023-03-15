import { useState } from "react";
import "../../Styles/dropdown.css";

const Dropdown = ({ data, updateData }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen(!isListOpen);
  };

  const handleClickItem = (index) => {
    setIsListOpen(!isListOpen);
    setCurrentIndex(index);
    updateData(data[index]);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={handleClick}>
        <p>{currentIndex === -1 ? "Select Item" : data[currentIndex]}</p>
        <div
          className={`dropdown-arrow ${
            isListOpen ? "dropdown-arrow-up" : "dropdown-arrow-down"
          }`}
        ></div>
      </div>
      {isListOpen && (
        <div className="dropdown-list">
          <ul>
            {data.map((item, index) => (
              <li
                key={`${item}-${index}`}
                onClick={() => handleClickItem(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
