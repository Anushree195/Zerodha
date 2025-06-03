import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";

function Universe() {
  return (
    <div>
      <div className="container mt-5  mb-4">
        <div className="row align-items-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with out
            partner platforms
          </p>

          <div className="col-4 p-3 mt-5">
            <img src="media/smallcaseLogo.png" />
            <p className="text-muted text-muted">
              Thematic investing platform{" "}
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img src="media/streakLogo.png" style={{ width: "50%" }} />
            <p className="text-muted text-muted"></p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img src="media/sensibullLogo.svg" />
            <p className="text-muted text-muted"></p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} />
            <p className="text-muted text-muted">
              Thematic investing platform{" "}
            </p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img src="media/goldenpiLogo.png" />
            <p className="text-muted text-muted"></p>
          </div>

          <div className="col-4 p-3 mt-5">
            <img src="media/dittoLogo.png" style={{ width: "50%" }} />
            <p className="text-muted text-muted"></p>
          </div>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
