import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const BackButton = ({destination = '/'})=>{
    return (
        <div className="flex justify-end ">
            <Link to={destination} className="text-black "><IoChevronBackCircleSharp size={34}/></Link>
        </div>
    )
}

export default BackButton