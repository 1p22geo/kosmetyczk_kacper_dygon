import "./navbar.css";
import personIcon from "./person-icon.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/home" className="nav-logo primary-button">
        Kosmetyczka
      </a>
      <a href="/about-us">O nas</a>
      <a href="/treatments">Zabiegi</a>
      <a href="/gallery">Galeria</a>
      <a href="/book-now" className="book-now-button primary-button">
        Umów się
      </a>
      <a href="/auth/login">
        <Image src={personIcon} alt="person icon" />
      </a>
    </nav>
  );
}
