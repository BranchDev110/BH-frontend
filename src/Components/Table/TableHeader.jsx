import { COLUMN_BASE_WIDTH } from "../../Utils/mockup";

const TableHeader = ({data}) => {
    return (
        <div className="table-header">
            {
                data.map((item, index) => <div key={`table-header-${index}`} style={{flexBasis: `${COLUMN_BASE_WIDTH[index]}px`}}>{item}</div>)
            }
        </div>
    )
}

export default TableHeader;