import NonProfitData from "../Assets/NonProfitData";
import ImageGallery from "../Components/ImageGallery";

const NonProfit = () => {
  var documentType = "non-profit evidence";

  return (
    <div>
      <ImageGallery images={NonProfitData} documentType={documentType} />
    </div>
  );
};

export default NonProfit;
