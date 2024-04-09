const GoogleMap = () => {
  return (
    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.2042382364307!2d18.69171937685808!3d50.0450052164735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114d5abc21bff7%3A0x9c418c51b071f232!2sKom-Part%20(%20serwis%20komputerów%20i%20laptopów%20)!5e0!3m2!1spl!2spl!4v1708634669971!5m2!1spl!2spl"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
