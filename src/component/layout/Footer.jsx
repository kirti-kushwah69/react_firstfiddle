function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row foot">
            <div className="col-md-5">
              <img
                src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                alt=""
                className="flogo"
              />
            </div>
            <div className="col-md-6">
              <h1 className="contact text-white">
                <b className="color">CONTACT</b> US
              </h1>
              <p className="para2">
                We are a team focusing on redefining the way the hospitality
                industry works by bringing in concept based restaurants across
                India. We are truly committed to catering to the ever-changing
                cosmopolitan taste of the customer and revolutioning the F & B
                industry!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="aa">Address</h4>
                  <p className=" text-white">
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                    Park, New Delhi, Delhi 110017
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="aa">enquiry</h4>
                  <p className=" text-white aaa">
                    Email:{" "}
                    <span className="color">customercare@firstfiddle.in</span>
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <a href="" className="icon">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className="icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" className="icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                {/* row 1 end */}
              </div>
              {/* row 1 end */}
            </div>
            <div className="col-md-1"></div>
          </div>
          {/* row end */}
        </div>
        {/* container-fluid end */}
      </footer>

      {/* container-fluid 2 start */}
      <div className="last">
        <span>
          EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP
          <br />
          COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED
        </span>
      </div>
      {/* container-fluid 2 end */}
    </>
  );
}

export default Footer