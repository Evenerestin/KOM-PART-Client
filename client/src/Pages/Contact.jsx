import {
  LocationOutlineIcon,
  MailOutlineIcon,
  PhoneOutlineIcon,
} from "../Assets/InformationOutlineIcon";
import { PinMotif } from "../Assets/PinMotif";
import GoogleMap from "../Components/GoogleMap";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactHero">
        <PinMotif />
        <p className="eyebrow">Kontakt</p>
        <h1>Zapraszamy do kontaktu</h1>
        <p className="lead">Chętnie odpowiemy na Twoje pytania.</p>
        <div className="heroActions">
          <a className="btnPrimary" href="tel:324357755">
            Zadzwoń: 32 435 77 55
          </a>
          <a className="btnGhost" href="mailto:zory.kompart@gmail.com">
            Napisz e-mail
          </a>
        </div>
      </div>

      <div className="contactInfoSection flex">
        <div className="contactPanel">
          <div className="contactPanelRow flex">
            <div className="contactBadge flex">
              <PhoneOutlineIcon />
            </div>
            <div>
              <p className="rowTitle">Telefon</p>
              <p className="rowMain">32 435 77 55</p>
              <div className="hoursInline flex">
                <span>
                  <b>Pon</b> 11:00-16:30
                </span>
                <span>
                  <b>Wt-Pt</b> 11:00-17:00
                </span>
                <span>
                  <b>Sob</b> po wcześniejszym ustaleniu tel.
                </span>
              </div>
            </div>
          </div>
          <div className="contactPanelRow flex">
            <div className="contactBadge flex">
              <MailOutlineIcon />
            </div>
            <div>
              <p className="rowTitle">Email</p>
              <p className="rowMain">zory.kompart@gmail.com</p>
            </div>
          </div>
          <div className="contactPanelRow flex">
            <div className="contactBadge flex">
              <LocationOutlineIcon />
            </div>
            <div>
              <p className="rowTitle">Adres</p>
              <p className="rowMain">ul. Rynek 11, 44-240 Żory</p>
              <p className="rowSub">
                Kom-Part Serwis Komputerowy · NIP: 651-113-64-88 · REGON:
                277892274
              </p>
            </div>
          </div>
        </div>

        <div className="mapCard">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
