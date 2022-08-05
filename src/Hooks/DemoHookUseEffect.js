import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseEffect(props) {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  console.log(like);

  //hàm chạy sau khi giao diện render, thay cho didmount và didupdate trong mọi trường hợp
  //   useEffect(() => {
  //     console.log("didmount");
  //     console.log("didupdate");
  //   });

  //   //cách viết thay thế cho component didmount
  //   useEffect(() => {
  //     console.log("didmount");
  //   }, []);

  //cách viết thy thế cho component
  useEffect(() => {
    console.log("didupdate khi number bị thay đổi");
    return () => {
      //khi component chạy xóa khỏi giao dịện cái gì
      console.log("willunmount");
    };
  }, [number]); //number là giá trị nếu bị thay đổi thì useEffect này sẽ chạy

  //   useEffect(() => {
  //     console.log("didupdate khi number bị thay đổi");
  //     return () => {
  //       //khi component chạy xóa khỏi giao dịện cái gì
  //       console.log("willunmount");
  //     };
  //   }, [number,like]); //number hoặc like thay đổi thì sẽ chạy

  console.log("render");

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div className="m-5">
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        Like
      </button>
      <div className="card text-left" style={{ width: 200, height: 300 }}>
        <img
          style={{ width: 200, height: 200 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title text-danger">{number}♥</h4>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
      {like === 1 ? <ChildUseEffect /> : ""}
    </div>
  );
}
