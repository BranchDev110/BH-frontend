import { COLUMN_BASE_WIDTH } from '../../Utils/mockup';
import '../../Styles/priority.css';

// const priorityText = [
//     "Low", "Medium", "High"
// ]

const Priority = ({priority}) => {
    return (
        <div className="priority-container" style={{flexBasis: `${COLUMN_BASE_WIDTH[1]}px`}}>
            <span className={`priority-badge priority-badge-${priority.toLowerCase()}`}>{priority}</span>
        </div>
    )
}

export default Priority;