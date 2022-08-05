import React from "react";

export default function NavBar() {
  return (
    <div className="row">
      <div className="col-md-8">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link active  btn-default"
              data-toggle="pill"
              href="#tabTopClothes"
            >
              Áo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  btn-default"
              data-toggle="pill"
              href="#tabBotClothes"
            >
              Quần
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#tabShoes">
              Giày dép
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#tabHandBags">
              Túi xách
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#tabNecklaces">
              Dây chuyền
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#tabHairStyle">
              Kiểu tóc
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#tabBackground">
              Nền
            </a>
          </li>
        </ul>
        <div className="well">
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active" id="tabTopClothes">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth1_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth2_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth3_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth4_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth5_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img
                        src={require("./assets/images/clothes/topcloth6_show.jpg")}
                      />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane container fade" id="tabBotClothes">
              tabBotClothes
            </div>
            <div className="tab-pane container fade" id="tabShoes">
              tabShoes
            </div>
            <div className="tab-pane container fade" id="tabHandBags">
              tabHandBags
            </div>
            <div className="tab-pane container fade" id="tabNecklaces">
              tabNecklaces
            </div>
            <div className="tab-pane container fade" id="tabHairStyle">
              tabHairStyle
            </div>
            <div className="tab-pane container fade" id="tabBackground">
              tabBackground
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contain">
          <div className="body" />
          <div className="model" />
          <div
            className="hairstyle"
            style={{
              width: 1000,
              height: 1000,
              background: 'url("./assets/images/hairstyle/hairstyle3.png")',
              position: "absolute",
              top: "-75%",
              right: "-57%",
              transform: "scale(0.15)",
              zIndex: 4,
            }}
          />
          <div
            className="necklace"
            style={{
              width: 500,
              height: 1000,
              background: 'url("./assets/images/necklaces/necklace3.png")',
              position: "absolute",
              bottom: "-40%",
              right: "-3.5%",
              transform: "scale(0.5)",
              zIndex: 4,
            }}
          />
          <div
            className="bikinitop"
            style={{
              width: 500,
              height: 500,
              background: 'url("./assets/images/clothes/topcloth5.png")',
              position: "absolute",
              top: "-9%",
              left: "-5%",
              zIndex: 3,
              transform: "scale(0.5)",
            }}
          />
          <div
            className="bikinibottom"
            style={{
              width: 500,
              height: 1000,
              background:
                'url( ${require("./assets/images/clothes/botcloth4.png")})',
              position: "absolute",
              top: "-30%",
              left: "-5%",
              zIndex: 2,
              transform: "scale(0.5)",
            }}
          />
          <div
            className="handbag"
            style={{
              width: 500,
              height: 1000,
              background:
                'url( ${require("./assets/images/handbags/handbag2.png")})',
              position: "absolute",
              bottom: "-40%",
              right: "-3.5%",
              transform: "scale(0.5)",
              zIndex: 4,
            }}
          />
          <div
            className="feet"
            style={{
              width: 500,
              height: 1000,
              background:
                'url( ${require("./assets/images/shoes/shoes2.png")})',
              position: "absolute",
              bottom: "-37%",
              right: "-3.5%",
              transform: "scale(0.5)",
              zIndex: 1,
            }}
          />
          <div
            className="background"
            style={{
              backgroundImage:
                'url( ${require("./assets/images/background/background1.jpg")})',
            }}
          />
        </div>
      </div>
    </div>
  );
}
