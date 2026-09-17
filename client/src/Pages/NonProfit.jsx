import NonProfitData from "../Assets/NonProfitData";
import Logo from "../Components/Logo";
import ImageGallery from "../Components/ImageGallery";
import { pluralize } from "../Utils/pluralize";
import "./css/DocumentGallery.css";

const NonProfit = () => {
  const count = NonProfitData.length;

  return (
    <div className="documentGalleryPage">
      <div className="documentGalleryHeader">
        <div className="headerMotif" aria-hidden="true">
          <Logo />
        </div>
        <p className="eyebrow">Non profit</p>
        <h1>Zaangażowanie społeczne</h1>
        <p className="lead">
          Od 2006 roku wspieramy lokalne szkoły, fundacje i inicjatywy
          charytatywne w Żorach i okolicy.
        </p>
        <p className="meta">
          {count}{" "}
          {pluralize(count, [
            "podziękowanie",
            "podziękowania",
            "podziękowań",
          ])}
        </p>
      </div>
      <ImageGallery images={NonProfitData} documentType="non-profit evidence" />
    </div>
  );
};

export default NonProfit;
