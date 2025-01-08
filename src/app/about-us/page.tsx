import GeneralLayout from "@/app/generalLayout";
import "./about-us.css";

export default function AboutUs() {
  return (
    <GeneralLayout>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>O nas</h1>
          <p>
            Witamy w salonie &#34;Kosmetyczka&#34; – miejscu, gdzie piękno
            spotyka profesjonalizm.
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2>Poznaj nasz zespół</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="" alt="Anna Nowak – Kosmetolog" />
            <h3>Anna Nowak</h3>
            <p>
              Kosmetolog z ponad 10-letnim doświadczeniem, specjalizująca się w
              pielęgnacji skóry twarzy.
            </p>
          </div>
          <div className="team-member">
            <img src="" alt="Katarzyna Kowalska – Stylistka paznokci" />
            <h3>Katarzyna Kowalska</h3>
            <p>
              Stylistka paznokci, której kreatywne wzory zachwycają każdą
              klientkę.
            </p>
          </div>
          <div className="team-member">
            <img src="" alt="Ewa Wiśniewska – Makijażystka" />
            <h3>Ewa Wiśniewska</h3>
            <p>
              Makijażystka z pasją do tworzenia perfekcyjnych stylizacji na
              każdą okazję.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Nasze wartości</h2>
        <ul>
          <li>
            <strong>Profesjonalizm:</strong> Każdy zabieg wykonywany jest z
            najwyższą starannością.
          </li>
          <li>
            <strong>Indywidualne podejście:</strong> Każda klientka to wyjątkowa
            historia.
          </li>
          <li>
            <strong>Innowacyjność:</strong> Pracujemy z najnowszymi
            technologiami i produktami.
          </li>
          <li>
            <strong>Relaks:</strong> Stawiamy na atmosferę, w której możesz się
            odprężyć.
          </li>
        </ul>
      </section>
    </GeneralLayout>
  );
}
