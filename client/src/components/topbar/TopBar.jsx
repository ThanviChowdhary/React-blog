import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topleft">
                <i className="topicons fa-solid fa-house"><Link className="link " to="/"> HOME</Link></i>
                <i className="topicns fa-solid fa-address-card"> <Link className="link" to="/about"> ABOUT</Link></i>
                <i className="topicons fa-solid fa-hashtag"><Link className="link" to="/write">MY WRITINGS</Link></i>




            </div>
            <div className="topcenter">

                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQGQxEHObPdKPw/profile-displayphoto-shrink_800_800/0/1521378950303?e=2147483647&v=beta&t=xWKvfpVbtvHdA6OOKLRJN4Mj40TDBE8ns5Hw7oPGoL0"
                            alt=""
                        />  <Link className="link" to="/settings">MY PROFILE</Link>
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}



            </div>
            <div className="topright">

                <i class="fa-solid fa-magnifying-glass" input type="text" placeholder="Search">search    </i>
                {user && "LOGOUT"}
            </div>

        </div>
    )
}
