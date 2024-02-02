import { Link, useLocation } from "react-router-dom"
export function NavigationComponent(){
const Location = useLocation()

    return (
        <nav>
            <img src="https://www.pngmart.com/files/Anime-Logo-PNG-Transparent.png" alt="" />
            <ul>
                <li>
                    <Link className={Location.pathname== '/' ? 'active' : ''} to='/'>HOME</Link>
                </li>
                <li>
                    <Link className={Location.pathname== '/about' ? 'active' : ''} to='about'>ABOUT</Link>
                </li>
                <li>
                    <Link className={Location.pathname== '/contact' ? 'active' : ''} to='contact'>CONTACTS</Link>
                </li>
            </ul>
        </nav>
    )
}