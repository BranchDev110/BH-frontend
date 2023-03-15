import TableRow from "./TableRow";

const TableBody = ({data}) => {
    return (
        <div className="table-body">
            {
                data.map((item, index) => <TableRow row={item} key={index}></TableRow>)
            }
        </div>
    )
}

export default TableBody;