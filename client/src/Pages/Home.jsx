import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { LocationIcon, PhoneIcon } from "../Assets/InformationIcons";
import {
  DataRecoveryOutlineIcon,
  InternetOutlineIcon,
  ServiceOutlineIcon,
  ShopOutlineIcon,
} from "../Assets/ServicesOutlineIcons";
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

      <section className="flex" id="aboutUs">
        <figure className="photos flex">
          <img
            src="/Images/Home/about.jpg"
            loading="lazy"
            alt="Zespół Kom-Part w pracy"
          />
        </figure>
        <article className="header flexColumn">
          <h3> - Rok założenia MCMXCVII - </h3>
          <h2>Marka KOM-PART znana jest od roku 1997r.</h2>
          <h3>
            Przez ten okres zaufało na już ponad 23 000 klientów indywidualnych
            oraz instytucji.
          </h3>
          <div className="subHeader">
            <p>
              Od tamtej pory stawiamy na nieustanny rozwój, dzięki czemu
              jesteśmy obecnie liderem branży IT działającym na naszym ternie.
            </p>
            <p>
              Z pasją i zaangażowaniem obsługujemy klientów indywidualnych oraz
              przedsiębiorstwa, oferując kompleksowe usługi naprawy,
              konserwacji, i optymalizacji sprzętu komputerowego. W Kom-Part
              dbamy nie tylko o sprzęt komputerowy, ale również o satysfakcję
              naszych klientów.
            </p>
          </div>
          <section className="flexColumn" id="reviews">
            <GoogleReviews />
          </section>
        </article>
      </section>

      <section className="flex" id="service">
        <div className="header">
          <div className="title">
            <h2>Skorzystaj z naszej oferty</h2>
            <p>
              Odkryj, dlaczego nasz serwis komputerowy to gwarancja
              profesjonalizmu i solidności.
            </p>
          </div>
          <Link to="/uslugi">
            <button>Dowiedz się więcej...</button>
          </Link>
        </div>
        <div className="listOfServices flexColumn" aria-label="Lista usług">
          <Link to="/uslugi">
            <div className="serviceContainer flex">
              <div className="gridCenter">
                <ServiceOutlineIcon />
              </div>
              <h3>Serwis</h3>
            </div>
          </Link>
          <Link to="/uslugi#sales">
            <div className="serviceContainer flex">
              <div className="gridCenter">
                <ShopOutlineIcon />
              </div>
              <h3>Sprzedaż, modernizacja</h3>
            </div>
          </Link>
          <Link to="/uslugi">
            <div className="serviceContainer flex">
              <div className="gridCenter">
                <DataRecoveryOutlineIcon />
              </div>
              <h3>Odzyskiwanie danych</h3>
            </div>
          </Link>
          <Link to="/uslugi">
            <div className="serviceContainer flex">
              <div className="gridCenter">
                <InternetOutlineIcon />
              </div>
              <h3>Internet</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="flex" id="location">
        <div className="title">
          <h2>Do zobaczenia wkrótce!</h2>
          <p>
            Cieszymy się, że nasza firma znajduje się w centralnej lokalizacji,
            co umożliwia łatwy dostęp dla naszych klientów.
          </p>
          <p>
            Sprawdź, jak szybko i wygodnie dotrzeć do naszej siedziby, aby
            skorzystać z naszych usług.
          </p>
        </div>
        <GoogleMap />
      </section>

      {!isMobile ? <LogoCarousel /> : ""}
    </div>
  );
};

export default Home;
