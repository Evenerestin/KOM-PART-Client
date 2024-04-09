import {
  LocationOutlineIcon,
  MailOutlineIcon,
  PhoneOutlineIcon,
} from "../Assets/InformationOutlineIcon";
import GoogleMap from "../Components/GoogleMap";
import useScroll from "../Hooks/useScroll";
import "./css/Contact.css";

const Contact = () => {
  const scrolled = useScroll();

  return (
    <div className="contactPage">
      <div className={`contactBanner flexColumn ${scrolled ? "scrolled" : ""}`}>
        <h1>Zapraszamy do kontaktu</h1>
        <h2>Chętnie odpowiemy na Twoje pytania.</h2>
      </div>

      <div className="contactInformations flex">
        <div className="contactHeader flex">
          <div className="contactHeaderContent flexColumn">
            <div className="contactIcon flex">
              <PhoneOutlineIcon />
            </div>
            <div className="contactInformation">
              <p>Telefon: 32 435 77 55</p>
              <p>Poniedziałek-Piątek: 11:00-17:00</p>
            </div>
          </div>
          <div className="contactHeaderContent flexColumn">
            <div className="contactIcon flex">
              <MailOutlineIcon />
            </div>
            <div className="contactInformation">
              <p>Email: kom-part@pro.onet.pl</p>
            </div>
          </div>
          <div className="contactHeaderContent flexColumn">
            <div className="contactIcon flex">
              <LocationOutlineIcon />
            </div>
            <div className="contactInformation">
              <p>Kom-Part Serwis Komputerowy</p>
              <p>NIP: 651-113-64-88</p>
              <p>REGON: 277892274</p>
              <p>ul. Rynek 11, 44-240 Żory </p>
            </div>
          </div>
        </div>

        <img src="firm.jpg" alt="" />
      </div>

      <div className="locationInformations gridCenter">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
