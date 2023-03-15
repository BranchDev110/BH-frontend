import { COLUMN_BASE_WIDTH } from "../../Utils/mockup";

const ThreeDotMenu = () => {
    return (
        <div className="three-dot-menu" style={{flexBasis: `${COLUMN_BASE_WIDTH[5]}px`, textAlign: 'right'}}>
            <svg width="4" height="18">
                <circle cx="2" cy="2" r="2" fill="#718096"></circle>
                <circle cx="2" cy="9" r="2" fill="#718096"></circle>
                <circle cx="2" cy="16" r="2" fill="#718096"></circle>
            </svg>
        </div>
    )
}

export default ThreeDotMenu;