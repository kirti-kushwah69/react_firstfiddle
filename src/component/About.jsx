function About() {
  return (
    <>
      <div className="container-fluid ccc">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="our">OUR STORY</h1>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* roww end */}
      </div>
      {/* container-fluid end*/}

      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center m1">
            ONCE UPON <span style={{ color: " #fbaa1a" }}> AN AFFAIRE</span>
          </h2>
          <div className="row">
            <div className="col-md-7">
              <p className="p">
                First Fiddle Restaurants, formerly known as The Lazeez Affaire
                Group, was conceived in the year 1999 by Priyank Sukhija and
                Y.P. Ashok. Since then, the company has made a name for itself
                as innovators and leaders in the industry. Starting with their
                first brand, Lazeez Affaire, Priyank popularised the conceptof
                fine dining at a time when the same was unheard of. Following
                its success, First Fiddle introduced the concept of casual
                dining with brands such as Warehouse Cafe, Tamasha, Lord of The
                Drinks, Flying Saucer Cafe, and more, storming Delhi’s
                nightlife. WIth each new brand, First Fiddle brought a concept
                that was never experienced or heard of before, such as Plum by
                Bent Chair, Miso Sexy, Diablo, and more. The restaurants are
                spread all over India in major metropolitan cities like New
                Delhi, Mumbai, Pune, Lucknow and more, with plans to expand
                internationally soon.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="https://pn-paul.netlify.app/image/first.jpg"
                className="webimg shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
      {/* container-fluid end */}

      <br />
      <br />

      <div className="container-fluid why">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2 className="ml-1">THE GAME CHANGER</h2>
              <p className="p1">
                The company is dedicated to being a game changer in the F&B
                industry with the introduction of ‘concept’ restaurants. It is
                committed to catering to the ever-changing cosmopolitan taste of
                its customers & customer satisfaction is an utmost priority.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      {/* row end */}
      {/* container end */}
      {/* contatiner-fluid */}

      <div className="container">
        <h1 className="text-center ex">
          THE MAN <b style={{ color: "orange" }}> BEHIND THE FIDDLE</b>
        </h1>
        <div className="row">
          <div className="col-md-5">
            <center>
              <img
                src="https://pn-paul.netlify.app/image/about-priyank.jpg"
                alt=""
                className="img2"
              />
            </center>
          </div>
          <div className="col-md-7">
            <p className="para">
              With over 30 restaurants in 23 years under his belt, the prolific
              restaurateur Priyank Sukhija has become somewhat of a legend in
              the industry, starting his journey at a mere age of 19. Priyank
              was the first in his family to venture into business, hailing from
              a family of lawyers, going on to create an empire in F&B.
              Following his heart and tongue through his F&B career, Priyank has
              successfully created some of the most talked-about brands in the
              industry - Diablo, Lord of the Drinks, Plum by Bent Chair, Lazeez
              Affaire, Tamasha, The Flying Saucer Cafe, and many more.
            </p>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      <br />
      <br />

      <div className="container">
        <h2 className="wlcm">
          JOIN <b className="color">OUR FAMILY</b>
        </h2>
        <div className="row">
          <div className="col-md-7">
            <p className="para">
              At First Fiddle Restaurants, we leave no stone unturned to provide
              the most desirable experience across markets and restaurants.
              Serving over five lakh customers monthly with 15+ brands and 35+
              restaurants, our brands like Diablo, Plum by Bent Chair, Dragonfly
              Experience, Tamasha, Daddy, JLWA, and more have revolutionized the
              experience of dining & nightlife for everyone. Exploring a
              franchise with First Fiddle Restaurants provides you with a large
              existing customer base besides the added advantage of nation-wide
              recognition.
            </p>

            <button className="btn btn-warning btn-lg mt-3 mb-3 text-white ">
              FRANCHISE WITH US
            </button>
          </div>
          <div className="col-md-5 ">
            <center>
              <img
                src="https://pn-paul.netlify.app/image/333X3322.jpg"
                alt=""
                className="img2 shadow-lg"
              />
            </center>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      <br />
    </>
  );
}

export default About