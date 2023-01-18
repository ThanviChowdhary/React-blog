

import { Link } from "react-router-dom"
import "./post.css"

export default function post() {
    return (
        <div>
            <div className="post">
                <img className="postImg" src="https://media.istockphoto.com/id/607928520/photo/busy-university-library-with-students-and-tutor.jpg?s=612x612&w=0&k=20&c=xCaeWgY8jRqQGjdyhIpu_rGRghmY2kPWF-rvctoEF0k=" alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">#tech</span>
                        <span className="postCat">#cultrals</span>
                    </div>
                    <span className="postTitle"> <Link className="link" to="/single"> Web3 event this weekend!</Link></span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
            </div>
            <span className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                A aut expedita nulla hic asperiores, unde sapiente pariatur itaque nostrum assumenda. Repellendus eum non explicabo neque suscipit magni.
                Consectetur, sint doloribus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, error.
                Doloribus, cumque ab! Amet molestias modi quaerat reprehenderit? Beatae quibusdam, ipsam odit deserunt accusamus accusantium deleniti.
                Aliquam iste molestiae accusantium?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, odio vitae aut voluptas id blanditiis vel nam odit molestiae deserunt rem officiis aspernatur architecto ab impedit quod qui ratione.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate sapiente id animi et rerum porro ut aperiam? Corporis quidem eum assumenda nam harum obcaecati laboriosam explicabo accusamus natus delectus!Loremlorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti tenetur, ut molestias dolorem ullam modi quod hic ipsam repellat, quas quia ipsum reprehenderit, delectus tempora? At culpa soluta optio vel.</span>

        </div>
    )
}
