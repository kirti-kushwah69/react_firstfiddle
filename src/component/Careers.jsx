function Careers() {
  return (
    <>
      {/* banner start */}

      <div className="container-fluid ccccd">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="our">CAREERS</h1>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* roww end */}
      </div>
      {/*container div */}
      {/* banner end */}

      {/* come work with us div start */}
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12">
            <p
              className="text-center mb-2"
              style={{ fontFamily: "prague", fontSize: "50px" }}
            >
              COME WORK <b style={{ color: "orange" }}>WITH US!</b>
            </p>
            <p className="come">
              First Fiddle is all about innovation, creativity and understanding
              ever-changing consumer needs. The work environment enables both
              professional and personal growth.
            </p>

            <p
              className="text-center mb-2"
              style={{ fontFamily: "prague", fontSize: "50px" }}
            >
              HOW TO <b style={{ color: "orange" }}>APPLY!</b>
            </p>
            <p className="come">
              First Fiddle is all about innovation, creativity and understanding
              ever-changing consumer needs. The work environment enables both
              professional and personal growth.
            </p>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      {/* come work with us div end*/}

      {/* steep row start */}
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-3 ms-3 ">
            <h4>Steep learning curve</h4>
            <p className="come mb-5">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>

            <h4>Growth opportunities</h4>
            <p className="come mb-5">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>

            <h4>Exciting work environment</h4>
            <p className="come mb-5">
              Work in a highly motivated environment with talented people. A
              positive work environment, ensures a productive and happy you.
            </p>
          </div>
          {/* col-md-5 div end */}
          <div className="col-md-6 mb-5 ms-1">
            <div className="card shade">
              <h5 className="mt-2 ms-4">Share your Details</h5>
              <div className="card-body">
                <form action="">
                  {/* name */}
                  <div className="mb-4">
                    <label className="mb-2">Your Name:</label>
                    <input
                      type="text"
                      className="form-control for"
                      placeholder="Name"
                    />
                  </div>
                  {/* email */}
                  <div className="mb-4">
                    <label className="mb-2">Your Email:</label>
                    <input
                      type="email"
                      className="form-control for"
                      placeholder="Email"
                    />
                  </div>
                  {/* phone */}
                  <div className="mb-4">
                    <label className="mb-2">Your Phone:</label>
                    <input
                      type="number"
                      className="form-control for"
                      placeholder="Phone"
                    />
                  </div>
                  {/* message */}
                  <div className="mb-4">
                    <label className="mb-2">Message:</label>
                    <input
                      type="message"
                      className="form-control for"
                      placeholder="Message"
                    />
                  </div>
                  {/* button */}
                  <button className="btn btn-warning btn-lg text-light">
                    Submit
                  </button>
                </form>
              </div>
              {/* card-body div end */}
            </div>
            {/* card div end */}
          </div>
          {/* col-md-6 div end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      <br />
      <br />
    </>
  );
}

export default Careers