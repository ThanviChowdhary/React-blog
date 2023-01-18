import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headertitles">
                <span className="headerlg">Blogozers</span>
                <span className="headersm">Explore the stuff around! </span>
            </div>
            <img className="headerimg" alt="bgpic loading" src={require('./intro.jpg')} />
        </div>

    );
}
