import Priority from "../Prioirty";
import ThreeDotMenu from "../ThreeDotMenu";
import { COLUMN_BASE_WIDTH } from "../../Utils/mockup";

const TableRow = ({row}) => {
    return (
        <div className="table-row">
            <div className="bold-text" style={{flexBasis: `${COLUMN_BASE_WIDTH[0]}px`}}>{row["memberName"]}</div>
            <Priority priority={row["priority"]}/>
            <div style={{flexBasis: `${COLUMN_BASE_WIDTH[2]}px`}}>{row["orderNumber"]}</div>
            <div className="bold-text" style={{flexBasis: `${COLUMN_BASE_WIDTH[3]}px`}}>{row["team"]}</div>
            <div style={{flexBasis: `${COLUMN_BASE_WIDTH[4]}px`}}>{row["dueDate"]}</div>
            <ThreeDotMenu />
        </div>
    )
}

export default TableRow;