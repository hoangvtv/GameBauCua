import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DiemCuoc() {
  const diemThuong = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.tongDiem
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3
        className="text-center display-4"
        style={{
          color: "green",
          marginTop: 0,
        }}
      >
        Bầu cua Demo
      </h3>

      <div className="text-center  mt-5">
        <span
          className="p-3 text-light bg-danger"
          style={{
            fontSize: "20px",
            borderRadius: "10px",
          }}
        >
          Tiền thưởng:
          <span className="text-warning">{diemThuong.toLocaleString()} $</span>
        </span>
      </div>

      <div className="text-center  mt-5 ">
        <button
          className="btn btn-success"
          style={{
            fontSize: "15px",
            borderRadius: "10px",
            padding: "10px",
          }}
          onClick={() => {
            dispatch({
              type: "CHOI_LAI",
            });
          }}
        >
          {" "}
          Chơi lại{" "}
        </button>
      </div>
    </div>
  );
}
