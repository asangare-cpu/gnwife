import "./comment.css"
import { FaStar } from "react-icons/fa6";

function Comment(){
  return(
    <>
      <h3>Our clients reviews</h3>
      <p>Notes</p>
      <div className="reviews">
        <FaStar size={20} color="yellow"/>
        <FaStar size={20} color="yellow"/>
        <FaStar size={20} color="yellow"/>
        <FaStar size={20} color="yellow"/>
      </div>
      <div className="comment">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </>
  )
}

export default Comment;