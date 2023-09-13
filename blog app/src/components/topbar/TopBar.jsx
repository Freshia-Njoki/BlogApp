import './topbar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem"> <Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"> <Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"> <Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' src="../../public/assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg" alt="" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link to="/login" className="link">LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
