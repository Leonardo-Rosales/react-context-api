import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Posts</NavLink>
                </li>
            </ul>
        </nav>
    )
}