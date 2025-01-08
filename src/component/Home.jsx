
import Slider from "./layout/Slider"

function Home() {
  return (
    <>
      <Slider />

      <div className="container">
        <h2 className="wlcm">
          Welcome <b className="color">First Fiddle</b>
        </h2>
        <div className="row">
          <div className="col-md-7">
            <p className="para">
              First Fiddle Restaurants, one of India most prominent F&B
              companies in the casual dining sector, is headed by Priyank
              Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso
              Sexy and Bougie in 2022, we have created wave after wave in the
              industry with over 30+ restaurants, brands, and franchises across
              India.
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3 text-white ">
                JOIN THE JOURNEY
              </button>
            </center>
          </div>
          <div className="col-md-5 ">
            <center>
              <img
                src="https://pn-paul.netlify.app/image/first.jpg"
                alt=""
                className="img2 shadow-lg"
              />
            </center>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      {/* Media Mention div start */}
      <div className="container-fluid c">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="head">MEDIA MENTIONS</h1>
            <p className="para1">
              We have been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We’ve made our way from
              the heart of the country into the hearts of its people!
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3">
                Know More
              </button>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}
      {/* media mention div end */}

      {/* brand div start */}
      <div className="container">
        <h2 className="exp">
          Explore <b className="color">Our Brands</b>
        </h2>
        <div className="row">

          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt="" />
            </div>
          </div>

          <br />
          <br />
        </div>
        {/* row div end */}
      </div>
      {/* container div end */}
      {/* brand div end */}

      {/* expeience div start */}
      <div className="container-fluid cc">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="head">EXPERIENCE OUR CONCEPTS</h1>
            <p className="para1">
              Moving beyond just offering Indian, international, and fusion
              cuisines, our restaurants create magic with our special events,
              mood-setting music, Insta-worthy aesthetics, and tongue-tingling
              signatures! Head over to experience it for yourself!
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3">
                Know More
              </button>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}
      {/* experience div end */}
    </>
  );
}

export default Home