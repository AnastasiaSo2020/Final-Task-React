import { Link } from "react-router-dom";
import '../Components/main.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="mx-4" src="/logo-image/LOGO.png" height="110" className="d-inline-block align-top"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-text-location">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/workshops">WORKSHOPS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">REGISTER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chat">CHAT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">CART</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header;