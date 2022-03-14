import { Link, NavLink } from "react-router-dom"
import '../CSS/main.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="mx-4 d-inline-block align-top" src="/logo-image/LOGO.png" height="110" />
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
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                               < NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/workshops">WORKSHOPS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/shop">SHOP</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/register">REGISTER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/chat">CHAT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/contact">CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link" } to="/cart">CART</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header