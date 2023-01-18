/*import "./singlePost.css"

export default function SinglePost() {
    return (
        <div classNameost="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://media.istockphoto.com/id/607928520/photo/busy-university-library-with-students-and-tutor.jpg?s=612x612&w=0&k=20&c=xCaeWgY8jRqQGjdyhIpu_rGRghmY2kPWF-rvctoEF0k=" alt="" />
                <h1 className="singlePostImg">Lorem ipsum dolor sit amet consectetur, adipisicing</h1>
                singleposttttt
            </div>
        </div>

    )
}
*/
import './singlePost.css';
import Sidebar from "../sidebar/Sidebar";

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://www.insurancejournal.com/app/uploads/2022/11/Metaverse-bigstock-scaled.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Metaverse
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Thanvi  </b></span>
                    <span className='singlePostDate'><b>3 hours ago</b></span>
                </div>
                <p>
                    Imagine yourself sitting in a room, purchasing from your dream store while traveling to a faraway virtual land.
                    This may sound like something out of a fairy tale. But what if we claim, it is happening for real?
                    Join us to deconstruct the world of Metaverse.
                </p>
            </div>
            <Sidebar />
        </div>
    )
}