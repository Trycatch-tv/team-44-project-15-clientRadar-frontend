import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/ui/Navbar";

const developers = [
  {
    image: "https://ca.slack-edge.com/T051HRPFF52-U053WTW9BRN-d7fdae10ad6b-512",
    fullname: "Camilo Soto",
    roll: "Team Leader",
    skils: "Python, Javascript, MySql, MongoDb",
    linkedin: "camilo-alejandro-s-4a3132105/",
    github: "imCsCorp",
    gmail: "camilo.alejandro.soto.v@gmail.com",
  },
  {
    image: "https://ca.slack-edge.com/T051HRPFF52-U053Q13S6M6-1b16fca14bff-512",
    fullname: "Daniel Valencia",
    roll: "FullStack Developer",
    skils: "Python, JavaScript, MySql",
    linkedin: "",
    github: "DavsProg",
    gmail: "valencia.svfc@gmail.com",
  },
];

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>CLIENT RADAR</title>
      </Helmet>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          {developers.map((dev) => (
            <div key={`card_${dev.fullname}`} className="col-md-4 mx-auto">
              <div className="card text-center">
                <img
                  src={dev.image}
                  class="rounded-circle px-4 pt-4 card-img-top"
                  alt={`profile ${dev.fullname}`}
                />
                <div className="card-body">
                  <h5 class="card-title ">{dev.fullname}</h5>
                  <p className="card-text">{dev.roll}</p>
                  <p className="card-text">{dev.skils}</p>
                </div>
                <div className="card-body">
                  {dev.linkedin ? (
                    <a
                      className="btn btn-outline-primary mx-2"
                      href={`https://www.linkedin.com/in/${dev.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  ) : null}
                  {dev.github ? (
                    <a
                      className="btn btn-outline-dark mx-2"
                      href={`https://github.com/${dev.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                  ) : null}

                  {dev.gmail ? (
                    <a
                      className="btn btn-outline-danger mx-2"
                      href={`mailto:${dev.gmail}`}
                    >
                      <i className="fa-solid fa-envelope" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
