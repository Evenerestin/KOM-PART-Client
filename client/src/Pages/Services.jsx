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
import useScroll from "../Hooks/useScroll";
import useSidebar from "../Hooks/useSidebar";
import "./css/Services.css";

const Services = () => {
  const scrolled = useScroll();
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

      <div className="servicesHeader">
        <div className={`banner flexColumn ${scrolled ? "scrolled" : ""}`}>
          <h1>Świadczone usługi</h1>
          <h2>
            Serwis komputerowy Kom-part to miejsce, gdzie znajdziesz kompleksowe
            rozwiązania dla Twojego sprzętu.
          </h2>
        </div>
        <div className="content flexColumn">
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
        </div>
      </div>

      <div className="serviceSummary flexColumn">
        <div className="row flex">
          <div className="container flexColumn">
            <div className="title flex">
              <div className="gridCenter">
                <ServiceOutlineIcon />
              </div>
              <h3>Serwis</h3>
            </div>
            <p>
              Oferujemy szybką i skuteczną pomoc w przypadku awarii sprzętu.
              Wykonamy diagnostykę, naprawę oraz konserwację, przywracając
              sprzęt do pełnej sprawności.
            </p>
          </div>
          <div className="container flexColumn">
            <div className="title flex">
              <div className="gridCenter">
                <ShopOutlineIcon />
              </div>
              <h3>Sprzedaż, modernizacja</h3>
            </div>
            <p>
              Zajmujemy się sprzedażą komputerów i akcesoriów, oferując
              jednocześnie usługi profesjonalnej modernizacji. Dzięki temu
              możesz dostosować sprzęt do swoich potrzeb.
            </p>
          </div>
        </div>
        <div className="row flex">
          <div className="container flexColumn">
            <div className="title flex">
              <div className="gridCenter">
                <DataRecoveryOutlineIcon />
              </div>
              <h3>Odzyskiwanie danych</h3>
            </div>
            <p>
              Potencjalna utrata danych może być stresującym doświadczeniem.
              Nasza usługa odzyskiwania danych umożliwia szybkie i bezpieczne
              przywrócenie utraconych informacji.
            </p>
          </div>
          <div className="container flexColumn">
            <div className="title flex">
              <div className="gridCenter">
                <InternetOutlineIcon />
              </div>
              <h3>Internet</h3>
            </div>
            <p>
              Oferujemy konfigurację sieci, rozwiązywanie problemów z
              połączeniem, a także doradztwo w zakresie optymalizacji. Jesteśmy
              również jednym z głównych dostawców internetu na terenie Żor.
            </p>
          </div>
        </div>
      </div>

      <div className="serviceSection flex" id="servicing">
        <div className="header flexColumn">
          <h2>Serwis</h2>
          <ol>
            <li>
              Naprawy sprzętu - naprawa uszkodzonej płyty głównej, wymiana
              zasilacza, naprawa uszkodzonego ekranu, wymiana klawiatury,
              wymiana dysku twardego i innych podzespołów.
            </li>
            <li>
              Konserwacja sprzętu - czyszczenie wnętrza komputera z kurzu,
              wymiana pasty termoprzewodzącej, kontrola stanu pracy
              wentylatorów, wymiana termopadów.
            </li>
            <li>
              Diagnostyka sprzętu - sprawdzenie stanu technicznego podzespołów,
              wykrywanie usterek i awarii, diagnozowanie przyczyn problemów z
              działaniem komputera.
            </li>
            <li>
              Instalacja oprogramowania - instalacja systemu operacyjnego,
              sterowników, programów użytkowych, zabezpieczeń antywirusowych.
            </li>
            <li>
              Usługi dla firm - serwisowanie i konserwacja sprzętu komputerowego
              w firmach, tworzenie i konfiguracja systemów informatycznych,
              udzielanie wsparcia technicznego dla pracowników firmowych.
            </li>
          </ol>
        </div>
        <div className="imageContainer">
          <img
            src="/images/services/servicing.jpg"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
      <div className="serviceSection flex" id="sales">
        <div className="imageContainer">
          <img
            src="/images/services/sales.jpg"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
        <div className="header flexColumn">
          <h2>Sprzedaż, modernizacja</h2>
          <ol>
            <li>
              Sprzedaż sprzętu komputerowego - podzespoły, akcesoria, urządzenia
              peryferyjne.
            </li>
            <li>
              Składanie komputerów stacjonarnych - montaż komputera
              stacjonarnego według indywidualnych potrzeb, możliwość
              personalizacji zamówienia.
            </li>
            <li>
              Ulepszanie sprzętu - instalacja dodatkowych urządzeń, wymiana
              podzespołów, w tym procesora, pamięci RAM, karty graficznej, dysku
              twardego.
            </li>
            <li>
              Sprzedaż oprogramowania - licencje systemowe, oprogramowanie
              użytkowe, w tym, narzędzia dedykowane dla firm oraz instytucji.
            </li>
          </ol>
        </div>
      </div>
      <div className="serviceSection flex" id="data">
        <div className="header flexColumn">
          <h2>Odzyskiwanie danych</h2>
          <ol>
            <li>
              Diagnostyka - wstępnej ocena stanu technicznego nośnika danych,
              określenie rodzaju problemu i stopnia uszkodzenia, orzeczenie o
              możliwości odzyskania danych oraz wycena.
            </li>
            <li>
              Klonowanie danych - tworzenie kopii zapasowych plików, dodatkowo
              chroniące przed usunięciem lub uszkodzeniem danych podczas
              odzyskiwania.
            </li>
            <li>
              Odtwarzanie danych - przypadku uszkodzenia logicznego, dane mogą
              być odzyskiwane przez specjalistyczne programy skanujące nośnik w
              poszukiwaniu danych.
            </li>
            <li>
              Naprawa nośnika danych - potrzebna w przypadku uszkodzenia
              fizycznego
            </li>
            <li>
              Testowanie i weryfikacja - dodatkowe testy po zakońćzeniu procesu
              odzyskiwania w celu oceny poprawność i integralności danych.
            </li>
          </ol>
        </div>
        <div className="imageContainer">
          <img
            src="/images/services/data.jpg"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
      <div className="serviceSection flex" id="internet">
        <div className="imageContainer">
          <img
            src="/images/services/internet.jpg"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
        <div className="header flexColumn">
          <h2>Internet</h2>
          <ol>
            <li>
              Stały dostęp do sieci - szybki oraz niezadowny Internet
              stacjonarny oraz Internet radiowy WIFI
            </li>
            <li>
              Personalizacja oferty - szeroki wybór transferów, zarówno dla
              klientów indywidualnych, jak i firm.
            </li>
            <li>
              Usługi sieciowe - konfiguracja sieci LAN i WLAN, instalacja
              routerów, dostęp do Internetu, konfiguracja drukarek i innych
              urządzeń sieciowych.
            </li>
            <li>
              Wsparcie techniczne - pomoc w rozwiązywaniu problemów związanych z
              połączeniem, udzielanie porad dotyczących wyboru łącza oraz
              montażu i instalacji infrastruktury sieciowej
            </li>
            <li>
              <a href="/regulamin.pdf" target="_blank">
                Regulamin świadczenia usług dostępu do internetu
              </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="closingSection"></div>
    </div>
  );
};

export default Services;
