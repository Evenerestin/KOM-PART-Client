import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { LocationIcon, PhoneIcon } from "../Assets/InformationIcons";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "../Assets/OfferIcons";
import {
  DataRecoveryIcon,
  InternetIcon,
  ServiceIcon,
  ShopIcon,
} from "../Assets/ServicesIcons";
import ServicingIcon from "../Assets/ServicingIcon";
import GoogleMap from "../Components/GoogleMap";
import GoogleReviews from "../Components/GoogleReviews";
import LogoCarousel from "../Components/LogoCarousel";
import "./css/Home.css";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div className="homePage">
      <header className="gridCenter">
        <div className="flex">
          <h1>Profesjonalny Serwis Komputerowy</h1>
          <h1>Profesjonalny Serwis Komputerowy</h1>
          <h1>Profesjonalny Serwis Komputerowy</h1>
        </div>
        <div className="flex">
          <ServicingIcon />
          <h2>28 lat doświadczenia w serwisowaniu komputerów</h2>
        </div>
        <p>Jesteśmy do waszej dyspozycji.</p>
        <Link to="/kontakt">
          <button>
            <div className="flex">
              <PhoneIcon />
              <span>Kontakt</span>
            </div>
          </button>
        </Link>
        <address className="address flex">
          <a href="#location" aria-label="Zobacz lokalizację firmy">
            <LocationIcon />
          </a>
          <p>ul. Rynek 11, 44-240 Żory</p>
        </address>
      </header>

      <section className="flex" id="offerHero">
        <div className="offerHeroContent">
          <p className="eyebrow">Serwis komputerowy w Żorach</p>
          <h2>Serwis komputerowy, któremu możesz zaufać.</h2>
          <p className="lead">
            Naprawa laptopów, komputerów stacjonarnych i podzespołów.
          </p>
          <p className="lead">
            Z pasją i zaangażowaniem obsługujemy klientów indywidualnych oraz
            przedsiębiorstwa, oferując kompleksowe usługi naprawy, konserwacji,
            i optymalizacji sprzętu komputerowego. W Kom-Part dbamy nie tylko o
            sprzęt komputerowy, ale również o satysfakcję naszych klientów.
          </p>
          <div className="offerHeroActions flex">
            <Link to="/kontakt">
              <button className="primaryBtn">Zamów naprawę</button>
            </Link>
            <Link to="/uslugi">
              <button className="secondaryBtn">Zobacz usługi</button>
            </Link>
          </div>
          <ul className="offerHeroChecklist flex">
            <li className="flex">
              <CheckIcon />
              <span>Gwarancja naprawy</span>
            </li>
            <li className="flex">
              <CheckIcon />
              <span>Doskonała jakość usług</span>
            </li>
            <li className="flex">
              <CheckIcon />
              <span>Certyfikowani technicy</span>
            </li>
          </ul>
        </div>
        <div className="offerHeroVisual">
          <div className="circuitCard">
            <img
              src="/images/home/about.jpg"
              loading="lazy"
              alt="Podzespół komputerowy trzymany w dłoni"
            />
          </div>
          <div className="offerHeroBadge flex">
            <ShieldCheckIcon />
            <div className="flexColumn">
              <strong>Bezpłatna diagnoza</strong>
              <span>przy każdej naprawie</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flexColumn" id="offerCards">
        <div className="offerCardsHeader flex">
          <div>
            <p className="eyebrow">Skorzystaj z naszej oferty</p>
            <h2>W czym możemy pomóc</h2>
            <p>
              Odkryj, dlaczego nasz serwis komputerowy to gwarancja
              profesjonalizmu i solidności.
            </p>
          </div>
          <Link to="/uslugi" className="offerCardsLink flex">
            <span>Zobacz pełną ofertę</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="offerGrid">
          <div className="offerFeatureCard">
            <img
              src="/images/home/service.jpg"
              loading="lazy"
              alt="Serwisowanie sprzętu komputerowego"
            />
            <div className="offerFeatureOverlay" />
            <div className="offerFeatureBadge">
              <ServiceIcon />
            </div>
            <div className="offerFeatureBody">
              <p className="offerFeatureTag">01 — Serwis urządzeń</p>
              <h3>Diagnoza i naprawa usterek sprzętowych</h3>
              <p>
                Wymiana matryc, klawiatur i zawiasów — naprawiamy sprzęt na
                miejscu w serwisie, z bezpłatną diagnozą przed każdą wyceną.
              </p>
              <Link to="/kontakt" className="offerFeatureBtn flex">
                <span>Umów wizytę</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <div className="offerSideCards flexColumn">
            <div className="offerSideCard flexColumn">
              <div className="offerSideIcon gridCenter">
                <ShopIcon />
              </div>
              <p className="offerSideTag">02</p>
              <h3>Sprzedaż, modernizacja</h3>
              <p>
                Naprawa i modernizacja PC, czyszczenie z kurzu, wymiana
                podzespołów.
              </p>
              <Link to="/uslugi" className="flex">
                <span>Zobacz więcej</span>
                <ArrowRightIcon />
              </Link>
            </div>
            <div className="offerSideCard flexColumn">
              <div className="offerSideIcon gridCenter">
                <DataRecoveryIcon />
              </div>
              <p className="offerSideTag">03</p>
              <h3>Odzyskiwanie danych</h3>
              <p>
                Ratowanie danych z uszkodzonych dysków HDD, SSD i pendrive&apos;ów.
              </p>
              <Link to="/uslugi" className="flex">
                <span>Zobacz więcej</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="offerInternetCard">
          <img
            src="/images/services/internet.jpg"
            loading="lazy"
            alt="Konfiguracja sieci internetowej"
            className="offerInternetPhoto"
          />
          <div className="offerInternetTint" />
          <div className="offerInternetShade" />
          <div className="offerInternetContent flex">
            <div className="offerFeatureBadge gridCenter">
              <InternetIcon />
            </div>
            <div className="offerInternetBody">
              <p className="offerInternetTag">04 — Internet</p>
              <h3>Stały dostęp do sieci</h3>
              <p>
                Szybki internet stacjonarny i radiowy WiFi, konfiguracja sieci
                LAN/WLAN oraz wsparcie techniczne.
              </p>
            </div>
            <Link to="/uslugi" className="offerFeatureBtn flex">
              <span>Zobacz więcej</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="flexColumn" id="reviews">
        <GoogleReviews />
      </section>

      <section className="flex" id="aboutUs">
        <div className="aboutUsVisual">
          <div className="aboutUsImage">
            <img
              src="/images/contact/firm.jpg"
              loading="lazy"
              alt="Siedziba KOM-PART przy ul. Rynek 11 w Żorach"
            />
          </div>
        </div>
        <div className="aboutUsText">
          <p className="eyebrow">O nas</p>
          <h2>Marka KOM-PART działa od 1997 roku</h2>
          <p>
            Przez ten okres zaufało nam już ponad 23 000 klientów indywidualnych
            oraz instytucji. Stawiamy na nieustanny rozwój, dzięki czemu
            jesteśmy liderem branży IT na naszym terenie.
          </p>
          <p>
            Obsługujemy klientów indywidualnych oraz przedsiębiorstwa, oferując
            kompleksowe usługi naprawy, konserwacji i optymalizacji sprzętu
            komputerowego.
          </p>
        </div>
      </section>

      <section id="location">
        <div className="locationInfo flexColumn">
          <p className="eyebrow">Lokalizacja</p>
          <h2>Do zobaczenia wkrótce!</h2>
          <p>
            Sprawdź, jak szybko i wygodnie dotrzeć do naszej siedziby, aby
            skorzystać z naszych usług.
          </p>
          <div className="locationRow flex">
            <LocationIcon />
            <p>ul. Rynek 11, 44-240 Żory</p>
          </div>
          <div className="locationRow flex">
            <ClockIcon />
            <div className="locationHours">
              <p>Poniedziałek: 11:00–16:30</p>
              <p>Wtorek–Piątek: 11:00–17:00</p>
              <p>Sobota: po wcześniejszym ustaleniu tel.</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=KOM-PART+Rynek+11%2C+44-240+%C5%BBory"
            target="_blank"
            rel="noreferrer"
            className="locationBtn flex"
          >
            <span>Wyznacz trasę</span>
            <ArrowRightIcon />
          </a>
        </div>
        <div className="locationMap">
          <GoogleMap />
        </div>
      </section>

      <section className="flex" id="ctaBanner">
        <div className="title">
          <h2>Masz pytanie o naprawę?</h2>
          <p>
            Zadzwoń pod numer <a href="tel:+48324357755">32 435 77 55</a> lub
            napisz do nas — doradzimy najlepsze rozwiązanie.
          </p>
        </div>
        <Link to="/kontakt">
          <button>Skontaktuj się</button>
        </Link>
      </section>
      {!isMobile ? <LogoCarousel /> : ""}
    </div>
  );
};

export default Home;
