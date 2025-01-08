function Slider() {
  return (
    <>
      {/* slider div start */}
      <div className="carousel slide" data-bs-ride="carousel" id="s">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#s"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#s"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#s"
            data-bs-slide-to="2"
          ></button>
        </div>
        {/* carousel-indicators */}

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://pn-paul.netlify.app/image/slider1.jpg"
              alt=""
              className="w-100 fid"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://pn-paul.netlify.app/image/slider22.jpg"
              alt=""
              className="w-100 fid"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://pn-paul.netlify.app/image/slidwr33.jpg"
              alt=""
              className="w-100 fid"
            />
          </div>
        </div>
        {/* carousel-inner end */}

      </div>
      {/* slider div end */}
    </>
  );
}

export default Slider