import CertificatesData from "../Assets/CertificatesData";
import ImageGallery from "../Components/ImageGallery";

const Certifications = () => {
  let documentType = "certificate";

  return (
    <div className="certificatesPage">
      <ImageGallery images={CertificatesData} documentType={documentType} />
    </div>
  );
};

export default Certifications;
