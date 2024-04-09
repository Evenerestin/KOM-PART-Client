import { Link } from "react-router-dom";
import "./Footer.css";
import MenuData from "./MenuData";

const Footer = () => {
  return (
    <footer>
      <div className="footerSummary flex">
        <div className="footerColumn">
          <h3>Kom-Part</h3>
          <div className="introduction">
            <p>Potrzebujesz pomocy?</p>
            <p>Skontaktuj się z nami.</p>
          </div>
        </div>
        <div className="footerColumn">
          <h3>Menu</h3>
          <ul className="flexColumn">
            {MenuData.map((menu, index) => (
              <li className="footerMenuItem" key={index}>
                <Link to={menu.url}>
                  <button>{menu.title}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerColumn">
          <h3>Kontakt</h3>
          <p>Adres: ul. Rynek 11, 44-240 Żory</p>
          <p>Tel: 32 435 77 55</p>
          <p>Email: kom-part@pro.onet.pl</p>
          <div className="openingHours">
            <p>Godziny otwarcia serwisu:</p>
            <p>Poniedziałek-Piątek: 11:00-17:00</p>
          </div>
        </div>
        <div className="footerColumn">
          <h3>O nas</h3>
          <p>
            Jako firma serwisowa z pasją do nowoczesnych technologii, zawsze
            jesteśmy na bieżąco z najnowszymi trendami w branży informatycznej.
            Naszym priorytetem jest zapewnienie klientom pewności, że ich sprzęt
            jest w dobrych rękach, a wszelkie problemy zostaną rozwiązane szybko
            i sprawnie.
          </p>
          <p>
            Wieloletnie doświadczenie pozwala nam na zrozumienie potrzeb klienta
            oraz dopasowanie oferty.
          </p>
        </div>
      </div>
      <div className="copyright flex">
        <p>Copyright © 2024 Kom-part Serwis komputerowy</p>
        <p>Alicja Bieryt @Evenerestin</p>
      </div>
    </footer>
  );
};

export default Footer;
