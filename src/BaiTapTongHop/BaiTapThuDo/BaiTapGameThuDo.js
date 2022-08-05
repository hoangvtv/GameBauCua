import React from "react";
import NavBar from "./NavBar";
import "./assets/css/style.css";

export default function BaiTapGameThuDo() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="text-center">
              <img
                src={require("./assets/images/cybersoft.png")}
                alt="Card image"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title text-center">
                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                - Virtual Dressing Room
              </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <NavBar />
    </div>
  );
}
