import "./navbar.css"
import personIcon from './person-icon.svg'
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/home" className="nav-logo">Kosmetyczka</a>
            <a href="/about-us">O nas</a>
            <a href="/treatments">Zabiegi</a>
            <a href="/gallery">Galeria</a>
            <a href="/book-now" className="book-now-button">Umów się</a>
            <a href="/profile">
                <Image src={personIcon} alt="person icon"/>
            </a>

        </nav>
    );
}
