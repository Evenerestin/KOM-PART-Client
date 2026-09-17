import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import {
  DataRecoveryIcon,
  InternetIcon,
  ServiceIcon,
  ShopIcon,
} from "../Assets/ServicesIcons";
import {
  DataRecoveryOutlineIcon,
  InternetOutlineIcon,
  ServiceOutlineIcon,
  ShopOutlineIcon,
} from "../Assets/ServicesOutlineIcons";
import useSidebar from "../Hooks/useSidebar";
import "./css/Services.css";

const servicingItems = [
  {
    title: "Naprawy sprzętu",
    desc: "naprawa uszkodzonej płyty głównej, wymiana zasilacza, naprawa uszkodzonego ekranu, wymiana klawiatury, wymiana dysku twardego i innych podzespołów.",
  },
  {
    title: "Konserwacja sprzętu",
    desc: "czyszczenie wnętrza komputera z kurzu, wymiana pasty termoprzewodzącej, kontrola stanu pracy wentylatorów, wymiana termopadów.",
  },
  {
    title: "Diagnostyka sprzętu",
    desc: "sprawdzenie stanu technicznego podzespołów, wykrywanie usterek i awarii, diagnozowanie przyczyn problemów z działaniem komputera.",
  },
  {
    title: "Instalacja oprogramowania",
    desc: "instalacja systemu operacyjnego, sterowników, programów użytkowych, zabezpieczeń antywirusowych.",
  },
  {
    title: "Usługi dla firm",
    desc: "serwisowanie i konserwacja sprzętu komputerowego w firmach, tworzenie i konfiguracja systemów informatycznych, udzielanie wsparcia technicznego dla pracowników firmowych.",
  },
];

const salesItems = [
  {
    title: "Sprzedaż sprzętu komputerowego",
    desc: "podzespoły, akcesoria, urządzenia peryferyjne.",
  },
  {
    title: "Składanie komputerów stacjonarnych",
    desc: "montaż komputera stacjonarnego według indywidualnych potrzeb, możliwość personalizacji zamówienia.",
  },
  {
    title: "Ulepszanie sprzętu",
    desc: "instalacja dodatkowych urządzeń, wymiana podzespołów, w tym procesora, pamięci RAM, karty graficznej, dysku twardego.",
  },
  {
    title: "Sprzedaż oprogramowania",
    desc: "licencje systemowe, oprogramowanie użytkowe, w tym, narzędzia dedykowane dla firm oraz instytucji.",
  },
];

const dataItems = [
  {
    title: "Diagnostyka",
    desc: "wstępnej ocena stanu technicznego nośnika danych, określenie rodzaju problemu i stopnia uszkodzenia, orzeczenie o możliwości odzyskania danych oraz wycena.",
  },
  {
    title: "Klonowanie danych",
    desc: "tworzenie kopii zapasowych plików, dodatkowo chroniące przed usunięciem lub uszkodzeniem danych podczas odzyskiwania.",
  },
  {
    title: "Odtwarzanie danych",
    desc: "przypadku uszkodzenia logicznego, dane mogą być odzyskiwane przez specjalistyczne programy skanujące nośnik w poszukiwaniu danych.",
  },
  {
    title: "Naprawa nośnika danych",
    desc: "potrzebna w przypadku uszkodzenia fizycznego.",
  },
  {
    title: "Testowanie i weryfikacja",
    desc: "dodatkowe testy po zakończeniu procesu odzyskiwania w celu oceny poprawności i integralności danych.",
  },
];

const internetItems = [
  {
    title: "Stały dostęp do sieci",
    desc: "szybki oraz niezawodny Internet stacjonarny oraz Internet radiowy WIFI.",
  },
  {
    title: "Personalizacja oferty",
    desc: "szeroki wybór transferów, zarówno dla klientów indywidualnych, jak i firm.",
  },
  {
    title: "Usługi sieciowe",
    desc: "konfiguracja sieci LAN i WLAN, instalacja routerów, dostęp do Internetu, konfiguracja drukarek i innych urządzeń sieciowych.",
  },
  {
    title: "Wsparcie techniczne",
    desc: "pomoc w rozwiązywaniu problemów związanych z połączeniem, udzielanie porad dotyczących wyboru łącza oraz montażu i instalacji infrastruktury sieciowej.",
  },
  {
    title: "Regulamin świadczenia usług dostępu do internetu",
    link: "/regulamin.pdf",
  },
];

const ServiceList = ({ items }) => (
  <ol>
    {items.map((item, index) => (
      <li key={item.title}>
        <span className="itemNumber">{index + 1}</span>
        <span className="itemText">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <>
              <strong>{item.title}</strong> – {item.desc}
            </>
          )}
        </span>
      </li>
    ))}
  </ol>
);

ServiceList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

