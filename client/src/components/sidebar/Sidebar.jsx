/* import "./sidebar.css"

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <span className="sidebarMainTitle">ABOUT US</span>
                <img className="profile" alt="profile" src={require('./defaultprofile.jpeg')} />
                <p>
                    Our system helps event organizers to advertise and market
                    their event and it also helps people to get notified about the
                    events which they are looking for. With this scenario, it's a
                    win-win situation for both organizers and the users/common people.
                </p>

                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">Seminars</li>
                        <li className="sidebarListItem">Fests</li>
                        <li className="sidebarListItem">Cultrals</li>
                        <li className="sidebarListItem">Sports</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-instagram"></i>
                        <i className="sidebarIcon fa-brands fa-linkedin"></i>
                        <i className="sidebarIcon fa-brands fa-pinterest"></i>
                        <i className="sidebarIcon fa-brands fa-facebook"></i>

                    </div>
                </div>
            </div>
        </>
    )
}
     <img className="sidebarImg" src={require('./defaultprofile.jpeg')} alt="" />
*/

import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
