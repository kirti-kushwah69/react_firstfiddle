function OurTeam() {
  return (
    <>
      <div className="container-fluid ccot">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="our">MEET THE TEAM</h1>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* roww end */}
      </div>
      {/* container-fluid end*/}
      
      <br /><br /><br />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <center>
              <img
                src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg"
                alt=""
                className="w-100"
              />
            </center>
          </div>
          <div className="col-md-7">
            <h1 className="mt-3">Priyank Sukhija</h1>
            <b>C.E.O. & M.D.</b>
            <p className="para3">
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a business
              tycoon in the hospitality industry. Once he began, there was no
              stopping this entrepreneur from reaching the heights he has
              reached today. It is the passion and creative streak of Priyank
              Sukhija that has made him the most watched-out restaurateur of
              today’s time. Coming from a family of lawyers, he ventured into
              the business world on his own with Lazeez Affaire in 1999 and has
              never looked back since.
            </p>
            <button className="btn btn-warning btn-lg mb-3 text-white ">
              READ MORE
            </button>

            <div className="row">
              <div className="col-md-6 mb-5">
                <a href="#">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "orange", fontSize: "40px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-brands fa-twitter"
                    style={{
                      color: "orange",
                      fontSize: "40px",
                      marginLeft: "3px",
                    }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-brands fa-instagram"
                    style={{
                      color: "orange",
                      fontSize: "40px",
                      marginLeft: "3px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      <br />
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo pp1">
              <h4
                className="text-center text-light"
                style={{ paddingTop: "7cm" }}
              >
                Y.P. ASHOK
              </h4>
              <p className="text-center text-light">Chairman</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo pp2">
              <h4
                className="text-center text-light"
                style={{ paddingTop: "7cm" }}
              >
                B.R. SACHDEVA
              </h4>
              <p className="text-center text-light">Director Finace & Legal</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo pp3">
              <h4
                className="text-center text-light"
                style={{ paddingTop: "7cm" }}
              >
                SAGAR BAJAJ
              </h4>
              <p className="text-center text-light">Corporate Chef</p>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo pp4">
              <h4
                className="text-center text-light"
                style={{ paddingTop: "7cm" }}
              >
                JAY SHANKAR NATRAJK
              </h4>
              <p className="text-center text-light">Franchise Lead</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo pp5">
              <h4
                className="text-center text-light"
                style={{ paddingTop: "7cm" }}
              >
                VIBHUTI SOOD
              </h4>
              <p className="text-center text-light">
                PR And Communications Head
              </p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      {/* // container end */}
    </>
  );
}

export default OurTeam