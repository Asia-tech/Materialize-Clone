import React from "react";
import "./team.css";
import img1 from "../../Assets/company/ramp.svg";
import img2 from "../../Assets/company/pluralsight.svg";
import img3 from "../../Assets/company/drizly.svg";
import img4 from "../../Assets/company/kepler.svg";
import img5 from "../../Assets/company/centerfield.png";
import img6 from "../../Assets/company/onward.png";

const Team = () => {
  return (
    <>
      <section className="team-sec row  container    mx-auto margin-bottom">
        <div className="card mx-auto ">
          <div>
            <h2>Trusted by data and engineering teams</h2>
            <div className="team-images flex">
              <img src={img1} title="Ramp" alt="Ramp" width={110} height={64} />
              <img
                src={img2}
                alt="pluralsight"
                title="Pluralsight"
                width={110}
                height={64}
              />
              <img
                src={img3}
                alt="Drizly"
                title="Drizly"
                width={110}
                height={64}
              />
              <img
                src={img4}
                alt="Kepler"
                title="Kepler"
                width={110}
                height={64}
              />
              <img
                src={img5}
                alt="Centerfield"
                title="Centerfield"
                width={110}
                height={64}
              />
              <img
                src={img6}
                alt="onward"
                title="Onward"
                width={110}
                height={64}
              />
            </div>
            <div className="markdown-text">
              <p>
                View &nbsp;
                <a href="https://materialize.com/customer-stories/">
                  Customer Stories
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="margin-top"></div>
    </>
  );
};

export default Team;
