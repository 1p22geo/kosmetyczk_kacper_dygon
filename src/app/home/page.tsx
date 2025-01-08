import GeneralLayout from "@/app/generalLayout";
import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <GeneralLayout>
      <section className="hero">
        <h1>Witaj w Kosmetyczce</h1>
        <p>Odkryj piękno i odprężenie w naszym salonie w sercu Bydgoszczy.</p>
      </section>

      <section className="services">
        <h2>Nasze Usługi</h2>
        <div className="service-list">
          <div className="service-card">
            <Image
              src={
                "https://etycznykosmetyczny.pl/wp-content/uploads/2022/10/piele%CC%A8gnacja-twarzy-nakladanie-maseczki.webp"
              }
              alt="zdjecie1"
              unoptimized
              width={300}
              height={1}
              className="service-image"
            />
            <div>
              <h3>Pielęgnacja twarzy</h3>
              <p>Profesjonalne zabiegi regenerujące Twoją cerę.</p>
            </div>
          </div>
          <div className="service-card">
            <Image
              src={
                "https://spabaltica.pl/wp-content/uploads/2020/03/Baltica-Wellness-Spa-manicure-i-pedicure-.jpg"
              }
              alt="zdjecie1"
              unoptimized
              width={300}
              height={1}
              className="service-image"
            />
            <div>
              <h3>Manicure i pedicure</h3>
              <p>Piękne i zadbane paznokcie na każdą okazję.</p>
            </div>
          </div>
          <div className="service-card">
            <Image
              src={
                "https://jolantakocurek.pl/wp-content/uploads/2021/10/kobieta.jpg"
              }
              alt="zdjecie1"
              unoptimized
              width={300}
              height={1}
              className="service-image"
            />
            <div>
              <h3>Makijaż okolicznościowy</h3>
              <p>Perfekcyjny makijaż na każdą wyjątkową chwilę.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Opinie klientów</h2>
        <blockquote>
          "Najlepszy salon w Bydgoszczy! Moja cera nigdy nie wyglądała lepiej."
        </blockquote>
        <blockquote>
          "Profesjonalna obsługa i relaksująca atmosfera."
        </blockquote>
        <blockquote>
          "Polecam wszystkim! Usługi na najwyższym poziomie."
        </blockquote>
      </section>

      <section className="about">
        <h2>O nas</h2>
        <p>
          Jesteśmy zespołem pasjonatek kosmetologii z wieloletnim
          doświadczeniem. Naszym celem jest podkreślanie naturalnego piękna
          każdej klientki.
        </p>
      </section>

      <section className="contact">
        <h2>Kontakt</h2>
        <p>
          Zadzwoń do nas: <strong>+48 854 122 960</strong>
        </p>
        <p>
          Odwiedź nas: <strong>ul. Augustowska 4 Bydgoszcz</strong>
        </p>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.0024389754624!2d18.099788716027325!3d53.11070907991317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313c3b1b690c3%3A0x1b89134e6d3ed56c!2sAugustowska%204%2C%2085-866%20Bydgoszcz%2C%20Poland!5e0!3m2!1sen!2spl!4v1688664358493!5m2!1sen!2spl"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </GeneralLayout>
  );
}
