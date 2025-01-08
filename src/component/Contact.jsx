function Contact() {
  return (
    <>
      <div className="container-fluid ccccc">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="our">CONTACT US</h1>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* roww end */}
      </div>
      {/*container div */}

      {/*  banner end */}

      {/* send us div start */}

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4 ">
            <h4 className="mt-4 mb-4 send">SEND US MESSAGE</h4>
            <form action="">
              {/* name */}
              <div className="mb-3 mt-4 ">
                <input
                  type="text"
                  className="form-control for"
                  placeholder="Name*"
                />
              </div>
              {/* email */}
              <div className="mb-3 mt-4">
                <input
                  type="email"
                  className="form-control for"
                  placeholder="Email*"
                />
              </div>
              {/* phone */}
              <div className="mb-3 mt-4">
                <input
                  type="number"
                  className="form-control for"
                  placeholder="Phone*"
                />
              </div>
              {/* message */}
              <div className="mb-3 mt-4">
                <input
                  type="message"
                  className="form-control for"
                  placeholder="Message*"
                />
              </div>
              {/* button */}
              <button className="btn btn-warning btn-lg text-light">
                Submit
              </button>
            </form>
          </div>
          {/* COL-MD-6*/}

          <div className="col-md-5 mt-4 ms-1">
            <h2 className="mt-4 mb-4 send">CONTACT INFO</h2>
            <h6 style={{ color: "orange" }}>Address</h6>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi
              110021
            </p>
            {/* franchise enquiry */}
            <h6 style={{ color: "orange" }}>For Franchise Enquiry</h6>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              MOBILE: <b style={{ color: "orange" }}>+91 9313663486</b>
            </p>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              EMAIL: <b style={{ color: "orange" }}>franchise@firstfiddle.in</b>
            </p>

            {/* hr info */}
            <h6 style={{ color: "orange" }}>For HR Enquiry</h6>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              MOBILE: <b style={{ color: "orange" }}>+91 9999304427</b>
            </p>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              EMAIL: <b style={{ color: "orange" }}>hr@firstfiddle.in</b>
            </p>

            {/* for other enquiry */}

            {/* hr info */}
            <h6 style={{ color: "orange" }}>For Other Enquiry</h6>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              PHONE: <b style={{ color: "orange" }}>7676380000</b>
            </p>
            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              EMAIL:
              <b style={{ color: "orange" }}>customercare@firstfiddle.in</b>
            </p>

            <p style={{ fontWeight: "lighter", fontSize: "18px" }}>
              Open: Monday - Saturday 10:30 - 19:30
            </p>
          </div>
          {/* col-5 div  end*/}
        </div>
        {/* row END */}
      </div>
      {/* container end */}
      <br /><br />
    </>
  );
}

export default Contact;
