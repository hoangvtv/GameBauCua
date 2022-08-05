import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function ChildUseEffect() {
  console.log("render ChildUseEffect");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    //viết cho didupdate
    console.log("didupdate");

    return () => {
      //khi component chạy xóa khỏi giao dịện cái gì
      console.log("willunmount");
    };
  }, [number]);
  return (
    <div>
      <textarea></textarea> <br /> <br />
      <button className="btn btn-success"> Gửi</button>
    </div>
  );
}
