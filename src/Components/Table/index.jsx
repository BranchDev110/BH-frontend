import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import '../../Styles/table.css';
import TableFooter from "./TableFooter";

const Table = ({rows, columns}) => {
    return (
        <div className="table-container">
            <TableHeader data={columns}>
            </TableHeader>
            <TableBody data={rows}>
            </TableBody>
            <TableFooter>
            </TableFooter>
        </div>
    )
}

export default Table;