const Services = () => {
  useSidebar();

  return (
    <div className="servicePage">
      <div className="sideBar">
        <ul>
          <li className="sideBarItem">
            <a href="#servicing" className="flex">
              <ServiceIcon />
              <p>Serwis</p>
            </a>
          </li>
          <li className="sideBarItem">
            <a href="#sales" className="flex">
              <ShopIcon />
              <p>Sprzedaż, modernizacja</p>
            </a>
          </li>
          <li className="sideBarItem">
            <a href="#data" className="flex">
              <DataRecoveryIcon />
              <p>Odzyskiwanie danych</p>
            </a>
          </li>
          <li className="sideBarItem">
            <a href="#internet" className="flex">
              <InternetIcon />
              <p>Internet</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="servicesHero flex">
        <div className="heroContent flexColumn">
          <p className="eyebrow">Usługi</p>
          <h1>Świadczone usługi</h1>
          <h2>
            Serwis komputerowy Kom-part to miejsce, gdzie znajdziesz
            kompleksowe rozwiązania dla Twojego sprzętu.
          </h2>
          <p>
            Nasza oferta obejmuje szeroki zakres usług, w tym naprawy,
            konserwację, diagnostykę oraz ulepszanie zarówno sprzętu
            komputerowego, jak i oprogramowania.
          </p>
          <p>
            Niezależnie od tego, czy potrzebujesz szybkiej naprawy, regularnej
            konserwacji czy też kompleksowej modernizacji, jesteśmy tu, aby
            sprostać Twoim potrzebom. Nasze doświadczenie i zaangażowanie
            pozwalają nam świadczyć usługi na najwyższym poziomie, zapewniając
            Ci spokój i pewność, że Twój sprzęt jest w dobrych rękach.
          </p>
          <a href="#servicing" className="btnPrimary flex">
            Zobacz zakres usług
          </a>
        </div>
        <div className="heroImage">
          <img src="/images/services/banner.jpg" alt="" loading="lazy" />
        </div>
      </div>

      <div className="serviceSummary flexColumn">
        <div className="summaryHead flexColumn">
          <p className="eyebrow">Co oferujemy</p>
          <h2>Zakres naszych usług</h2>
        </div>
        <div className="summaryGrid">
          <div className="summaryCard flexColumn">
            <div className="gridCenter summaryIcon">
              <ServiceOutlineIcon />
            </div>
            <h3>Serwis</h3>
            <p>
              Oferujemy szybką i skuteczną pomoc w przypadku awarii sprzętu.
              Wykonamy diagnostykę, naprawę oraz konserwację, przywracając
              sprzęt do pełnej sprawności.
            </p>
          </div>
          <div className="summaryCard flexColumn">
            <div className="gridCenter summaryIcon">
              <ShopOutlineIcon />
            </div>
            <h3>Sprzedaż, modernizacja</h3>
            <p>
              Zajmujemy się sprzedażą komputerów i akcesoriów, oferując
              jednocześnie usługi profesjonalnej modernizacji. Dzięki temu
              możesz dostosować sprzęt do swoich potrzeb.
            </p>
          </div>
          <div className="summaryCard flexColumn">
            <div className="gridCenter summaryIcon">
              <DataRecoveryOutlineIcon />
            </div>
            <h3>Odzyskiwanie danych</h3>
            <p>
              Potencjalna utrata danych może być stresującym doświadczeniem.
              Nasza usługa odzyskiwania danych umożliwia szybkie i bezpieczne
              przywrócenie utraconych informacji.
            </p>
          </div>
          <div className="summaryCard flexColumn">
            <div className="gridCenter summaryIcon">
              <InternetOutlineIcon />
            </div>
            <h3>Internet</h3>
            <p>
              Oferujemy konfigurację sieci, rozwiązywanie problemów z
              połączeniem, a także doradztwo w zakresie optymalizacji.
              Jesteśmy również jednym z głównych dostawców internetu na
              terenie Żor.
            </p>
          </div>
        </div>
      </div>

      <div className="serviceSection flex" id="servicing">
        <div className="header flexColumn">
          <p className="eyebrow">01 — Serwis</p>
          <h2>Serwis</h2>
          <ServiceList items={servicingItems} />
        </div>
        <div className="imageContainer">
          <img
            src="/images/services/servicing.jpg"
            alt="Serwisant naprawiający podzespoły komputera"
            loading="lazy"
          />
        </div>
      </div>

      <div className="serviceSection flex" id="sales">
        <div className="imageContainer">
          <img
            src="/images/services/sales.jpg"
            alt="Zestaw komputerowy dostępny w ofercie sprzedaży"
            loading="lazy"
          />
        </div>
        <div className="header flexColumn">
          <p className="eyebrow">02 — Sprzedaż, modernizacja</p>
          <h2>Sprzedaż, modernizacja</h2>
          <ServiceList items={salesItems} />
        </div>
      </div>

      <div className="serviceSection flex" id="data">
        <div className="header flexColumn">
          <p className="eyebrow">03 — Odzyskiwanie danych</p>
          <h2>Odzyskiwanie danych</h2>
          <ServiceList items={dataItems} />
        </div>
        <div className="imageContainer">
          <img
            src="/images/services/data.jpg"
            alt="Dysk twardy podczas procesu odzyskiwania danych"
            loading="lazy"
          />
        </div>
      </div>

      <div className="serviceSection flex" id="internet">
        <div className="imageContainer">
          <img
            src="/images/services/internet.jpg"
            alt="Sprzęt sieciowy używany do konfiguracji internetu"
            loading="lazy"
          />
        </div>
        <div className="header flexColumn">
          <p className="eyebrow">04 — Internet</p>
          <h2>Internet</h2>
          <ServiceList items={internetItems} />
        </div>
      </div>

      <div className="closingCta flex">
        <div className="closingContent flexColumn">
          <p className="eyebrow">Skontaktuj się</p>
          <h2>Porozmawiajmy o Twoim sprzęcie</h2>
          <Link to="/kontakt" className="closingBtn">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
