import React from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";
import "./BaiTapGameBauCua.css";

export default function BaiTapGameBauCua(props) {
  return (
    console.log("Press Ctrl+Shift+P to open the console"),
    (
      <div id="BaiTapGameBauCua" className="container-fluid">
        <DiemCuoc />

        <div className="row">
          <div className="col-8">
            <DanhSachCuoc />
          </div>
          <div className="col-4">
            <DanhSachXucXac />
          </div>
        </div>
      </div>
    )
  );
}
