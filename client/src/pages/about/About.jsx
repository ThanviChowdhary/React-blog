import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className="aboutItem">
                <span className='aboutTitle'>ABOUT US</span>
                <img className="aboutImg" src={require('./defaultprofile.jpeg')} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro pariatur officiis nobis nulla </p>
            </div>
            <div className="aboutItem">
                <span className='aboutTitle'>CATEGORIES</span>
                <ul className="aboutList">
                    <li className="aboutListItem">Life</li>
                    <li className="aboutListItem">Music</li>
                    <li className="aboutListItem">Style</li>
                    <li className="aboutListItem">Sport</li>
                    <li className="aboutListItem">Tech</li>
                    <li className="aboutListItem">Cinema</li>
                </ul>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">FOLLOW US</span>
                <div className="aboutSocial">
                    <i className="aboutIcon fa-brands fa-facebook-square"></i>
                    <i className="aboutIcon fa-brands fa-twitter"></i>
                    <i className="aboutIcon fa-brands fa-instagram-square"></i>
                    <i className="aboutIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
