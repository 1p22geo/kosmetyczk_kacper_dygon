import { ReactNode } from "react";
import Navbar from "@/app/components/navbar/navbar";
import "./generalLayout.css";

export default function GeneralLayout(props: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer>
        <h3>Kosmetyczka</h3>
        <div className="contactDetails">
          <a href="mailto:kosmetyczka@kosmetyczka.com">
            kosmetyczka@kosmetyczka.com
          </a>
          <a href="tel:+48 854 122 960">+48 854 122 960</a>
          <a href="https://www.google.com/maps/place/Augustowska+4,+85-808+Bydgoszcz/@53.1026462,18.0402476,21z/data=!4m15!1m8!3m7!1s0x47031386764ebd6f:0xe49ee48c4b65f30e!2sBydgoszcz!3b1!8m2!3d53.1234804!4d18.0084378!16zL20vMGp3enA!3m5!1s0x4703147de910f61d:0xdd120a98ff61f31b!8m2!3d53.1026082!4d18.0402211!16s%2Fg%2F11c4rv6rh0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
            ul. Augustowska 4 85-866 Bydgoszcz, Poland
          </a>
        </div>
        <div className="footer-nav">
          <a href="/about-us">O nas</a>
          <a href="/treatments">Zabiegi</a>
          <a href="/gallery">Galeria</a>
          <a href="/book-now">Umów się</a>
        </div>
        <div className="allRightsReserved">
          <p>Copyright by Kosmetyczka</p>
        </div>
      </footer>
    </div>
  );
}
