import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


export const MyTask = ({text, updatingInput, deleteDay}) => {

       return(
        <div className="task">
            <p>{text}</p>
            <div className="icons">
            <CiEdit onClick={updatingInput}/>
            <MdDelete onClick={deleteDay}/>
            </div>
        </div>
    )
}