import CertificatesData from "../Assets/CertificatesData";
import Logo from "../Components/Logo";
import ImageGallery from "../Components/ImageGallery";
import { pluralize } from "../Utils/pluralize";
import "./css/DocumentGallery.css";

const Certificates = () => {
  const count = CertificatesData.length;

  return (
    <div className="documentGalleryPage">
      <div className="documentGalleryHeader">
        <div className="headerMotif" aria-hidden="true">
          <Logo />
        </div>
        <p className="eyebrow">Certyfikaty</p>
        <h1>Certyfikaty i uprawnienia</h1>
        <p className="lead">
          Kwalifikacje i szkolenia, które zdobywaliśmy przez lata, aby świadczyć
          usługi na najwyższym poziomie.
        </p>
        <p className="meta">
          {count}{" "}
          {pluralize(count, ["certyfikat", "certyfikaty", "certyfikatów"])}
        </p>
      </div>
      <ImageGallery images={CertificatesData} documentType="certificate" />
    </div>
  );
};

export default Certificates;
